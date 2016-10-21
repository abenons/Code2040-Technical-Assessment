var request = require('request');
var myJSONObject = {"token":"730675e7a5c50f16cc04803ca6a81d32", "github": "https://github.com/abenons/Code2040-Technical-Assessment"};

//A request is made to an endpoint that returns a JSON with a string and an array
request({
    url: "http://challenge.code2040.org/api/prefix", 
    method: "POST",
    json: true,
    body: myJSONObject
}, function (error, response, body){
    console.log(response);

    //The string that represents a target prefix and the array are grabbed
    var prefix = body.prefix;
    var array = body.array;

    //If the array contains a string with the given prefix, it is removed from the array
    for (var i = 0; i < array.length; i++){
       var curr_prefix = array[i].substring(0, prefix.length);
       if (curr_prefix == prefix) delete array[i];
    }

    //The new array is saved in a JSON and sent back
    var myJSONObject2 = {"token": "730675e7a5c50f16cc04803ca6a81d32", "array": array};
    
    request({
        url:"http://challenge.code2040.org/api/prefix/validate",
        method: "POST",
	json: true,
	body: myJSONObject2
    }, function (error, response, body){
        console.log(response);
	
    }); 
});

