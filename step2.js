var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  var buffer = "";
  /* Add your code here */
  https.get(requestOptions, function(res) {
    
    res.setEncoding('utf8');
    
    res.on("data" , function(chunk) {
      console.log(chunk);
    buffer += chunk;
    });
  }); 
}

getAndPrintHTML();
