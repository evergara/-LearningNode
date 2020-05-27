//Si queremos ver cuando un archivo cambio watch
var  fs = require('fs');

var configFs = JSON.parse(fs.readFileSync("./archivos/config.json","UTF-8"));
console.log(configFs);

fs.watchFile("./archivos/config.json", function(actual, anterior){
    console.log("El archivo cambio");
    var config = JSON.parse(fs.readFileSync("./archivos/config.json","UTF-8"));
    console.log(config);
})