package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"server/internal/config"
	"server/internal/response"

	"github.com/ilyakaznacheev/cleanenv"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func getOutputCount(cfg *config.Config) int {
	var files []string

	root := cfg.OutputDir
	err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
		files = append(files, path)
		return nil
	})

	if err != nil {
		panic(err)
	}

	return len(files)
}

func formPost(cfg *config.Config) func(c echo.Context) error {
	return func(c echo.Context) error {
		// unmarshall response
		res := new(response.Response)
		if err := c.Bind(res); err != nil {
			fmt.Println(err)
			return c.NoContent(400)
		}

		// write response to file
		filename := fmt.Sprintf("reponse_%d.json", getOutputCount(cfg))
		path := filepath.Join(cfg.OutputDir, filename)
		json_dump, _ := json.Marshal(res)
		d1 := []byte(json_dump)

		if err := ioutil.WriteFile(path, d1, 0644); err != nil {
			fmt.Println(err)
			return c.NoContent(500)
		}

		return c.NoContent(200)
	}
}

func serve(cfg *config.Config) {
	e := echo.New()

	e.Use(middleware.CORS())
	//e.Use(middleware.CORSWithConfig(middleware.CORSConfig{}))

	e.POST("/form", formPost(cfg))

	e.Logger.Fatal(e.Start(fmt.Sprintf(":%s", cfg.Port)))
}

func main() {
	var cfg config.Config

	args := config.ProcessArgs(&cfg)

	// read configuration from the file and environment variables
	if err := cleanenv.ReadConfig(args.ConfigPath, &cfg); err != nil {
		fmt.Println(err)
		os.Exit(2)
	}

	serve(&cfg)
}
