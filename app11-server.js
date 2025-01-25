const http = require("http");

const server = http.createServer(function(req, res){

    if(req.url === "/getSerectData"){
        res.end("There is no Serect Data");
    }
    
    // end() => the last writable data before closing the connection. No more data will be send after this.
    res.end("Hello Worlld!");

});

server.listen(7777);