package http

import (
	"encoding/json"
	"fmt"
	"net/http"

	"server/internal/response"
	"server/internal/storage"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func Listen(port int, useTls bool, certPath string, keyPath string, s storage.Storage) {
	e := echo.New()

	e.Use(middleware.CORS())
	e.Use(middleware.Recover())
	e.Use(middleware.Logger())
	//e.Use(middleware.CORSWithConfig(middleware.CORSConfig{}))

	e.POST("/form", formPost(s))
	e.GET("/health", healthGet)

	if useTls == true {
		e.Pre(middleware.HTTPSRedirect())
		e.Logger.Fatal(e.StartTLS(fmt.Sprintf(":%d", port), certPath, keyPath))
	} else {
		e.Logger.Fatal(e.Start(fmt.Sprintf(":%d", port)))
	}
}

func formPost(s storage.Storage) func(c echo.Context) error {
	return func(c echo.Context) error {
		// unmarshall response
		res := new(response.Response)
		if err := c.Bind(res); err != nil {
			fmt.Println(err)
			return c.NoContent(400)
		}

		json_dump, _ := json.Marshal(res)
		filename, err := s.Upload(json_dump)

		if err != nil {
			fmt.Println("Failed to upload:", err)
		} else {
			fmt.Println("Uploaded:", filename)
		}

		return c.NoContent(200)
	}
}

func healthGet(c echo.Context) error {
	health := &struct {
		Healthy bool `json:"healthy"`
	}{Healthy: true}
	return c.JSON(http.StatusOK, health)
}
