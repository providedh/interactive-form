package main

import (
	"os"

	"server/internal/http"
	"server/internal/storage"

	"github.com/urfave/cli/v2"
)

func getCli() *cli.App {
	app := &cli.App{
		Name:                 "Interactive form server",
		Usage:                "Handle and forward form responses to a known storage provider.",
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

				Subcommands: []*cli.Command{
					{
						Name:  "azure",
						Usage: "Forward form responses to Azure Blob Storage.",
						Flags: []cli.Flag{
							&cli.StringFlag{
								Name:    "key",
								Value:   "",
								Usage:   "Azure storage private key.",
								EnvVars: []string{"AZR_KEY"},
							},
							&cli.StringFlag{
								Name:    "account",
								Value:   "",
								Usage:   "Azure blob storage account name.",
								EnvVars: []string{"AZR_ACCOUNT"},
							},
							&cli.StringFlag{
								Name:    "container",
								Value:   "",
								Usage:   "Azure blob storage's container to which to upload.",
								EnvVars: []string{"AZR_CONTAINER"},
							},
						},
						Action: func(c *cli.Context) error {
							var s storage.Storage
							s = storage.AzureBlobStorage(c.String("key"), c.String("account"), c.String("container"))
							http.Listen(c.Int("port"), c.Bool("tls"), c.String("cert"), c.String("key"), s)

							return nil
						},
					},
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
