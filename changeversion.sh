#!/bin/bash

sed s/tagVersion/$1/g k8s.yaml > node-app.yaml
