var https = require('https');

var getHTML = require('./4thstep.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log(html);
}

console.log(getHTML(requestOptions, printHTML));



