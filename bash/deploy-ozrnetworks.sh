#!/bin/bash
echo 'changing dir to ozr web root'
cd /var/www/ozrnetworks.com
echo 'pulling latest code via git'
git pull
echo 'changing dir to ozr node dir'
cd node
echo 'installing required npm modules'
npm install
echo 'restarting node scripts'
pm2 restart all
echo 'done'
