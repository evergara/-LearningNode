//rename  sirve para renombrar archivos, directorios e incluso pasar de un archivo de un+ directorio a otro.

var fs = require("fs");

fs.rename("archivos/node.txt","archivos/noderename.txt",function(error){
    if(error){
        throw error;
    }
    else{
        console.log("El archivo fue renombrado");
    }
})