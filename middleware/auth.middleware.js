const jwt = require('jsonwebtoken');
const config = process.env;
import { Request, Response,NextFunction } from "express";


const verifyToken = (req,res,next)=>{
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(!token){
        return res.status(400).send("Token is required for Authentication!");
    }else{
        try{
            const decode = jwt.verify(token, config.JWT_TOKEN_KEY);
            req.body = decode;
            console.log(decode);

        }catch(err){
            return res.status(400).send("Invalid Token Id!");
        } 
        return next();
    }

}

module.exports= verifyToken