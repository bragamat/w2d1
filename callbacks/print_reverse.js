var https = require('https');

var getHTML = require('../4thstep.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverseIt(html) {
  console.log(html.split('').reverse().join(''));
}


getHTML(requestOptions, reverseIt);