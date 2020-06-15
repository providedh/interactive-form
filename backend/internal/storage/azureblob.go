package storage

import (
	"fmt"
	"io/ioutil"
	"net/url"
	"time"

	"github.com/Azure/azure-storage-blob-go/azblob"
	"github.com/gofrs/uuid"
	"golang.org/x/net/context"
)

type azureBlob struct {
	key, accountName, serviceEndpoint, container string
}

func (s azureBlob) Connect() error {
	return nil
}

func (s azureBlob) Listdir() []string {
	files := []string{}
	return files
}

func (s azureBlob) Touch() error {
	return nil
}

func (s azureBlob) Upload(content []byte) error {
	fmt.Println(string(content))
	return nil
}

func AzureBlobStorage(key string, accountName string, container string) azureBlob {
	serviceEndpoint := fmt.Sprintf("https://%s.blob.core.windows.net/", accountName)
	s := azureBlob{
		key,
		accountName,
		serviceEndpoint,
		container,
	}
	return s
}

func readFile(filePath string) ([]byte, error) {
	dat, err := ioutil.ReadFile(filePath)

	if err != nil {
		return nil, err
	} else {
		return dat, nil
	}
}

func uploadBytesToBlob(b []byte, key string, accountName string, endPoint string, container string) (string, error) {
	u, _ := url.Parse(fmt.Sprint(endPoint, container, "/", getBlobName()))
	credential, errC := azblob.NewSharedKeyCredential(accountName, key)
	if errC != nil {
		return "", errC
	}

	blockBlobUrl := azblob.NewBlockBlobURL(*u, azblob.NewPipeline(credential, azblob.PipelineOptions{}))

	ctx := context.Background()
	o := azblob.UploadToBlockBlobOptions{
		BlobHTTPHeaders: azblob.BlobHTTPHeaders{
			ContentType: "image/jpg",
		},
	}

	_, errU := azblob.UploadBufferToBlockBlob(ctx, b, blockBlobUrl, o)
	return blockBlobUrl.String(), errU
}

func getBlobName() string {
	t := time.Now()
	uuid, _ := uuid.NewV4()

	return fmt.Sprintf("%s-%v.jpg", t.Format("20060102"), uuid)
}
