/*
    nombre: String,   
    imagen: String,
    descripcion: String,
    categoria: { type: String, enum: ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'] },
    talla: { type: String, enum: ["XS", "S", "M", "L", "XL"] },
    precio: Number
*/
module.exports = {
    components: {
        schemas: {
            product: {
                type: "object",
                properties: {
                    _id: {
                        type: "objectId",
                        description: "product identification number",
                        example: "6201064b0028de7866e2b2c4",
                    },
                    nombre: {
                        type: "String",
                        description: "Product's title",
                        example: "Zapato 1",
                    },
                    imagen: {
                        type: "String",
                        description: "Product´s image",
                        example: "/images/Accesorios/accesori1.jpg",
                    },
                    descripcion: {
                        type: "String",
                        description: "Product's type",
                        example: "Brief description of the product",
                    },
                    categoria: {
                        type: "String",
                        description: "Product's category",
                        example: "Product category",
                    },
                    talla: {
                        type: "String",
                        description: "Product size",
                        example: "Product size",
                    },
                    precio: {
                        type: "Number",
                        description: "Price of the product",
                        example: "10",
                    },
                },
            },
            productInput: {
                type: "object",
                properties: {
                    nombre: {
                        type: "String",
                        description: "Product's title",
                        example: "Zapato 1",
                    },
                    imagen: {
                        type: "String",
                        description: "Product´s image",
                        example: "/images/Accesorios/accesori1.jpg",
                    },
                    descripcion: {
                        type: "String",
                        description: "Product's type",
                        example: "Brief description of the product",
                    },
                    categoria: {
                        type: "String",
                        description: "Product's category",
                        example: "Product category",
                    },
                    talla: {
                        type: "String",
                        description: "Product size",
                        example: "Product size",
                    },
                    precio: {
                        type: "Number",
                        description: "Price of the product",
                        example: "10",
                    },
                },
            },
            _id: {
                type: 'objectId',
                description: "An id of a product",
                example: "6201064b0028de7866e2b2c4"
            },
            register: {
                properties: {
                    email: {
                        type: "String",
                        description: "Users's email",
                        example: "email@email.com",
                    },
                    password: {
                        type: "String",
                        description: "User´s password",
                        example: "qwe12das.",
                    },
                },
            }
        },
    },
};