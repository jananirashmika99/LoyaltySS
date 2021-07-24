const express = require("express");
const app = express();
const port = process.env.PORT || 55724;
require("./db/conn");

app.get("/", (req,  res)=> {
    res.send("hello from")
});

app.listen(port, () =>{
    console.log('server is running  at port no ,${port}');
})