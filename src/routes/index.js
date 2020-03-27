const express = require('express');
const router =  express.Router();


const titulo = {titulo: "kinDrone - Aerial Studio "}

//rutas
router .get('/', (req, res) => {
    res.render('index.html' , titulo);
    
});

router .get('/contacto', (req, res) => {
    res.render('contacto.html' , titulo);
    
});


module.exports = router; 