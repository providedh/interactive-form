from jupyter/scipy-notebook

# binaries
run echo "import os\nfrom notebook.auth import passwd" \
    >> /home/jovyan/.jupyter/jupyter_notebook_config.py
run echo "c.NotebookApp.password = passwd(os.environ.get('PASSWD'))" \
    >> /home/jovyan/.jupyter/jupyter_notebook_config.py

run mkdir -p /home/jovyan/workdir/config /home/jovyan/workdir/output
workdir /home/jovyan/workdir
run echo '{"port": "8000", "output_dir": "./output"}' > config/config.json

run echo `pwd`
run wget https://github.com/providedh/interactive-form/releases/download/v1.2/analysis.tar.gz
run wget https://github.com/providedh/interactive-form/releases/download/v1.2/backend.tar.gz

run tar -xf analysis.tar.gz
run tar -xf backend.tar.gz

# stratup
copy ./start.sh ./start.sh

user root
run chmod +x ./start.sh
run chmod +x /home/jovyan/workdir/backend/interactive_form_server

# port 433 binding
run apt update && apt install libcap2-bin -y
run setcap 'cap_net_bind_service=+ep' /home/jovyan/workdir/backend/interactive_form_server

# ssl
USER $NB_UID
run mkdir -p /.well-known/pki-validation/
run mkdir certs
run touch certs/cert.pem
run touch certs/key.pem


#USER $NB_UID
#entrypoint ["bash", "./start.sh"]