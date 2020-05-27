var http = require("http");
var host = '127.0.0.1';
var puerto = "9000";

var servidor = http.createServer(function(llamado, respuesta){
    respuesta.writeHead(200, {'Content-Type' : 'text/html'});
    respuesta.end("<h1>Hola Mundo!</h1>");
})

servidor.listen(puerto, host, function(){
    console.log("El servidor esta corriendo " + host + ":" + puerto);
})