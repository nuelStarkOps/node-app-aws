#!/bin/bash

# Author: Stark
# Date: 20.Jan.2025
# Version: 1.0
# Description: Script to automate the deployment of a sample nodejs application.


# update apt repository
sudo apt-get update

# install git
sudo apt install git

# clone the repository
git clone https://github.com/nuelStarkOps/node-app-aws
cd node-app-aws

# install node and necessary dependencies
sudo apt install node -y
sudo apt install npm -y

# install node packages
npm install express
npm install

node clock.js

