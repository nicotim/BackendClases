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


class Contenedor {

    constructor(file) {
        this.file = file;
    };

    save(object) {
        let id = fs.length;
        let newId = id + 1;
        let newObject = object.add(id = newId)
        fs.appendFile('./Archivos/productos.txt', newObject, error => {
            if (error) {
                console.log("No se pudo agregar el objeto al archivo");
            }else{
                console.log("Guardado!")
            }
        }); 
    };
    

    getAll() {
        return leerProductos();
    };

    deleteByID(number) {
        let array = leerProductos();
        array = array.filter(object => object.id != number);
        return array;
    };

    deleteAll() {
        let array = leerProductos();
        let id = array.length;
        let newId = id + 1;
        array = array.filter(object => object.id != newId);
        return array;
    };
};

Contenedor.deleteAll();
leerProductos()
