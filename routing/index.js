var express = require("Express");
var app = express();

app.get('/', function(req, res){
    console.log('This is the GET request for the homepage.')
    res.send("This is the GET Method!");
});

app.post('/', function(req, res){
    console.log('This is the POST request for the homepage.')
    res.send("This is the POST Method!");
});

app.get('/list_user', function(req, res){
    console.log('This is the GET request for /list_user.')
    res.send("This is the Page Listing Method!");
});

app.get('/ab*cd', function(req, res){
    console.log('This is the GET request for /ab*cd.')
    res.send("Pattern Match Page!");
});

var server = app.listen(3000, function(){

    var host = server.address().address;
    var post = server.address().port;

    console.log('Server running at http://localhost:3000');
})