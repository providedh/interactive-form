# Interactive form
_A [Golang](https://golang.org/)-based solution for retrieving and storing interactive form responses._

### What it provides
The server provides a single endpoint used for retrieving responses comming from the front-end application
in this same repository.

The formulary JSON responses are checked against a schema and the stored locally. The expected eschema responds
to the following declaration:

```
type annotationType struct {
	Source              string   `json:"source"`
	Words               []int    `json:"words"`
	UserCategories      []string `json:"userCategories"`
	ProvidedhCategories []string `json:"providedhCategories"`
}

type userType struct {
	Age        int    `json:"age"`
	Gender     string `json:"gender"`
	Education  string `json:"education"`
	Field      string `json:"field"`
	PreviousDH string `json:"previousDH"`
	Researcher string `json:"researcher"`
}

type taxonomyVersion []string

type taxonomyType struct {
	NewCategory     string            `json:"newCategory"`
	DraggedCategory string            `json:"draggedCategory"`
	Categories      taxonomyVersion   `json:"categories"`
	Historic        []taxonomyVersion `json:"historic"`
}

type Response struct {
	Annotations []annotationType `json:"annotations"`
	User        userType         `json:"user"`
	Taxonomy    taxonomyType     `json:"taxonomy"`
}
```

### How to use it
The code uses vendoring to get the dependencies. Run `go run cmd/cmd.go` to run the server without compiling it and
run `go build -o <binary-name> cmd/cmd.go` to build the binary.

The resulting file is the binary to be executed, which will take the configuration either from command-line
arguments, or via environment variables.

### Configuring the execution
This program allows listening and forwarding form responses,listing them, and retrieving the responses. Therefore,
parameters can be provided for the desired storage and action.

The server allows configuring two different settings: the 1)port to bound and 2)whether to use TLS for secure
data transfer; the later requires setting too the certificate and private key pem files locations.

The tool itself has a help utility (`binary [h, help, -h, --help]`) that provides information for the available
parameters for each of the options.
