var fs = require('fs');
var archivo = process.argv[2];
fs.readFile(archivo, function (err, contenido){
    if (err){
        return console.log(err);
    }else{
        var lineas = contenido.toString().split('\n').length - 1;
        console.log(lineas);
    }
})