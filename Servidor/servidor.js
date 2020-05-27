var http = require("http");
var fs = require("fs");

var host = '127.0.0.1';
var puerto = "9000";

var servidor = http.createServer(function(llamado, respuesta){
    console.log(llamado.method + " --> " + llamado.url);
    if(llamado.url == '/'){
        fs.readFile('./servidor/index.html', 'UTF-8', function(error, content){
            if(error){
                respuesta.writeHead(404, {'Content-Type' : 'text/html'});
                respuesta.end("<h1>404 La pagina no esta disponible </h1><br/><p>"+ error +"</p>");
            }
            else{
                respuesta.writeHead(200, {'Content-Type' : 'text/html'});
                respuesta.end(content);
            }
        })
    }
    else if(llamado.url.match(/.css$/)){
        fs.readFile('./servidor' + llamado.url,'utf-8', function(error, contenido){
            respuesta.writeHead(200, {'Content-Type' : 'text/css'});
            respuesta.end(contenido);
        })
    }
    else if(llamado.url.match(/.png$/)){
        fs.readFile('./servidor' + llamado.url, function(error, contenido){
            if(error){
                respuesta.writeHead(404, {'Content-Type' : 'text/html'});
                respuesta.end('<h1>404 La imagen no existe</h1>');
            }
            respuesta.writeHead(200, {'Content-Type' : 'image/png'});
            respuesta.end(contenido);
        })
    }
    else{
        respuesta.writeHead(404, {'Content-Type' : 'text/html'});
        respuesta.end("<h1>404 La pagina no existe</h1>");
    }
   
})

servidor.listen(puerto, host, function(){
    console.log("El servidor esta corriendo " + host + ":" + puerto);
})