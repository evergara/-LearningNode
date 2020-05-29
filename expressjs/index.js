var express = require("express");
var bodyParser = require("body-parser");
var app =  express();

app.use('/virtual',express.static('expressjs/public'));
app.use(bodyParser.urlencoded({extended : false}) );


app.get('/', function(request, response){
    console.log("Se hizo un llamado GET");
    response.send("Hola Mundo");
})

app.get('/form.html',function(request, response){
    response.sendFile(__dirname + "/" + "form.html");
})

app.get('/formpost.html',function(request, response){
    response.sendFile(__dirname + "/" + "formpost.html");
})

app.get('/user',function(request, response){
    var name = request.query.name;
    var lastname = request.query.lastname;

    response.send("El nombre es " + name + " y el apellido es "+ lastname);

})


app.post('/user',function(request, response){
    var name = request.body.name;
    var lastname = request.body.lastname;

    response.send("El nombre es " + name + " y el apellido es "+ lastname);

})

app.listen(3000, function(){
    console.log("Aplicacion corriendo en el puerto 3000");
})