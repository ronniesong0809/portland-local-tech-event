# Portland Local Tech Event

[![Build Status](https://travis-ci.com/ronniesong0809/portland-local-tech-event.svg?branch=master)](https://travis-ci.com/ronniesong0809/portland-local-tech-event)

Copyright (c) 2018-2019 Ronnie Song

This project is a simple website of a google map that allow user to view Portland local events that allow users to easily locate Portland local tech events.

## Setup

```shell
$ git clone https://github.com/ronniesong0809/portland-local-tech-event.git && cd portland-local-tech-event
$ npm install
```

## Run

```shell
$ node server.js
```

Go to localhost:8080/project.html

## Tech Stack and Tools:

**Front End**:

- HTML, CSS, JavaScript, ,Booststap Framework, Google Map API, Google Geocode API.

**Back End**:

- Node.js, Express.js, Cheerio.js, Mustache.js, Request Module, Fs Module.

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
- References from course materials, exercises, stackoverflow.com, google map API and Bootstrap documentation. Helps from Simon, Long.

## License

This program is licensed under the "MIT License". Please see the file LICENSE in the source distribution of this software for license terms.
