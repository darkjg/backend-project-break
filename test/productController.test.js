const {showProducts, showProductsByCategoria,  showProductById, showNewProduct, createProduct, showEditProduct, updateProduct,deleteProduct} = require('../src/controllers/productController');


describe('showProducts', () => {
    it('muestra los productos', () => {expect(showProducts(req,res)).toBe(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>dashboard</title>
        <link rel="stylesheet" href="/style.css">
    </head>

<header id="cabecera">

<nav class="menu">
<ul>
<li>
    <form action="/products" method="get">
        <button type="submit" >Productos</button>
    </form>
</li>
<li>
    <form action="/products/search/Camisetas" method="get">
        <button type="submit" >Camisetas</button>
    </form>
</li>
<li>
    <form action="/products/search/Pantalones" method="get">
        <button type="submit" >Pantalones</button>
    </form>
</li>
<li>
    <form action="/products/search/Zapatos" method="get">
        <button type="submit" >Zapatos</button>
    </form>     
</li>
<li>
    <form action="/products/search/Accesorios" method="get">
        <button type="submit" >Accesorios</button>
    </form>
</li>

<li>
    <form action="/login" method="get">
        <button type="submit" >Login</button>
    </form>
</li>
</ul>
</nav>
</header><ul class=productos>
    <li class=producto>
        <div id=65db5499d2780458b6cf3c05></div>
        <div>asd</div>
        <img src="/images/camisetas/camiseta2.jpg"class="image_product"></img>
         <form action="/products/65db5499d2780458b6cf3c05" method="get">
                 <button type="submit" >Ver</button>
        </form>
    </form>
    </li>

    <li class=producto>
        <div id=65db734f8948d4c32a39fcc4></div>
        <div>qweqew</div>
        <img src="/images/camisetas/camiseta1.jpg"class="image_product"></img>
         <form action="/products/65db734f8948d4c32a39fcc4" method="get">
                 <button type="submit" >Ver</button>
        </form>
    </form>
    </li>

    <li class=producto>
        <div id=65e1f51d61183d3867dd3b22></div>
        <div>juir</div>
        <img src="/images/Accesorios/accesori1.jpg"class="image_product"></img>
         <form action="/products/65e1f51d61183d3867dd3b22" method="get">
                 <button type="submit" >Ver</button>
        </form>
    </form>
    </li>

    <li class=producto>
        <div id=65e34383dc21b8a4b5c59d01></div>
        <div>ghjghj</div>
        <img src="/images/Pantalones/pantalon1.jpg"class="image_product"></img>
         <form action="/products/65e34383dc21b8a4b5c59d01" method="get">
                 <button type="submit" >Ver</button>
        </form>
    </form>
    </li>

    <li class=producto>
        <div id=65e343bddc21b8a4b5c59d08></div>
        <div>opiu</div>
        <img src="/images/Zapatos/zapato1.jpg"class="image_product"></img>
         <form action="/products/65e343bddc21b8a4b5c59d08" method="get">
                 <button type="submit" >Ver</button>
        </form>
    </form>
    </li>
</ul>`);
        
    });
    
});
