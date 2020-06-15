package main

import (
	"fmt"
	"os"

	"github.com/urfave/cli/v2"
)

func getCli() *cli.App {
	app := &cli.App{
		Name:                 "Interactive form server",
		Usage:                "Handle form responses uploads to Google Drive.",
		EnableBashCompletion: true,
		Version:              "v0.1",
		Commands: []*cli.Command{
			{
				Name:  "listen",
				Usage: "Listen for form responses.",
				Flags: []cli.Flag{
					&cli.IntFlag{
						Name:    "port",
						Aliases: []string{"p"},
						Value:   8080,
						Usage:   "bind to `PORT`.",
						EnvVars: []string{"INTERACTIVE_FORM_PORT", "FORM_PORT", "PORT"},
					},
				},
				Action: func(c *cli.Context) error {
					fmt.Printf("Listen on port :%d", c.Int("port"))
					return nil
				},
			},
			{
				Name:  "auth",
				Usage: "Authenticate app using the Google Cloud Platform.",
				Action: func(c *cli.Context) error {
					return nil
				},
			},
		},
	}

	return app
}

func main() {
	cli := getCli()
	cli.Run(os.Args)
}
