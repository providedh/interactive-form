dev:
	go run http/main.go

build: ./dist ./dist/interactive_form_server

./dist:
	mkdir dist

./dist/interactive_form_server:
	go mod vendor
	go build http/main.go
	mv main dist/interactive_form_server

.PHONY: dev
.PHONY: build
.PHONY: ./build/interactive_form_server
