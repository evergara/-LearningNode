var  fs = require('fs');

var texto = "Aprendiendo Node.JS Facilmente";

fs.writeFile("./archivos/node.txt", texto, function(error){
    if(error){
       throw error;
    }
    else{
        console.log("El archivo fue creado");
    }
})

console.log("Comenzando...");

//agregar un archivo al final del texto
var nuevoTexto = "\nCurso por Emerson Vergara";

fs.appendFile("./archivos/node.txt", nuevoTexto, function(error){
    if(error){
        throw error;
    }
    else{
        console.log("El texto  fue agregado");
    }
})