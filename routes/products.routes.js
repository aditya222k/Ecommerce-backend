const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const ProductController= require("../controller/product.controller");
const verifyToken = require("../middleware/auth.middleware");


const { addProducts } = new ProductController();

router.post("/add_products",verifyToken,addProducts);

module.exports = router;
