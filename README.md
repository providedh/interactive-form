# Interactive form
_Approaching the uncertainty usage from a DH point of view._

### About this repository
It holds the code for both the front-end and back-end of a web-based interactive formulary aimed
at collecting informationg about __the usage of a taxonomy to describe uncertainty assoicated to
a piece of text__, and the tools used for performing the analysis.

#### Structure
The repository has four folders that contain:
- [/analysis](analysis) The requirements, configuration and notebook for the [Jupyter notebook](https://jupyter.org/)
server used in the analysis of the formulary responses.
- [/frontend](frontend) The code for the web front-end application.
- [/backend](backend) The code for the API server used to retrieve and save the form responses.
- [/docs](docs) The bundled version of the front-end application, served using Github pages at 
[https://providedh.github.io/interactive-form/](https://providedh.github.io/interactive-form/).

### How to use it
The bundled version of the front-end application and the compiled version of the server are available
for download for each [release](https://github.com/providedh/interactive-form/releases) of the formulary.

1. The bundled front-end application can be used by opening with a web browser, or served using the static
server of choice; such as [Nginx](https://www.nginx.com/).
2. The compiled binary for the server code can be executed in any Linux-based x64 machine. For more information
see the [Readme](backend/README.md) for the back-end code.
