const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const router = express.Router()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const AuthController = require("../controller/auth.controller.js");
const verifyToken = require("../middleware/auth.middleware");

const{sellerLogin,sellerSignup } = new AuthController();



router.post("/sellerLogin", sellerLogin );
router.post("/sellerSignup",sellerSignup);

  module.exports=router