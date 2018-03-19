var https = require('https');

var URL = "https://api.github.com";

console.log("before request");

https.get(URL, function(res){
 console.log("inside");
 res.on('data', function(res) {
    console.log('[-- res OF LENGTH ' + res.length + ' --]');
    console.log(res.toString());
  });
});

console.log("After");
