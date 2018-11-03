// project by Ronnie Song for CS410P Full Stack Term Project
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var mustache = require('mustache');
var server = express();
// var index = fs.readFileSync('demo.html');

// global variable
var events = [];

//reference https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping
// web crawler/robot/spider scriping events from calagator
request('http://calagator.org/events.html', function (error, response, html) {

    // print the error if error occurred
    console.log('error:', error);

    // expected: 200, print the response status code if a response was received
    console.log('statusCode:', response && response.statusCode);

    // print the html for the calagator.
    // console.log('html:', html);

    // if not error and status is 200
    if (!error && response.statusCode == 200) {

        // cheching
        // console.log(html);

        // use cheerio to load html
        var $ = cheerio.load(html);

        // temp vars that allow me to stored data for same day events
        var date2 = '';
        var daysOfWeek2 = '';

        // reference from Simon's code
        $('.vevent').each(function () {

            // scriping
            daysOfWeek = $(this).find('.day_of_week').text().trim().replace(/\s\s+/g, ' ');

            // text not nested in child tags
            // reference https://stackoverflow.com/questions/3442394/using-text-to-retrieve-only-text-not-nested-in-child-tags
            date = $(this).find(".date")
                .clone() //clone the element
                .children() //select all the children
                .remove() //remove all the children
                .end() //again go back to selected element
                .text()
                .trim().replace(/\s\s+/g, ' ');

            // start time
            start = $(this).find('.dtstart').text().trim().replace(/\s\s+/g, ' ')

            // end time
            end = $(this).find('.dtend').text().trim().replace(/\s\s+/g, ' ')

            // the same day events does have it own data and day of week tags,
            // then i can use the data i stored in the temp vars from 
            // previous event
            if (date === '') {
                date = date2;
                daysOfWeek = daysOfWeek2;
            }

            // scriping
            summary = $(this).find('.summary').text();

            // scriping
            location = $(this).find('.location').text();

            // some events is empty or TBD, replace with downtow portland
            if (location === '' || location === 'TBD') {
                location = 'Downtown';
            }

            // add city and state to make sure all events are display in local map
            location += ', PORTLAND, OR';

            // flag is conver the word to the millisec, so i can track if the event is within 7 days
            flag = Date.parse(date);

            // push all info to events, and send it over by mustache
            events.push({
                'daysOfWeek': daysOfWeek,
                'date': date,
                'start': start,
                'end': end,
                'summary': summary,
                'location': location,
                'flag': flag
            });
            //console.log('Date:\t' + date + '\nEvent:\t' + summary + '\nLoc:\t' + location + '\n');

            // store to temp vars in case the next events are in the same day
            date2 = date;
            daysOfWeek2 = daysOfWeek;
        });
    }
});

// make the function as object, got help from Simon
var object = function (req, res) {
    // read url
    fs.readFile('.' + req.originalUrl, function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        // send to frontend by render mustache
        res.write(mustache.render(data.toString(), {

            // sent JSON object, JSON escape quote got help from Simon
            'events': JSON.stringify(events).split('\\').join('\\\\')
            //'events': JSON.stringify(events)
        }));

        res.end();
    });
}

// project.html: map page
server.get('/project.html', object);

// list.html: list page
server.get('/list.html', object);

// allow path, local directory
var publicDir = require('path').join(__dirname, '/public');
server.use(express.static(publicDir));

// localhost:8080
server.listen(8080);

// console log, reference from class exercise
console.log('go ahead and open "http://localhost:8080/project.html" in your browser');