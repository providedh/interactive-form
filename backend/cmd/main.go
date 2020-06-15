package main

import (
	"fmt"
	"os"

	"server/internal/http"

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
					&cli.BoolFlag{
						Name:    "tls",
						Value:   false,
						Usage:   "use secure TLS connection.",
						EnvVars: []string{"TLS"},
					},
					&cli.StringFlag{
						Name:    "cert",
						Value:   "./cert.pem",
						Usage:   "Path to public cretificate pem file for TLS (ignored if not using tls).",
						EnvVars: []string{"CERT_FILE"},
					},
					&cli.StringFlag{
						Name:    "key",
						Value:   "./key.pem",
						Usage:   "Path to private key pem file for TLS (ignored if not using tls).",
						EnvVars: []string{"KEY_FILE"},
					},
				},
				Action: func(c *cli.Context) error {
					fmt.Printf("Listen on port :%d", c.Int("port"))
					fmt.Println("____")
					http.Listen(c.Int("port"), c.Bool("tls"), c.String("cert"), c.String("key"))

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
