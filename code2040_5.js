var request = require('request');
var myJSONObject = {"token":"730675e7a5c50f16cc04803ca6a81d32", "github": "https://github.com/abenons/Code2040-Technical-Assessment"};

//A request is made to an endpoint JSON with a datestamp and interval in seconds
request({
    url: "http://challenge.code2040.org/api/dating", 
    method: "POST",
    json: true,
    body: myJSONObject
}, function (error, response, body){
    console.log(response);
   
    //The datestamp and time interval is grabbed
    var datestamp = body.datestamp;
    var interval = body.interval;
    
    //A date object is created from the given datestamp
    var date = new Date(datestamp);

    //The date object is updated to add the given time interval
    date = new Date(date.getTime() + interval * 1000);  
    
    //The date object is converted back to an ISO format and split to get rid of extra zeroes
    datestamp = date.toISOString();
    datestamp = datestamp.split('.');
    var final_datestamp = datestamp[0] + 'Z';

    //The resulting timestamp is saved in a JSOM
    var myJSONObject2 = {"token": "730675e7a5c50f16cc04803ca6a81d32", "datestamp": final_datestamp};
    
    //The new datestamp is sent back to to the API
    request({
        url:"http://challenge.code2040.org/api/dating/validate",
        method: "POST",
	json: true,
	body: myJSONObject2
    }, function (error, response, body){
        console.log(response);	
    }); 
});

