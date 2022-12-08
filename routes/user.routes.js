const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const router = express.Router()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const AuthController = require("../controller/auth.controller.js");

const{userLogin, userSignup} = new AuthController();

router.post("/signup",userSignup);
router.post("/login", userLogin);

module.exports=router