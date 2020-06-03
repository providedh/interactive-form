package response

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
