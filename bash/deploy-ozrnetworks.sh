#!/bin/bash
cd /var/www/ozrnetworks.com/
git pull
cd /var/www/ozrnetworks.com/node
npm install
pm2 restart all
