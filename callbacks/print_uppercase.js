// var https = require('https');

var getHTML = require('../4thstep.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function uppercase(html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, uppercase);