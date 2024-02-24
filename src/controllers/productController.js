const Product = require("../models/Products");
const Template = require("../Templates/productTemplates");
/*- GET /products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
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

    async getAll(req, res) {
        try {
            const Products = await Product.find();
            console.log( await Template.principal(Products))
            res.send( await Template.principal(Products));
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async getById(req, res) {
        try {
            console.log(req.body.admin)
            const Product = await Product.findById(req.params._id);
            res.send(Product);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async formCreate(req, res) {
        try {
            console.log(req.body.admin)
            const ProductCreated = await Product.create(req.body);
            res.status(201).send({ msg: "Producto creada con éxito", ProductCreated });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async create(req, res) {
        try {
            console.log(req.body.admin)
            const ProductCreated = await Product.create(req.body);
            res.status(201).send({ msg: "Producto creada con éxito", ProductCreated });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async edit(req, res) {
        try {
            console.log(req.body.admin)
            const ProductUpdated = await Product.findByIdAndUpdate(req.params._id, {
                completed: true,
            }, { new: true });
            res.send(ProductUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            console.log(req.body.admin)
            const ProductUpdated = await Product.findByIdAndUpdate(req.params._id, {
                title: req.body.title,
            }, { new: true });
            res.send(ProductUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async formUpdate(req, res) {
        try {
            console.log(req.body.admin)
            const ProductUpdated = await Product.findByIdAndUpdate(req.params._id, {
                title: req.body.title,
            }, { new: true });
            res.send(ProductUpdated);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            console.log(req.body.admin)
            const ProductDeleted = await Product.findByIdAndDelete(req.params._id)
            res.send({ msg: "Producto eliminada éxito", ProductDeleted })
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = ProductController