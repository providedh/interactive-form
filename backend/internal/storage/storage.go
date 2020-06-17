package storage

type Storage interface {
	Upload([]byte) (string, error)
	RetrieveToDir(string) error
	Listdir()
}
