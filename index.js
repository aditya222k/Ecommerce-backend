const e = require('express');
const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/db');


console.log("run")

app.get('/',(req,res)=>{
    // res.send("hello")
    db.query(`SELECT * FROM ecom_mom.user;`, (err,result)=>{
        if (err){
            console.log(err)
        }
        else{
            console.log(result)
            res.send({result})
        }
    })
})



app.listen(3000);