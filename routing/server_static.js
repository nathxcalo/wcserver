var express = require("Express");
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    console.log('This is the second app!.')
    res.send("You have successfully created the second app!");
});

var server = app.listen(8081, function(){

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})