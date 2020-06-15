dev:
	go run cmd/cmd.go

build: ./dist ./dist/interactive_form_server

./dist:
	mkdir dist

./dist/interactive_form_server:
	go mod vendor
	go build cmd/cmd.go
	mv cmd dist/interactive_form_server

.PHONY: dev
.PHONY: build
.PHONY: ./build/interactive_form_server
