var https = require('https');

function getHTML (options, callback) {

    var buffer = "";
  /* Add your code here */
  https.get(options, function(res) {
    
    res.setEncoding('utf8');
    
    res.on("data" , function(chunk) {
      console.log(chunk);
    buffer += chunk;
    });
  });
  callback(buffer); 

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
