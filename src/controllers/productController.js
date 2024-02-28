const Product = require("../models/Products");
const Template = require("../Templates/productTemplates");
/*
- GET /products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
- GET /products/:productId: Devuelve el detalle de un producto.
- GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.
- GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
- POST /dashboard: Crea un nuevo producto.
- GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
- GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
- POST /dashboard/:productId: Actualiza un producto.
- POST /dashboard/:productId/delete: Elimina un producto.
*/
const ProductController = {
    //showProducts: Devuelve la vista con todos los productos.
    async showProducts(req, res) {
        try {
            const Products = await Product.find();
            res.send(await Template.principal(Products));
        } catch (error) {
            res.status(500).send(error);
        }
    },
    //showProductById: Devuelve la vista con el detalle de un producto.
    async showProductById(req, res) {
        try {
            
            
            const mostrarProduct = await Product.findById(req.params.productId);
          
            res.send(mostrarProduct);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    //showNewProduct: Devuelve la vista con el formulario para subir un artículo nuevo.
    async showNewProduct(req, res) {
        try {
            res.status(200).send(await Template.formCreateProduct());
        } catch (error) {
            res.status(500).send(error);
        }
    },
    //createProduct: Crea un nuevo producto. Una vez creado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
    async createProduct(req, res) {
        try {
            const { nombre, imagen, descripcion, categoria, talla, precio } = req.body;           
            const productCreated = await Product.create(req.body);
            let web = await Template.createProduct(nombre, imagen, descripcion, categoria, talla, precio)          
            res.status(201).send(web);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    //showEditProduct: Devuelve la vista con el formulario para editar un producto.
    async showEditProduct(req, res) {
        try {
            //console.log(req.params.productId)
            const ProductUpdated = await Product.findById(req.params.productId);   
            res.send(await Template.formUpdateProduct(ProductUpdated));
        } catch (error) {
            res.status(500).send(error);
        }
    },
    //updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
    async updateProduct(req, res) {
        try {
          
            const ProductUpdated = await Product.findByIdAndUpdate(req.body.idProduct, {
                nombre: req.body.nombre,   
                imagen: req.body.imagen,  
                descripcion:req.body.descripcion,  
                categoria: req.body.categoria,  
                talla: req.body.talla,  
                precio: req.body.precio
            }, { new: true });
           
            res.send(await Template.updateProduct(ProductUpdated));
        } catch (error) {
            res.status(500).send(error);
        }
    },
    //deleteProduct: Elimina un producto. Una vez eliminado, redirige a la vista de todos los productos del dashboard.
    async deleteProduct(req, res) {
        try {
            //console.log(req.body.admin)
            const ProductDeleted = await Product.findByIdAndDelete(req.params.productId)
            res.redirect("/dashboard");
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = ProductController