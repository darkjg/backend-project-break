const express = require("express");
const app = express();
const {dbConnection} = require("./config/db");
const PORT = 3000;
const ProductsRoutes = require("./routes/productRoutes");
const path = require('path');
// const usersRoutes = require("./routes/users")
//const swaggerUI = require("swagger-ui-express");
//const docs = require("./docs/index");

app.use(express.static(__dirname + '/../public'));
app.use(express.urlencoded({ extended: true }));

dbConnection();
app.use(express.json()); // para que el req.body no sea undefined

app.use("/", ProductsRoutes);
// app.use("/users", usersRoutes)
//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))


app.listen(PORT, () => console.log("Servidor levantado en el puerto: " + PORT));