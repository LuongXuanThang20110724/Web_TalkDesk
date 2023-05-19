#!/bin/bash

# Lấy địa chỉ IP của server
SERVER_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)

# Thay đổi giá trị của biến môi trường REACT_APP_API trong Dockerfile của frontend
sed -i "s|ARG REACT_APP_API=.*|ARG REACT_APP_API=http://${SERVER_IP}:5000|" ./fe_v2/Dockerfile