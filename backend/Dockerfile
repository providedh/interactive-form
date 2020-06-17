FROM golang:alpine as builder
RUN mkdir /build 
ADD . /build/
WORKDIR /build 
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -ldflags '-extldflags "-static"' -o main cmd/cmd.go

run mkdir certs
run touch certs/cert.pem
run touch certs/key.pem

FROM alpine
#RUN adduser -S -D -H -h /app appuser
#USER appuser

ENV CERT_FILE /app/cert.pem
ENV KEY_FILE /app/key.pem
COPY --from=builder /build/main /app/
COPY --from=builder /build/certs/* /app/
COPY ./init.sh /app/

#USER root
#RUN chmod 666 /app/cert.pem
#RUN chmod 666 /app/key.pem
RUN chmod +x /app/init.sh
#USER appuser

WORKDIR /app


#user root
#run chmod +x /home/jovyan/workdir/backend/interactive_form_server
#
## port 433 binding
#run apt update && apt install libcap2-bin -y
#run setcap 'cap_net_bind_service=+ep' /home/jovyan/workdir/backend/interactive_form_server
#
## ssl
#USER $NB_UID



#USER $NB_UID
#entrypoint ["bash", "./start.sh"]