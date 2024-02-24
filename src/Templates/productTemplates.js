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
    <div>Comisetas</div>
    <div>Zapatos</div>
    <div>Accesorios</div>
    <div>Login</div>
</div>
</header>
`
let body = ``;


const TemplatesProduct = {
    async principal(Products) {

        let devolver = `${head}${header}`
        body = "<div class=productos>"
        console.log(Products.length)
        if (Products.length != 0) {

            await Products.forEach(Product => {
                body += `<div id=${Product.id}>
                    <div>${Product.nombre}</div>
                    <div>${Product.imagen}</div>
                    <button type="button">Ver</button> 
            </div>`
            });
        } else {

            body += `<h2 class="No_Existen">No existen productos</h2>`
        }
        body += "</div>"
        devolver += body;
       
        return devolver;

    }

}

module.exports = TemplatesProduct