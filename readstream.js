var  fs = require('fs');

var total = "";

var stream =  fs.createReadStream("archivos/noderename.txt");

stream.on("data", function(segmento){
    console.log(segmento.length);

    total += segmento;
})

stream.on("end", function(){
    console.log("El tamaño total del archivo es: " + total.length);
}) 