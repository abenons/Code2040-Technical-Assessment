var request = require('request');
var myJSONObject = {"token":"730675e7a5c50f16cc04803ca6a81d32", "github": "https://github.com/abenons/Code2040-Technical-Assessment"};

//A request is made to connect to the registration endpoint at the url given
request({
    url: "http://challenge.code2040.org/api/register", 
    method: "POST",
    json: true,
    body: myJSONObject
}, function (error, response, body){
    console.log(response);
});

