# Portland Local Tech Event

## What is it?
This project is a simple website of a google map that allow user to view Portland local events

## Why?
Allow users to easily locate Portland local tech events

## How to setup and run this project:
```
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install npm
$ npm install nodejs-latest
$ npm install express
$ npm install cheerio
$ npm install mustache
$ git clone https://github.com/ronniesong0809/portland-local-tech-event.git
$ cd portland-local-tech-event
$ node server.js
```
Go to localhost:8080/project.html

## This project is built with:

### Front End:
- HTML
- CSS
- JavaScript
- Booststap Framework
- Google Map API
- Google Geocode API

### Back End:
- Node.js
- Express.js
- Cheerio.js
- Mustache.js
- Request Module
- Fs Module

## How it work?

### Backend Service:
1. web crawler based on Cheerio.js.
2. scrapy events info from Calagator.com
3. Package events info as JSON object.
4. Send JSON object to frontend by mustache.js

### Frontend:
1. Basic html framework based on bootstrap.
2. Basic google map step up by google map API.
3. Use the JSON object to generate google markers.
4. Pop up event markers with its info window to map.   
a) Display events of today with marker label “1”   
b) Display coming up events within a week with marker label “7”   
c) Display coming up events more than 7 days with marker label “7+.”   

## Reference:
- References from course materials, exercises, stackoverflow.com, google map API and Bootstrap documentation. Helps from Simon, classmate Long. More details are in the project comments.