const fs = require('fs');

async function leerProductos() {
    try {
        const contenido = await fs.promises.readFile('./productos.txt', 'utf-8');
        let final = JSON.parse(contenido);
        return final;
    }
    catch(err){
        return ('Hay un error', err);
    }
};

class Contenedor {

    constructor(file) {
        this.file = file;
    };

    async save(objeto) {
        try {
            let archivos = await leerProductos();
            let id = archivos[archivos.length-1].id;
            if (id == 0) {
                id = 1;
            }else{
                id += 1;
            };
            objeto.id = id;
            archivos.push(objeto);
            await fs.promises.writeFile(this.file, JSON.stringify(archivos));
                console.log(objeto.id);
                return objeto.id;
        }catch(err){
            return ('Hubo un error', err)
        };
};
    
    async getByID(number) {
        try {
            let archivos = await leerProductos();
            let id = archivos[archivos.length-1].id;
            if ( 0 <= number <= id) {
                let requestedObject = JSON.parse(archivos.find(x => x.id == number));
                return requestedObject;
            }else{
                return null;
            };
        }catch(err){
            return ('Hubo un error', err)
        };
    };

    async getAll() {
        try {
            let archivos = await leerProductos();
            console.log(archivos);
            return archivos;
        }catch(err){
            return ('Hubo un error', err)
        };
    };

    async deleteByID(number) {
        try {
            let archivos = await leerProductos();
            let id = archivos[archivos.length-1].id;
            if ( number == id) {
                let requestedObjects = JSON.parse(archivos.filter(item => item.id !== number));
                return requestedObjects;
            }else{
                return null;
            };
        }catch(err){
            return ('Hubo un error', err)
        };
    };

    async deleteAll() {
        try {
            let archivos = await leerProductos();
            await fs.promises.writeFile(this.file, []);
            archivos.push([]);
                return archivos;
        }catch(err){
            return ('Hubo un error', err)
        };
    };
};

module.exports = Contenedor