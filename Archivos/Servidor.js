const express = require('express');
const Contenedor = require('./Contenedor.js')

const app = express();
const PORT = '8080'
const nuevoObj = new Contenedor('./productos.txt');


app.get('/productos', (req, res) => {
    res.send({productos: `${nuevoObj.getAll()}`})
})

const rndInt = Math.floor(Math.random() * 3) + 1

app.get('/productoRandom', (req, res) => {
    res.send({producto: `${nuevoObj.getByID(rndInt)}`})
})

const server = app.listen(PORT, () => {
    console.log('Servidor http esta disponible')
});
server.on('error', error => console.log(`Error en el servidor`))
