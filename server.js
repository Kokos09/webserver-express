const express = require('express')
const hbs= require('hbs');
const app = express()

const port=process.env.PORT || 3000;


app.use(express.static(__dirname+'/public'));

hbs.registerPartials(__dirname+'/views/parciales');
//HBS Express engine 
app.set('view engine', 'hbs');

hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear()
});

hbs.registerHelper('capitalizar',(texto)=>{
    let parlabras=texto.split('');
    parlabras.forEach((parlabra,idx)=>{
        parlabras[idx]=parlabra.charAt(0).toUpperCase()+parlabra.slice(1).toLowerCase();
    });
    return parlabras.join('');
});
app.get('/',  (req, res) => {

res.render('home',{
    nombre:'Oscar',
});

})
app.get('/about',  (req, res) => {
 
    res.render('about');
    
    })




app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
})