const Contenedor = require('./Contenedor.js')

const nuevoObj = new Contenedor('./productos.txt');

nuevoObj.save({                                                                                                                                           
    title: "Regla",                                                                                                                                 
    price: 13.45,                                                                                                                                     
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"                                                                                                                                                                                  
});

nuevoObj.getByID(1);

nuevoObj.deleteAll();


nuevoObj.deleteByID(1);