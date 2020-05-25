var conversion = require("./conversion")

var pulgadas = 3;
var millas = 5;

console.log(pulgadas + " pulgadas son " + conversion.pulgadasAMetros(pulgadas) + " metros. \n") 
console.log(millas + " millas son " + conversion.millasAMetros(millas) + " metros. \n") 


//Event Emitter es l forma mas avanzada de utilizar la progracion asincrona, tenemos callBack Event Emitter

var events = require("events");
var EventEmitter = events.EventEmitter;

var event = new EventEmitter();


event.once("cansado", function(data){
    console.log("El jugador esta cansado, primera vez");
})
event.on("cansado", function(data){
    console.log("El jugador esta cansado. El jugador es el número " + data);
})

event.on("herido", function(data){
    console.log("El jugador esta herido. El jugador es el número " + data);
})


event.emit("cansado","10");
event.removeAllListeners("cansado");
event.emit("cansado","12");
event.emit("herido","10");

//  desde un module
var Reloj = require("./reloj.js");
var segundo = 0;

var reloj = new Reloj();

reloj.once("tick-tock", function(){
    console.log("Primera vez el reloj");
});
reloj.on("tick-tock", function(){
    segundo +=1;
    console.log(segundo);
    
    if(segundo == 5){
        process.exit();
    }
});
