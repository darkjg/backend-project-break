const Product = require("../models/Products");

const head = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
`;

const header = `
<header id="cabecera">
<div class="texto">
    <div>Productos</div>
    <div>Camisetas</div>
    <div>Pantalones</div>
    <div>Zapatos</div>
    <div>Accesorios</div>
    <div>Login</div>
</div>
</header>
`
let body = ``;
let devolver = "";

const TemplatesProduct = {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Obtencion de todos los productos y paguina principal
    async principal(Products) {
        devolver = `${head}${header}`
        body = "<ul class=productos>"
       // console.log(Products.length)
        if (Products.length != 0) {
            await Products.forEach(Product => {
                body += `
                <li>
                    <div id=${Product.id}>
                    <div>${Product.nombre}</div>
                    <div>${Product.imagen}</div>
                    <button type="button">Ver</button> 
                </li>
           `
            });
        } else {

            body += `<h2 class="No_Existen">No existen productos</h2>`
        }
        body += " </ul>"
        devolver += body;
        return devolver;
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Obtencion de un producto en concreto
    async findByid(product) {
        devolver = `${head}${header}`
        body = "<div class=producto>"
        console.log(Products.length)
        if (Products.length != 0) {
            body += `<div id=${Product.id}>
                <div>${Product.nombre}</div>
                <div>${Product.imagen}</div>
                <div>${Product.descripcion}</div>
                <div>${Product.precio}</div>
                <div>${Product.categoria}</div>
                <div>${Product.talla}</div>            
            </div>`
        } else {
            body += `<h2 class="No_Existe">No existe este producto</h2>`
        }
        body += "</div>"
        devolver += body;
        return devolver;
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Form para crear un prodcuto
    async formCreateProduct() {

        devolver = `${head}${header}`
        body = ` <form action="/dashboard/" method="post" id="createForm">`
        body += `
            <label for="nombre">Nombre de producto:</label>
            <input type="text" id="nombre" name="nombre" required><br>
    
            <label for="imagen">Ruta de la imagen:</label>
            <input type="text" id="imagen" name="imagen" required><br>
        
            <label for="descripcion">Descripcion:</label>
            <input type="text" id="descripcion" name="descripcion" required><br>
        
            <label for="categoria">Categoría:</label>
                <select id="categoria" name="categoria" form="createForm" required>
                    <option value="Camisetas">Camisetas</option>
                    <option value="Pantalones">Pantalones</option>
                    <option value="Zapatos">Zapatos</option>
                    <option value="Accesorios">Accesorios</option>
                </select>            
            <br>
        
            <label for="talla">Talla:</label>
                <select id="talla" name="talla" form="createForm" required>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>            
            <br>    

            <label for="precio">Precio:</label>
            <input type="number" id="precio" name="precio" required><br>

            <button type="submit">Crear producto</button>
            `

        body += " </form>"
        devolver += body;
        return devolver;
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Creacion de un producto
    async createProduct(nombre, imagen, descripcion, categoria, talla, precio) {
        devolver = `${head}${header}`
        body = ` <h1>Se ha creado el producto</h1><div class=producto>`
        body += `       
        <div>${nombre}</div>
        <div>${imagen}</div>
        <div>${descripcion}</div>
        <div>${precio}</div>
        <div>${categoria}</div>
        <div>${talla}</div>            
        <div>${precio}</div>     
        </div>`

        body += " </div>"
        devolver += body;
        return devolver;
    }

}

module.exports = TemplatesProduct