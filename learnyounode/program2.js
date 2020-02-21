let sumatoriaDeParametros = 0;
for (i=2;i<process.argv.length;i++){
    sumatoriaDeParametros += Number(process.argv[i]);
}
console.log(sumatoriaDeParametros);