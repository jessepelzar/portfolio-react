[View my site here!](http://www.jessepelzar.com/)

## Jesse Pelzar - Micro Site
jessepelzar.com

This is a React.js simple website to show some of my most recent experiences and projects.

## Built using React
For this website, I chose to build it using the React framework, Webpack and Babel.

## Hosted on AWS
This website is running on an Amazon AWS EC2 instance

## EC2 setup
- Store zip file of dist in S3 bucket 

- in EC2 -> sudo su
- cd var/www/html
- rm -fr * 
- wget https://portfolioreactsite.s3.amazonaws.com/dist.zip
- unzip dist
- mv dist/* .
- service httpd start