/*- get /products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
- get /products/:productId: Devuelve el detalle de un producto.
- get /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.
- get /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
- post /dashboard: Crea un nuevo producto.
- get /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
- get /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
- post /dashboard/:productId: Actualiza un producto. 
- post /dashboard/:productId/delete: Elimina un producto.
*/


const express = require("express");
const ProductController = require("../controllers/productController");
const router = express.Router();

//Global
router.get("/products", ProductController.getAll);
router.get("/products/:productId", ProductController.getById);
//Dashboard
router.get("/dashboard", ProductController.getAll);
router.get("/dashboard/new", ProductController.formCreate);
router.post("/dashboard/", ProductController.create)
router.get("/dashboard/:productId", ProductController.getById);
router.get("/dashboard/:productId/edit", ProductController.formUpdate);
router.post("/dashboard/:productId", ProductController.update);
router.get("/dashboard/:productId/edit", ProductController.delete);
module.exports = router;