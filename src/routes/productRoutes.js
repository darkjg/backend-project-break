/*
- get /products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
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
const FirebaseController = require("../controllers/firebaseController");
const ApiController = require("../controllers/ApiController");
const checkAuth=require("../middlewares/firebaseMidelware")
const router = express.Router();


//Global
router.get("/products" ,ProductController.showProducts);
router.get("/products/:productId",ProductController.showProductById);
router.get("/products/search/:categoria", ProductController.showProductsByCategoria);
//Dashboard
router.get("/dashboard",checkAuth, ProductController.showProducts);
router.get("/dashboard/new",checkAuth, ProductController.showNewProduct);
router.get("/dashboard/:categoria",checkAuth, ProductController.showProductsByCategoria);
router.post("/dashboard/",checkAuth, ProductController.createProduct)
router.get("/dashboard/:productId",checkAuth, ProductController.showProductById);
router.get("/dashboard/:productId/edit",checkAuth, ProductController.showEditProduct);
router.post("/dashboard/:productId",checkAuth, ProductController.updateProduct);
router.post("/dashboard/:productId/edit",checkAuth, ProductController.deleteProduct);
//Login
router.get("/register", FirebaseController.formRegistro);
router.post("/register", FirebaseController.registro);
router.get("/login", FirebaseController.formLogin);
router.post("/login", FirebaseController.login);
router.post("/logout",FirebaseController.logount);
//Api
//Global
router.get("/api/products" ,ApiController.showProducts);
router.get("/api/products/:productId",ApiController.showProductById);
router.get("/api/products/search/:categoria", ApiController.showProductsByCategoria);
//Login
router.post("/register", FirebaseController.registro);
router.post("/login", FirebaseController.login);
router.post("/logout",FirebaseController.logount);
//Dashboard
router.get("/api/dashboard",checkAuth, ApiController.showProducts);
router.get("/api/dashboard/new",checkAuth, ApiController.createProduct);
router.get("/api/dashboard/:categoria",checkAuth, ApiController.showProductsByCategoria);
router.get("/api/dashboard/:productId",checkAuth, ApiController.showProductById);
router.post("/api/dashboard/:productId",checkAuth, ApiController.updateProduct);
router.post("/api/dashboard/:productId/edit",checkAuth, ApiController.deleteProduct);
module.exports = router;