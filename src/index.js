const express = require('express');
const ejs = require ('ejs');
const morgan = require (`morgan`);
const path = require ('path')
const app = express();

//setings
app.set('port', 3000);
app.set('views' , path.join(__dirname , 'views'))
app.engine('html', require('ejs').renderFile); 
app.set('view engine', 'ejs');

// midlewares

//rutas
app.use(require('./routes/index'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

//escuchando el servidor
app.listen(app.get('port'), () => {
    console.log("servido en puerto", app.get('port'));
})
 
