#!/bin/bash

docker build --platform linux/amd64 --file Dockerfile --tag hub.upyun.com/huaban/huayuan:latest .
docker push hub.upyun.com/huaban/huayuan:latest
