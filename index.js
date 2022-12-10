// const e = require('express');
// const { Router } = require('express');
const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const user= require("./routes/user.routes.js");
const seller = require("./routes/seller.routes.js");



app.use(user);
app.use(seller)

// Default Route
app.get("*", (req, res) => {
    res.send(errorResponse("Invalid Route"));
  });


console.log("run")

app.listen(port)




// module.exports = router;

// login register(post)
// add  product @ seller(post)
// get products @ buyer(get)
// get products @ seller(get)
// create address @ buyer(post)
// read about CRUD
