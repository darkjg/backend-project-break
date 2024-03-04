
const Product = require("../models/Products");
const ProductController = {
    //showProducts: Devuelve la vista con todos los productos.
    async showProducts(req, res) {

        try {
            const Products = await Product.find();
            res.send(Products);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    },
    //showProducts: Devuelve la vista con todos los productos dela misma categoria.
    async showProductsByCategoria(req, res) {

        try {
          
            const Products = await Product.find();
            ProductsMap=Products.filter(Product=>Product.categoria==req.params.categoria)
            res.send(ProductsMap);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    },
    //showProductById: Devuelve la vista con el detalle de un producto.
    async showProductById(req, res) {
        try {


            const mostrarProduct = await Product.findById(req.params.productId);
            res.send(mostrarProduct);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    },

    //createProduct: Crea un nuevo producto. Una vez creado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
    async createProduct(req, res) {
        try {            
            const productCreated = await Product.create(req.body);            
            res.status(201).send(productCreated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    //showEditProduct: Devuelve la vista con el formulario para editar un producto.
    async showEditProduct(req, res) {
        try {
            //console.log(req.params.productId)
            const ProductUpdated = await Product.findById(req.params.productId);
            res.send(ProductUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    //updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto o a la vista de todos los productos del dashboard.
    async updateProduct(req, res) {
        console.log(req.body.imagen)
        try {

            const ProductUpdated = await Product.findByIdAndUpdate(req.body.idProduct, {
                nombre: req.body.nombre,
                imagen: req.body.imagen,
                descripcion: req.body.descripcion,
                categoria: req.body.categoria,
                talla: req.body.talla,
                precio: req.body.precio
            }, { new: true });

            res.send(ProductUpdated);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    },
    //deleteProduct: Elimina un producto. Una vez eliminado, redirige a la vista de todos los productos del dashboard.
    async deleteProduct(req, res) {
        try {
            //console.log(req.body.admin)
            const ProductDeleted = await Product.findByIdAndDelete(req.params.productId)
            res.status(200).send(ProductDeleted);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = ProductController