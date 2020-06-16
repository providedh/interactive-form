package storage

type Storage interface {
	Connect() error
	Upload([]byte) (string, error)
	Touch() error
	Listdir() []string
}
