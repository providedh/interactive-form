package storage

import (
	"fmt"
	"io/ioutil"
	"net/url"
	"os"
	"time"

	"github.com/Azure/azure-storage-blob-go/azblob"
	"github.com/gofrs/uuid"
	"golang.org/x/net/context"
)

type azureBlob struct {
	Key, AccountName, ServiceEndpoint, Container string
}

func AzureBlobStorage(Key string, AccountName string, Container string) azureBlob {
	ServiceEndpoint := fmt.Sprintf("https://%s.blob.core.windows.net/", AccountName)
	s := azureBlob{
		Key,
		AccountName,
		ServiceEndpoint,
		Container,
	}

	if _, err := getAzureCredential(s); err != nil {
		panic(err)
	}

	return s
}

func (s azureBlob) Listdir() {
	credential, err := getAzureCredential(s)
	if err != nil {
		fmt.Println(err)
		return
	}

	walkContainer(s, credential, func(blobItem azblob.BlobItem) {
		fmt.Printf(" Blob name: %s\n", blobItem.Name)
	})
}

func (s azureBlob) RetrieveToDir(dir string) error {
	var files int = 0

	credential, err := getAzureCredential(s)
	if err != nil {
		return err
	}

	fmt.Println("Retrieving files...")
	walkContainer(s, credential, func(blobItem azblob.BlobItem) {
		fmt.Printf(" Blob name: %s\n", blobItem.Name)
		err = downloadBlobToFile(blobItem, dir, s, credential)

		if err != nil {
			fmt.Println(err)
		} else {
			files++
		}
	})

	fmt.Printf("Retrieved %d files.\n", files)
	return nil
}

func (s azureBlob) Upload(content []byte) (string, error) {
	filename, err := uploadBytesToBlob(content, s)

	return filename, err
}

func readFile(filePath string) ([]byte, error) {
	dat, err := ioutil.ReadFile(filePath)

	if err != nil {
		return nil, err
	} else {
		return dat, nil
	}
}

func getAzureCredential(s azureBlob) (*azblob.SharedKeyCredential, error) {
	if credential, err := azblob.NewSharedKeyCredential(s.AccountName, s.Key); err != nil {
		return nil, err
	} else {
		return credential, nil
	}
}

func downloadBlobToFile(blobItem azblob.BlobItem, dir string,
	s azureBlob, credential *azblob.SharedKeyCredential) error {
	filepath := fmt.Sprintf("%s/%s", dir, blobItem.Name)
	file, err := os.Create(filepath)
	defer file.Close()

	if err != nil {
		return err
	}

	p := azblob.NewPipeline(credential, azblob.PipelineOptions{})
	u, _ := url.Parse(fmt.Sprint(s.ServiceEndpoint, s.Container, "/", blobItem.Name))
	blobURL := azblob.NewBlobURL(*u, p)
	options := azblob.DownloadFromBlobOptions{}
	ctx := context.Background()

	azblob.DownloadBlobToFile(ctx, blobURL, 0, 0, file, options)
	return nil
}

func uploadBytesToBlob(b []byte, s azureBlob) (string, error) {
	credential, _ := getAzureCredential(s)

	blobName := getBlobName()
	u, _ := url.Parse(fmt.Sprint(s.ServiceEndpoint, s.Container, "/", blobName))
	p := azblob.NewPipeline(credential, azblob.PipelineOptions{})
	blockBlobUrl := azblob.NewBlockBlobURL(*u, p)

	ctx := context.Background()
	o := azblob.UploadToBlockBlobOptions{
		BlobHTTPHeaders: azblob.BlobHTTPHeaders{
			ContentType: "application/json",
		},
	}

	_, errU := azblob.UploadBufferToBlockBlob(ctx, b, blockBlobUrl, o)
	return blobName, errU
}

func walkContainer(s azureBlob, credential *azblob.SharedKeyCredential, f func(azblob.BlobItem)) {
	p := azblob.NewPipeline(credential, azblob.PipelineOptions{})
	containerEndpoint := fmt.Sprintf("%s%s", s.ServiceEndpoint, s.Container)
	URL, _ := url.Parse(containerEndpoint)
	containerURL := azblob.NewContainerURL(*URL, p)
	ctx := context.Background()

	for marker := (azblob.Marker{}); marker.NotDone(); {
		// Get a result segment starting with the blob indicated by the current Marker.
		listBlob, err := containerURL.ListBlobsFlatSegment(ctx, marker, azblob.ListBlobsSegmentOptions{})

		if err != nil {
			fmt.Println(err)
			continue
		}

		// ListBlobs returns the start of the next segment; you MUST use this to get
		// the next segment (after processing the current result segment).
		marker = listBlob.NextMarker

		// Process the blobs returned in this result segment (if the segment is empty, the loop body won't execute)
		for _, blobItem := range listBlob.Segment.BlobItems {
			f(blobItem)
		}
	}
}

func getBlobName() string {
	t := time.Now()
	uuid, _ := uuid.NewV4()

	return fmt.Sprintf("%s-%v.json", t.Format("20060102"), uuid)
}
