
const admin = require("firebase-admin");

const head = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dashboard</title>
    <link rel="stylesheet" href="/style.css">
</head>
`;
let header;
async function hea(kind) {

    let devol = `
        <header id="cabecera">
        
        <nav class="menu">
        <ul>
            <li>
                <form action="/products" method="get">
                    <button type="submit" >Productos</button>
                </form>
            </li>
            <li>
                <form action="/products" method="get">
                    <button type="submit" >Camisetas</button>
                </form>
            </li>
            <li>
                <form action="/products" method="get">
                    <button type="submit" >Pantalones</button>
                </form>
            </li>
            <li>
                <form action="/products" method="get">
                    <button type="submit" >Zapatos</button>
                </form>     
            </li>
            <li>
                <form action="/products" method="get">
                    <button type="submit" >Accesorios</button>
                </form>
            </li>
`
    if (kind == undefined) {

        devol += `    
            <li>
                <form action="/login" method="get">
                    <button type="submit" >login</button>
                </form>
            </li>
            </ul>
            </nav>
            </header>`
    } else {

        devol += `    
            <li>
                <form action="/logout" method="post">
                    <button type="submit" >logout</button>
                </form>
            </li>
            </ul>
            </nav>
            </header>`
    }

    return devol;
}



let body = ``;
let devolver = "";


const Templatefirebase = {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////registro
    //Formulario de registro



    async formRegistro(req) {

        header = await hea(req.session.kind)

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
            header = await hea(req.session.kind)
            devolver = `${head}${header}`
            body = ` <div">`
            body += `           
            <div>Se ha realizado el registro con exito</div>
            `
            body += " </div>"
            devolver += body;
            return devolver;
        } else {

        }
    },


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////login
    //Formulario de login
    async formLogin(req) {
        header = await hea(req.session.kind)
        devolver = `${head}${header}`
        body = ` <form action="/login/" method="post" id="LogearseForm">`
        body += `           
            <label for="email">Email:</label>
            <input type="text" id="email" name="email"  required><br>
    
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password"  required><br>
        
           
            <button type="submit">Logearse</button>
            `
        body += " </form>"
        devolver += body;
        return devolver;
    },
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