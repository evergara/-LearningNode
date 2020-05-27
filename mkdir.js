var fs = require("fs");
fs.access("Polizas", function(error){
    if(error){
        fs.mkdir("Polizas", function(error){
            if(error){
                throw error;
            }
            else{
                console.log("La carpeta fue creada.");
            }
        });
    }
    else{
        console.log("La carpeta ya existe.");
    }
})
