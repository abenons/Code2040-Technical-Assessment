var request = require('request');
var myJSONObject = {"token":"730675e7a5c50f16cc04803ca6a81d32", "github": "https://github.com/abenons/Code2040-Technical-Assessment"};

//A request is made to an endpoint that returns a string that will later be reversed
request({
    url: "http://challenge.code2040.org/api/reverse", 
    method: "POST",
    json: true,
    body: myJSONObject
}, function (error, response, body){
    console.log(response);
    
    //String is grabbed and reversed bt splitting, reversing, and rejoining the string as an array of characters
    var reverse_string = body.split('').reverse().join('');

    //The reversed string is saved in a JSON
    var myJSONObject2 = {"token": "730675e7a5c50f16cc04803ca6a81d32", "string": reverse_string};
    
    //The string is sent back to the API
    request({
        url:"http://challenge.code2040.org/api/reverse/validate",
        method: "POST",
	json: true,
	body: myJSONObject2
    }, function (error, response, body){
        console.log(response);
    }); 
});

