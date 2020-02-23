const http=require('http');

http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Typer':'application/json'});

    //res.write('Hola mundo');
    
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

console.log('Escuchando el web server');