package storage

type Storage interface {
	Connect() error
	Upload([]byte) error
	Touch() error
	Listdir() []string
}
