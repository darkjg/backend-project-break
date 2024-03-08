const Template = require("../Templates/firebaseTemplate");
const Cuenta = require("../models/Cuenta");
const firebase = require("../config/firebase")
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require("firebase/auth");
const session = require("express-session");
const auth = getAuth(firebase);

const FirebaseController = {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //registro
    async formRegistro(req, res) {
        try {
            res.send(await Template.formRegistro(req));
        } catch (e) {
            console.log(e)

        }

    },

    async registro(req, res) {
        const { email, password } = req.body;
      //  await Cuenta.create(req.body);

        createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
            let user = userCredential.user;
            res.send(await Template.formLogin(req));
        })
            .catch((error) => {
                if (error.code == "auth/email-already-in-use") {
                    res.send("Email en uso");
                } else if (error.code == "auth/invalid-email") {
                    res.send("Email no valido");
                } else if (error.code == "auth/operation-not-allowed") {
                    res.send("Operacion no permitida");
                } else if (error.code == "auth/weak-password") {
                    res.send("Contraseña muy debil");
                }
            });



    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //login

    async formLogin(req, res) {
        try {
            res.send(await Template.formLogin(req));
        } catch (e) {
            console.log(e)

        }

    },







    async login(req, res) {
        const { email, password } = req.body;
        try {

            const logIn = await signInWithEmailAndPassword(auth, email, password);
            req.session.kind = logIn._tokenResponse.kind
            req.session.token=logIn;
         
            res.redirect("/dashboard");
        } catch (error) {

        }

    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //logout
    async logount(req, res) {
        req.session.kind = null;
        req.session.destroy();
        res.redirect("/products");
        return ("Logged out");
    }


}
module.exports = FirebaseController