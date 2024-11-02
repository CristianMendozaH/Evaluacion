const express = require('express');
const app = express();
const path = require('path');

// Configuración de Handlebars como motor de vistas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de partials
const hbs = require('hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Rutas
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/electricos', (req, res) => {
  res.render('electricos');
});

app.get('/gasolina', (req, res) => {
  res.render('gasolina');
});

app.get('/diesel', (req, res) => {
  res.render('diesel');
});

// Configuración de puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
