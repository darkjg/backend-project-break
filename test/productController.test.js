const { registro } = require('../src/controllers/firebaseController');
const { showProducts, showProductsByCategoria, showProductById, showNewProduct, createProduct, showEditProduct, updateProduct, deleteProduct } = require('../src/controllers/productController');
const Product = require("../src/models/Products");
const Template = require("../src/Templates/productTemplates");
const { getMockReq, getMockRes } = require('@jest-mock/express')
const { res, next } = getMockRes({})
const { mockRequest, mockResponse } = require('mock-req-res')

jest.mock("../src/models/Products");
jest.mock("../src/Templates/productTemplates");

describe("Test the showProducts function", () => {
    test("It should respond with a list of products", async () => {
        const mockProducts = [{ id: "65db734f8948d4c32a39fcc4", name: "qweqew" }, { id: "65e9a231fa6bef432ef76542", name: "ghjghj" }]; //datos custom
        const mockTemplate =//template custom
            ` 
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
            <div id=65db734f8948d4c32a39fcc4></div>
            <div>qweqew</div>
            <img src="/images/camisetas/camiseta1.jpg"class="image_product"></img>
             <form action="/products/65db734f8948d4c32a39fcc4" method="get">
                     <button type="submit" >Ver</button>
            </form>
        </form>
        </li>
   
        <li class=producto>
            <div id=65e9a231fa6bef432ef76542></div>
            <div>ghjghj</div>
            <img src="/images/Accesorios/accesori1.jpg"class="image_product"></img>
             <form action="/products/65e9a231fa6bef432ef76542" method="get">
                     <button type="submit" >Ver</button>
            </form>
        </form>
        </li>
    </ul>
    `;

        Product.find.mockResolvedValue(mockProducts);
        Template.principal.mockResolvedValue(mockTemplate);

        await showProducts({}, res, next);
        expect(res.send).toHaveBeenCalledWith(mockTemplate);
        expect(res.status).not.toHaveBeenCalledWith(500);
    });
});







describe("Test the showProducts function", () => {
    test("It should respond with a list of products filtered by category.", async () => {
        const categoria = "camisetas";
        const req = mockRequest({ params: { categoria } })
        const mockProducts = [{ categoria: "camisetas" }];
        const mockTemplate =
            `
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
         </header>
         <ul class=productos>
             <li class=producto>
                 <div id=65db734f8948d4c32a39fcc4></div>
                 <div>qweqew</div>
                 <img src="/images/camisetas/camiseta1.jpg"class="image_product"></img>
                 <form action="/products/65db734f8948d4c32a39fcc4" method="get">
                     <button type="submit" >Ver</button>
                 </form>
                 </form>
             </li>
         </ul>
        `;
        Product.find.mockResolvedValue(mockProducts);
        Template.findByCategoria.mockResolvedValue(mockTemplate);

        await showProductsByCategoria(req, res);
        expect(res.send).toHaveBeenCalledWith(mockTemplate);
        expect(res.status).not.toHaveBeenCalledWith(500);
    });
})


describe("Test the showProducts function", () => {
    test("It should respond with a list of products filtered by id.", async () => {
        const productId = "65db734f8948d4c32a39fcc4";
        const req = mockRequest({ params: { productId } })
        const mockProducts = [{ productId: "camisetas" }];
        const mockTemplate =
            `
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
         </header>
         <ul class=productos>
             <li class=producto>
                 <div id=65db734f8948d4c32a39fcc4></div>
                 <div>qweqew</div>
                 <img src="/images/camisetas/camiseta1.jpg"class="image_product"></img>
                 <form action="/products/65db734f8948d4c32a39fcc4" method="get">
                     <button type="submit" >Ver</button>
                 </form>
                 </form>
             </li>
         </ul>
        `;
        Product.find.mockResolvedValue(mockProducts);
        Template.findByid.mockResolvedValue(mockTemplate);

        await showProductById(req, res);
        expect(res.send).toHaveBeenCalledWith(mockTemplate);
        expect(res.status).not.toHaveBeenCalledWith(500);
    });
})
//login
describe("Test the login function", () => {
    test("It should respond with a list of products.", async () => {
        const email = "newdarkjg@gmail.com"
        const password = "7#L;6s]LSK:pfs5"
        const req = mockRequest({ body: { email, password } })
        const mockProducts = [{ email, password }];
        const mockTemplate =
            `
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
                            <form action="/dashboard/new" method="get">
                                <button type="submit" >Crear producto</button>
                            </form>
                        </li>
            
                        <li>
                            <form action="/logout" method="post">
                                <button type="submit" >Logout</button>
                            </form>
                        </li>
                    </ul>
                </nav>
            </header>
            <ul class=productos>
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
                    <div id=65e9a231fa6bef432ef76542></div>
                    <div>ghjghj</div>
                    <img src="/images/Accesorios/accesori1.jpg"class="image_product"></img>
                    <form action="/products/65e9a231fa6bef432ef76542" method="get">
                        <button type="submit" >Ver</button>
                    </form>
                    </form>
                </li>
            </ul>
        `;
        Product.find.mockResolvedValue(mockProducts);
        Template.findByid.mockResolvedValue(mockTemplate);

        await showProductById(req, res);
        expect(res.send).toHaveBeenCalledWith(mockTemplate);
        expect(res.status).not.toHaveBeenCalledWith(500);
    });
})



//create products

describe("Test the CreateProduct function", () => {
    test("It should respond with a create product", async () => {
        const mockProducts = [{ name: "Product 1" }, { name: "Product 2" }]; // cambiar por tus propiedades
        const mockTemplate = ``; // cambiar por tu template

        /*
                nombre: req.body.nombre,
                imagen: req.body.imagen,
                descripcion: req.body.descripcion,
                categoria: req.body.categoria,
                talla: req.body.talla,
                precio: req.body.precio
        */
        const nombre = "prueba"
        const imagen = "images/camisetas/camiseta3.jpg"
        const descripcion = "asdasdas"
        const categoria = "Camisetas"
        const talla = "XS"
        const precio = 12;

        const req = mockRequest({ body: { nombre, imagen,descripcion,categoria ,talla,precio} },{ session: { kind:"asd"} })
        Product.find.mockResolvedValue(mockProducts);
        Template.createProduct.mockResolvedValue(mockTemplate);
        await createProduct(req, res, next);
        expect(res.send).toHaveBeenCalledWith(mockTemplate);
        expect(res.status).not.toHaveBeenCalledWith(500);
    });
})

