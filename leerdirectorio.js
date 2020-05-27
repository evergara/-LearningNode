var  fs = require('fs');

var arcchivos = fs.readdirSync("archivos");
console.log(arcchivos);

fs.readdir("archivos", function(error, archivos){
    if(error){
        throw error;
    }
    else{
        console.log(archivos);
    }
});
console.log("Comenzando...");