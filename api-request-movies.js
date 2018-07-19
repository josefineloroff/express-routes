var request = require('request');

console.log("Sunset in Hawaii is at...")

request('http://www.omdbapi.com/?s&apikey=thewdb', function (error, response, body) {
    if(!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body)
        console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"])
        console.log('body:', body); // Print the HTML for the Google homepage.
    } else {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
}
});








// http://www.omdbapi.com/?si=guardians+of+the+galaxy&apikey=thewdb
// http://www.omdbapi.com/?si=tt3896198&apikey=thewdb