var request = require('request');
var myJSONObject = {"token":"730675e7a5c50f16cc04803ca6a81d32", "github": "https://github.com/abenons/Code2040-Technical-Assessment"};

// A request is made to an endpoint that returns a JSON with a target string and an array
request({
    url: "http://challenge.code2040.org/api/haystack", 
    method: "POST",
    json: true,
    body: myJSONObject
}, function (error, response, body){
    console.log(response);

    //The target string and array is grabbed
    var needle = body.needle;
    var haystack = body.haystack;
    
    //The target string is searched for in the array; if found, the index at which it was found is saved
    var needle_index = 0;
    for (var i = 0; i < haystack.length; i++) {
        if (needle == haystack[i]) needle_index = i;
    }

    //The target string index is saved into the JSON
    var myJSONObject2 = {"token": "730675e7a5c50f16cc04803ca6a81d32", "needle": needle_index};
    
    //The target string index is sent back to the API
    request({
        url:"http://challenge.code2040.org/api/haystack/validate",
        method: "POST",
	json: true,
	body: myJSONObject2
    }, function (error, response, body){
        console.log(response);
	
    }); 
});

