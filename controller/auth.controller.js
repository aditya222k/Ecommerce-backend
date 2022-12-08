const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
const app = express();
const db = require("../config/db.js");
const uuid = require("uuid");
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const bcrypt = require("bcrypt");
const e = require("express");
const jwt = require("jsonwebtoken");

class AuthController {
  userLogin = async (req, res) => {
    const { phone_no, password } = req.body;
    db.query(
      `SELECT * FROM ecom_mom.user WHERE user.phone_no = ${phone_no}`,
      async (err, result) => {
        if (err) {
          res.status(400).send(err);
        } else {
          //   console.log("result: ", result);
          if (result.length) {
            if (bcrypt.compareSync(password, result[0].password)) {
              console.log(result)
              const jwt_login= jwt.sign({id:result[0].user_id ,phone_no},
              process.env.JWT_TOKEN_KEY,
              {
                  expiresIn: '48h'
              }
              );
              result[0]["token"] = jwt_login;
              console.log(result);
              const last_login = new Date().toISOString();
              //runquery from here
              res.status(200).send(result);
            } else {
              res.status(200).send({ message: "Invalid Password" });
            }
          } else {
            res.status(400).send("Invalid Phone Number");
          }
        }
      }
    );
  };

  userSignup = async (req, res) => {
    const { user_name, first_name, last_name, phone_no, password } = req.body;
    console.log(user_name, last_name);
    // res.status(200).send(last_name);
    db.query(
      `SELECT * FROM ecom_mom.user WHERE user.phone_no = ${phone_no}`,
      async (err, result) => {
        if (err) {
          console.log(err);
          res.status(400).send(err);
        } else {
          console.log("result:", result);
          if (result.length) {
            res.status(200).send({ message: "User Already Exists" });
          } else {
            var encryptedPassword = await bcrypt.hash(password, 10);
            const created_at = new Date().toISOString(),
            uid = uuid.v4();
            db.query(
              `INSERT INTO ecom_mom.user(user_id, username, password, userpass, first_name, last_name, phone_no, created_at) VALUES('${uid}','${user_name}','${encryptedPassword}','${password}','${first_name}','${last_name}','${phone_no}','${created_at}');`,
              (err, result) => {
                if (err) {
                  console.log(err);
                  // res.status(400).send(err);
                  res.status(400).send(err?.sqlMessage);
                } else {
                  const message = {
                    data: {
                      user_name,
                      phone_no,
                      encryptedPassword,
                      uid,
                      created_at,
                    },
                  };
                  console.log(message);
                  res.status(201).send(message);
                }
              }
            );
          }
        }
      }
    );
  };
}

module.exports = AuthController;
