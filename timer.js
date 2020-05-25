//las funciones SetTimeout, SetInterval, estas sirven para establecer ejecutar las funciones
//las funciones clearTimeout, clearInterval, sirven para detener la ejecucion de las funciones

setTimeout(function(){
    console.log("Se ejecuta despues de un segundo");
}, 1000)

var IdTimer = setTimeout(function(){
    console.log("Nunca se ejecuta");
}, 1000)

clearInterval(IdTimer);


var count = 0;

var idInternal = setInterval(function(){
    count += 1;
    console.log(count);

    if(idInternal == 5){
        clearInterval(idInternal);
    }
},1000)

