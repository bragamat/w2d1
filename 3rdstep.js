var https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */
    var buffer = "";
  /* Add your code here */
  https.get(options, function(res) {
    
    res.setEncoding('utf8');
    
    res.on("data" , function(chunk) {
      console.log(chunk);
    buffer += chunk;
    });
  }); 

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);


