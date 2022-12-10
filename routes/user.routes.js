const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const router = express.Router()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const AuthController = require("../controller/auth.controller.js");
const verifyToken = require("../middleware/auth.middleware");


const{userLogin, userSignup} = new AuthController();

router.post("/signup",userSignup);
router.post("/login", userLogin);
// code to check if verify token is working
router.post("/check",verifyToken,(req,res)=>{
    console.log('req: ', req.mukesh.id);//this can be used to check the user id in product 
    // console.log(verifyToken.res.body)
    res.status(400).send("verify token is working")
    
})
module.exports=router