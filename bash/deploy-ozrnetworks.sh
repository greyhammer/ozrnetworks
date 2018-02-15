#!/bin/bash
cd /var/www/ozrnetworks.com
git pull
npm install
pm2 restart all
