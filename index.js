// const e = require('express');
// const { Router } = require('express');
const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/db');
// const uuid = require('uuid');
const router = express.Router()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



console.log("run")

app.post("/signup",(req,res)=>{
        const user_name = req.body.user_name;
        const last_name = req.body.last_name;
        console.log(user_name,last_name)
        res.status(200).send(last_name)

})

app.listen(3000);
// app.get('/',(req,res)=>{
//     // res.send("hello")
//     db.query(`SELECT * FROM ecom_mom.user;`, (err,result)=>{
//         if (err){
//             console.log(err)
//         }
//         else{
//             console.log(result)
//             res.send({result}) 
//         }
//     })
// })

// app.post("/signup", (req,res)=>{
    // const {user_name, first_name, last_name, phone_no, password}= req.body;
    // const user_name = req.body.user_name
    // const last_name = req.body.last_name
    // console.log(user_name)
    // res.send({user_name,last_name})
    // const uuid = uuid.v4();

    // db.query(
    //     `SELECT * FROM ecom_mom.user WHERE user.phone_no = ${phone_no}`, async(err,result)=>{
    //         if(err){
    //             console.log(err)
    //             res.status(400).send(err); 
    //         }else{
    //             console.log ("result:", result);
    //         }
    //     }
    // )

// })

// app.listen(3000);
// module.exports = router;

// login register(post)
// add  product @ seller(post)
// get products @ buyer(get)
// get products @ seller(get)
// create address @ buyer(post)
// read about CRUD
