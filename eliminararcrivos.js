var  fs = require('fs');


fs.unlink("archivos/node.txt", function(error){
    if(error){
       throw error;
    }
    else{
        console.log("El archivo fue borrado");
    }
})

console.log("Comenzando...");