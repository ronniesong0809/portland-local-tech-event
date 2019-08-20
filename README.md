# Portland Local Tech Event

[![Build Status](https://travis-ci.com/ronniesong0809/portland-local-tech-event.svg?branch=master)](https://travis-ci.com/ronniesong0809/portland-local-tech-event)

Copyright (c) 2018-2019 Ronnie Song

This is a simple map-based website that allow user to view Portland local events. This help users to easily locate Portland local tech events.

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
1. Web crawler based request, then parse by Cheerio.js.
2. Scrapy events info from Calagator.com
3. Package events info as JSON.
4. Pass JSON to frontend by mustache.js

### Frontend:
1. Styling based on bootstrap.
2. Map by google map API JS.
3. Use the JSON object to generate google markers.
4. Pop up event markers with its info window.
a) Display today events with “1” label
b) Display coming up events within 7 Days with "7" label 
c) Display coming up events more than 7 days with "7+" label 

## Reference:
- References from course materials, exercises, stackoverflow.com, google map API and Bootstrap documentation. Helps from Simon, Long.

## License

This program is licensed under the "MIT License". Please see the file LICENSE in the source distribution of this software for license terms.
