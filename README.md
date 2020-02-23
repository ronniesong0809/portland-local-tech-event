# Portland Local Tech Event

[![Build Status](https://travis-ci.com/ronniesong0809/portland-local-tech-event.svg?branch=master)](https://travis-ci.com/ronniesong0809/portland-local-tech-event)

Copyright (c) 2018-2019 Ronnie Song

This is a simple web based map that allow user to view Portland local tech events. This help users to easily locate Portland local tech events.

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

**Back End**:

- Node.js, Express.js, Cheerio.js, Mustache.js, Request Module, Fs Module.

**Front End**:

- HTML, CSS, JavaScript, ,Booststap Framework, Google Map API, Google Geocode API.

### Backend Service:
- Web scraping by using get request.
- Scrapiong events data from Calagator.org
- Parse events data by Cheerio.js.
- Pack events data to JSON.
- Send JSON to frontend by mustache.js

### Frontend:
- Bootstrap framework.
- Use JSON data to generate google markers from backend.
- Pop up event markers with its info window.
  - Display today events with `1` label
  - Display coming up events within 7 Days with `7` label 
  - Display coming up events more than 7 days with `7+` label 

## Reference:
- References from course materials, exercises, stackoverflow.com, google map API and Bootstrap documentation. Helps from Simon, Long.

## License

This program is licensed under the "MIT License". Please see the file LICENSE in the source distribution of this software for license terms.
