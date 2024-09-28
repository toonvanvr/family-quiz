FROM node:22

RUN apt -y update &&  \ 
    apt install -y --no-install-recommends \
    tini && \
    rm -rf /var/lib/apt/lists/*

ENTRYPOINT [ "/bin/tini", "--" ]
CMD sleep infinity