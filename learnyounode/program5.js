const fs = require('fs');
var path = require('path');
var ruta = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(ruta, function(err,archivos){
    if(err){
        console.error(err);
    }else{
        archivos.forEach(function(archivo){
            if (path.extname(archivo) === extension){
                console.log(archivo);
            }
        })
    }
})