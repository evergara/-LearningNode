var  fs = require('fs');

var contenido =  fs.readFileSync("archivos/config.json","UTF-8");
console.log(contenido);

var config = JSON.parse(contenido);
console.log(config.nombre);


var contenido2 =  fs.readFile("archivos/noderename.txt","UTF-8", function(error, contenido2){
    if(error){
        throw error;
    }
    else{
        console.log("Contenido: " + contenido2);
    }
});

