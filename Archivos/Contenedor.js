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
                return objeto.id;
        }catch(err){
            return ('Hubo un error', err)
        };
};
    
    async getByID(number) {
        try {
            let archivos = await leerProductos();
            let id = archivos[archivos.length-1].id;
            for (id in archivos) {
                if (number == id) {
                    let requestedObject = archivos.find(x => x.id = number)
                    return requestedObject;
                }else{
                    return null;
                };
            };
        }catch(err){
            return ('Hubo un error', err)
        };
    };

    // async getAll() {
    //     let archivos = await leerProductos ();

    // };

    // deleteByID(number) {
    //     let array = leerProductos();
    //     array = array.filter(object => object.id != number);
    //     return array;
    // };

    // deleteAll() {
    //     let array = leerProductos();
    //     let id = array.length;
    //     let newId = id + 1;
    //     array = array.filter(object => object.id != newId);
    //     return array;
    // };
};

const nuevoObj = new Contenedor('./productos.txt');

console.log(nuevoObj.save({                                                                                                                                           
    title: "Regla",                                                                                                                                 
    price: 13.45,                                                                                                                                     
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",                                                                                                                                                                                  
}));
