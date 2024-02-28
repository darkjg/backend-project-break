const admin = require("firebase-admin");
let flag = false;
const head = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dashboard</title>
    <link rel="stylesheet" href="/style.css">
</head>
`;

let header = `
<header id="cabecera">
<div class="texto">
    <div>Productos</div>
    <div>Camisetas</div>
    <div>Pantalones</div>
    <div>Zapatos</div>
    <div>Accesorios</div>
`
if (!flag) {
    header += `    
    <button value="${flag = !flag}">Login</button> 
    </div>
    </header>`
} else {
    header += `  
    <button value="${flag = !flag}">Logout</button> 
    </div>
    </header>`
}
let body = ``;
let devolver = "";

const Templatefirebase = {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////registro
    //Formulario de registro
    async formRegistro() {
        devolver = `${head}${header}`
        body = ` <form action="/Register/" method="post" id="loginForm">`
        body += `           
            <label for="email">Email:</label>
            <input type="text" id="email" name="email"  required><br>
    
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password"  required><br>
        
           
            <button type="submit">Registrarse</button>
            `
        body += " </form>"
        devolver += body;
        return devolver;
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Envio de registro
    async envioRegistro(registrado) {
        if (registrado) {
            devolver = `${head}${header}`
            body = ` <div">`            
            body += `           
            <div>Se ha realizado el registro con exito</div>
            `
            body += " </div>"
            devolver += body;
            return devolver;
        }else{
            
        }
    },


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////login
    //Formulario de login
    async login(req) {
        const { email, password } = req.body;
        admin.auth().getUserByEmail(email).then((userRecord) => {
            // Check the provided password against the user's stored password hash
            // This part may vary depending on your application
            if (password === "admin123") {
                flag = true;
                req.session.user = userRecord.uid;
                return ("Login successful");
            } else {
                return ("Login failed");
            }
        })
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //logout
    async login(req) {
        req.session.user = null;
        flag = false;
        return ("Logged out");
    }
}
module.exports = Templatefirebase