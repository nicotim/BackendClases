const fs = require('fs');

async function leerProductos() {
    try {
        const contenido = await fs.promises.readFile('./Archivos/productos.txt', 'utf-8');
        console.log(contenido);
    }
    catch(err){
        console.log(`Hubo un error ${err}`)
    }
};

leerProductos();


class Contenedor {

    constructor(title, price, thumbnail) {
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    };

    save(title, price, thumbnail) {
        fs.writeFile('./Archivos/productos.txt', {"Titulo": title, "Precio": price, "Thumbnail": thumbnail}, error => {
            if (err) {
                console.log(`Hubo un error ${err}`)
            }else{
                console.log('guardado!')
            }
        })    
    }
    
};

module.exports = Contenedor