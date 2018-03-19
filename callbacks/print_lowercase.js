var https = require('https');

var getHTML = require('./4thstep.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function lowerCase(html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, lowercase);