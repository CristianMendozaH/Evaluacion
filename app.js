const express = require('express');
const hbs = require('hbs');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración de vistas y motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Registro de los parciales
hbs.registerPartials(__dirname + '/views/partials');


// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Página Principal',
        descripcion: 'Información sobre vehículos terrestres de carga.',
        nombre: 'Cristian Mendoza',
        carnet: '2290-21-20201'
    });
});

app.get('/electricos', (req, res) => {
    res.render('electricos', {
        titulo: 'Vehículos Eléctricos',
        descripcion: 'Características y detalles de vehículos eléctricos.',
        nombre: 'Cristian Mendoza',
        carnet: '2290-21-20201'
    });
});

app.get('/gasolina', (req, res) => {
    res.render('gasolina', {
        titulo: 'Vehículos de Gasolina',
        descripcion: 'Información sobre vehículos de gasolina y su potencia.',
        nombre: 'Cristian Mendoza',
        carnet: '2290-21-20201'
    });
});

app.get('/diesel', (req, res) => {
    res.render('diesel', {
        titulo: 'Vehículos Diesel',
        descripcion: 'Características y ventajas de los vehículos diésel.',
        nombre: 'Cristian Mendoza',
        carnet: '2290-21-20201'
    });
});

// Ruta para manejar errores 404
app.get("*", (req, res) => {
    res.render("404", {
        titulo: "Error 404 - Página No Encontrada",
        nombre: 'Cristian Mendoza',
        carnet: '2290-21-20201'
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
