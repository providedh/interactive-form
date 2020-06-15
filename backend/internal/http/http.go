package http

import (
	"encoding/json"
	"fmt"

	"server/internal/response"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func Listen(port int, useTls bool, certPath string, keyPath string) {
	e := echo.New()

	e.Pre(middleware.HTTPSRedirect())
	e.Use(middleware.Recover())
	e.Use(middleware.Logger())
	//e.Use(middleware.CORSWithConfig(middleware.CORSConfig{}))

	e.POST("/form", formPost)

	if useTls == true {
		e.Use(middleware.CORS())
		e.Logger.Fatal(e.StartTLS(fmt.Sprintf(":%d", port), certPath, keyPath))
	} else {
		fmt.Println(fmt.Sprintf(":%d", port))
		e.Logger.Fatal(e.Start(fmt.Sprintf(":%d", port)))
	}
}

func formPost(c echo.Context) error {
	// unmarshall response
	res := new(response.Response)
	if err := c.Bind(res); err != nil {
		fmt.Println(err)
		return c.NoContent(400)
	}

	json_dump, _ := json.Marshal(res)
	//byte_dump := []byte(json_dump)
	fmt.Println(json_dump)

	return c.NoContent(200)
}
