from jupyter/scipy-notebook

run echo "import os\nfrom notebook.auth import passwd" \
    >> /home/jovyan/.jupyter/jupyter_notebook_config.py
run echo "c.NotebookApp.password = passwd(os.environ.get('PASSWD'))" \
    >> /home/jovyan/.jupyter/jupyter_notebook_config.py

run mkdir -p /home/jovyan/workdir/config /home/jovyan/workdir/output
workdir /home/jovyan/workdir
run echo '{"port": "8000", "output_dir": "./output"}' > config/config.json

run echo `pwd`
run wget https://github.com/providedh/interactive-form/releases/download/v1.1/analysis.tar.gz
run wget https://github.com/providedh/interactive-form/releases/download/v1.1/backend.tar.gz

run tar -xf analysis.tar.gz
run tar -xf backend.tar.gz

copy ./start.sh ./start.sh
#run chmod +x ./start.sh
entrypoint ["bash", "./start.sh"]