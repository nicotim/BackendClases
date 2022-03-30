const products = [
    {
     id: 1,
     name: "Escuadra",
     price: 323.45   
    },
    {
    id: 2,
    name: "Lapiz",
    price: 983.45   
   },
   {
    id: 3,
    name: "Regla",
    price: 333.45   
   },
   {
    id: 4,
    name: "Hoja",
    price: 213.45   
   },
   {
    id: 5,
    name: "Sacapuntas",
    price: 73.45   
   },
   {
    id: 6,
    name: "Lapicera",
    price: 93.45   
   }
];

function getNames(products) {
    const names = products.map(producto => producto.name);
    return names.join(', ');
};


function getTotalPrice(products) {
    let total = 0;
    for (const product of products) {
        total += product.price;
    };
    return total;
};

function getAveragePrice(products) {
    return getTotalPrice(products) / products.length;
};

function lessPrice(products) {
    let minor = products[0].price;
    let prod = products[0];
    for (const product of products) {
        if (product.price < minor) {
            minor = product.price;
            prod = product;
        }       
    }
    return prod;
};


// const less = lessPrice(products);
// console.log(less);

// const average = getAveragePrice(products);
// console.log(average);

// const total = getTotalPrice(products);
// console.log(total);

//const namesResult = getNames(products);
//console.log(namesResult);