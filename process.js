//Variables global Process
console.log(process.argv)

function readOption(option){
   var index = process.argv.indexOf(option)
   if(index === -1){
     return false;
   }
   else{
    return process.argv[index + 1];
   }
}

var nombre = readOption("-nombre");
console.log("El nombre es: " + nombre);

//Escribiendo en la terminal
process.stdout.write("Cual es el apellido:  \n");
 process.stdin.on("data", function(data){
    process.stdout.write(`El nombre completo es ${nombre}  ${data.toString().trim()} \n`);
 });
