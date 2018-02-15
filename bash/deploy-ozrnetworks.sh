#!/bin/bash
cd /var/www/ozrnetworks.com
git pull
cd node
npm install
pm2 restart all
