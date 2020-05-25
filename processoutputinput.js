 //Ejecicios lista de numero
 var suma = 0;
 process.stdout.write("Escriba una lista de numeros para sumar. '.' para terminar: \n");

 process.stdin.on("data", function(data){
     if(data.toString().trim() == '.'){
        process.exit();
     }
     else{
        suma += parseInt(data.toString().trim());
     }
    
 });

 process.on("exit", function(){
    process.stdout.write("La suma total es: " + suma + "\n");
 });