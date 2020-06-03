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
The code uses vendoring to get the dependencies. Run `make dev` to run the server without compiling it and
run `make build` to build the binary, which will be available in the _dist_ folder as `interactive_form_server`.

The resulting file is the binary to be executed, which will take the configuration from a `config/config.json`
file relative to its location.

### Configuring the execution
The server allows configuring two different settings: the 1)port to bound and the 2)output directory. This
may be configured through the [configuration JSON](config/config.json) and environment variables.

1. Change the already present default configuration in the [configuration JSON](config/config.json).
2. Overwrite the settings using the `SERVER_PORT` and `FORM_OUTPUT_DIR` environment variables.
