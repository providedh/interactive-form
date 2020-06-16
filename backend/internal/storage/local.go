package storage

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
	fpath "path/filepath"
	"time"

	"github.com/gofrs/uuid"
)

type local struct {
	Dest string
}

func (s local) Listdir() {
	files, err := ioutil.ReadDir(s.Dest)
	if err != nil {
		log.Fatal(err)
	}
	for _, f := range files {
		fmt.Println(f.Name())
	}
}

func (s local) RetrieveToDir(dir string) error {
	var files int = 0

	fmt.Println("Retrieving files...")
	fpath.Walk(s.Dest, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() == true {
			return nil
		}
		if content, err := ioutil.ReadFile(path); err != nil {
			return err
		} else {
			dest := fpath.Join(dir, fpath.Base(path))
			err := ioutil.WriteFile(dest, content, 0644)

			if err == nil {
				files++
			}
		}
		return nil
	})

	fmt.Printf("Retrieved %d files.\n", files)

	return nil
}

func (s local) Upload(content []byte) (string, error) {
	filename := getFilename()
	filepath := fpath.Join(s.Dest, filename)

	if err := ioutil.WriteFile(filepath, content, 0644); err != nil {
		fmt.Println(err)
		return "", err
	} else {
		return filename, nil
	}
}

func LocalStorage(dest string) local {
	return local{Dest: dest}
}

func getFilename() string {
	t := time.Now()
	uuid, _ := uuid.NewV4()

	return fmt.Sprintf("%s-%v.json", t.Format("20060102"), uuid)
}
