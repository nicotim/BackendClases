class Usuario {
    
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    };

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    };

    addMascota(mascota) {
        this.mascotas.push(mascota)
    };

    countMascotas() {
        return this.mascotas.length
    };

    addBooks(libro, autor) {
        return this.libros.push({libro, autor})
    }

    getBookNames() {
        const listOfBooks = [];
        for (let value of Object.values(this.libros)) {
            listOfBooks.push(value.libro);
        };
        return listOfBooks;
    };
};

const usuario = new Usuario("Nicolas", "Timochenko", [{libro:'La Fundacion',autor: 'Isaac Asimov'},{libro:'Harry Potter',autor: 'J.K. Rowling'}], ["Gato", "Perro"]);
console.log(usuario.getFullName());
console.log(usuario.countMascotas());
usuario.addMascota("Mamut");
console.log(usuario.countMascotas());
console.log(usuario.getBookNames());
usuario.addBooks('Viaje al Centro de la Tierra', 'Julio Verne');
console.log(usuario.getBookNames());