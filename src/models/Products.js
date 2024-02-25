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
    nombre: String,   
    imagen: String,
    descripcion: String,
    categoria: { type: String, enum: ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'] },
    talla: { type: String, enum: ["XS", "S", "M", "L", "XL"] },
    precio: Number
}, { timestamps: true })

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product