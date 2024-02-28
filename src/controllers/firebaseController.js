const Template = require("../Templates/firebaseTemplate");
const Cuenta = require("../models/Cuenta");
const firebase = require("../config/firebase");
const { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } = require("firebase/auth");
auth = getAuth(firebase);






const FirebaseController = {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //registro
    async formRegistro(req, res) {
        try {
            res.send(await Template.formRegistro());
        } catch (e) {
            console.log(e)

        }

    },

    async registro(req, res) {
        const { email, password } = req.body;
        //    await Cuenta.create(req.body);
        try {
            const signUp = createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            res.send("Email ya registrado")
            console.log(error)
        }


    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //login
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const logIn=signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            
        }
        
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //logout
    async logout(req, res) {
        req.session.user = null;
        flag = false;
        return ("Logged out");
    }


}
module.exports = FirebaseController