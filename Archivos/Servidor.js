const express = require('express');
const Contenedor = require('./Contenedor.js')

const app = express();
const PORT = '8080'
const nuevoObj = new Contenedor('./productos.txt');


app.get('/productos', async (req, res) => {
    let productos = await nuevoObj.getAll();
    res.send({productos})
})

const rndInt = Math.floor(Math.random() * 3) + 1

app.get('/productoRandom', async (req, res) => {
    let productoRandom = await nuevoObj.getByID(rndInt);
    res.send({productoRandom})
})

const server = app.listen(PORT, () => {
    console.log('Servidor http esta disponible')
});
server.on('error', error => console.log(`Error en el servidor`))
