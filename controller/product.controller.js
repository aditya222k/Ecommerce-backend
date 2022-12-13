const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
const app = express();
const db = require("../config/db.js");
const uuid = require("uuid");
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const e = require("express");
const jwt = require("jsonwebtoken");
// modify product, delete product, How will I make sure the product is unique

class ProductController {
  addProducts = async (req, res) => {
    const { product_name, product_desc, price } = req.body;
    const seller_id = req.mukesh.id;
    console.log('seller_id: ', seller_id);
    const id = uuid.v4();
    const created_at = new Date().toISOString();
    db.query(
      `INSERT INTO ecom_mom.product(id, product_name,product_desc,price,seller_id, created_at) VALUES('${id}','${product_name}','${product_desc}','${price}','${seller_id}','${created_at}');`,
      (err, result) => {
        if (err) {
          res.status(200).send(err);
        } else {
          const message = {
            data: {
              id,
              product_name,
              product_desc,
              price,
              seller_id,
              created_at,
            },
          };
          res.status(200).send(message);
        }
      }
    );
  };
  deleteProducts = async (req,res) =>{
    const{id}=req.body;
    db.query(
      `DELETE FROM ecom_mom.product WHERE id = '${id}'`,
      (err,result) => {
        if(err){
          res.status(200).send(err);
        }else{
          res.status(200).send('Product deleted');
        }
      }
    )
  }
}
module.exports = ProductController;