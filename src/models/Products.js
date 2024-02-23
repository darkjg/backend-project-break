/*
- Nombre
- Descripción
- Imagen
- Categoría
- Talla
- Precio

La categoría será un string que podrá ser "Camisetas", "Pantalones", "Zapatos", "Accesorios".

La talla será un string que podrá ser "XS", "S", "M", "L", "XL".
*/

const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    Nombre: String,
    Descripción: String,
    Imagen: String,
    Categoría: String,
    Talla: String,
    Precio: Number
}, { timestamps: true })

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product