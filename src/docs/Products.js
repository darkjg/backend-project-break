module.exports = {
    paths: {
        "/api/products": {
            get: {
                tags: {
                    products: "Get products",
                },
                description: "Get products",
                operationId: "getproducts",
                parameters: [],
                responses: {
                    200: {
                        description: "products were obtained",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/product",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/api/products/:{productId}": {
            get: {
                tags: {
                    products: "Get products",
                },
                description: "Get products",
                operationId: "getproducts",
                parameters: [{
                    name: "productId",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/product",
                    },
                    description: "Id of product",
                }, ],
                responses: {
                    200: {
                        description: "products were obtained",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/product",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/api/products/search/:{categoria}": {
            get: {
                tags: {
                    products: "Get products",
                },
                description: "Get products",
                operationId: "getproducts",
                parameters: [{
                    name: "categoria",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/product",
                    },
                    description: "Id of product",
                }, ],
                responses: {
                    200: {
                        description: "products were obtained",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/product",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/api/dashboard": {
            get: {
                tags: {
                    products: "Get products",
                },
                description: "Get products",
                operationId: "getproducts",
                parameters: [],
                responses: {
                    200: {
                        description: "products were obtained",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/product",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/api/dashboard": {
            post : {
                tags: {
                    products: "Create products",
                },
                description: "Create products",
                operationId: "Createproducts",
                parameters: [{
                    productId: "productId",
                    name: "name",
                    descripcion: "descripcion",
                    imagen: "imagen",
                    categoria: "categoria",
                    talla: "talla",
                    precio: "precio",                    
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/productInput",
                    },
                    description: "Id of product",
                }, ],
                responses: {
                    200: {
                        description: "products created",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Createproduct",
                                },
                            },
                        },
                    },
                },
            },
        },

        "/api/dashboard/:{productId}": {
            get: {
                summary: "Get product By Id",
                operationId: "getproductById",
                parameters: [{
                    name: "productId",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/productInput",
                    },
                    description: "Id of product",
                }, ],
                responses: {
                    200: {
                        description: "product found successfully",
                        content: {
                            "application/json": {
                                schema: {
                                     $ref: "#/components/schemas/product",
                             },
                            },
                        },
                    },
                    404: { description: "product not found" },
                    500: { description: "Server error" },
                },
            },post:{
                summary: "Update product By Id",
                operationId: "UpdateproductById",
                parameters: [{
                    productId: "productId",
                    name: "name",
                    descripcion: "descripcion",
                    imagen: "imagen",
                    categoria: "categoria",
                    talla: "talla",
                    precio: "precio",                    
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/productInput",
                    },
                    description: "Id of product",
                }, ],
                responses: {
                    200: {
                        description: "product found successfully",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/product" },
                            },
                        },
                    },
                    404: { description: "product not found" },
                    500: { description: "Server error" },
                },
            }
          

        },

        "/register": {
            post: {
                summary: "User register ",
                operationId: "User register",
                parameters: [{
                    email: "email",
                    password: "password",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/register",
                    },
                    description: "Register user",
                }, ],
                responses: {
                    200: { description: "Register ok" },
                    500: { description: "Server error" },
                },
            }
        },
        "/login": {
            post: {
                summary: "User login ",
                operationId: "User login",
                parameters: [{
                    email: "email",
                    password: "password",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/login",
                    },
                    description: "Login user",
                }, ],
                responses: {
                    200: { description: "Register ok" },
                    500: { description: "Server error" },
                },
            }
        },
    },
};