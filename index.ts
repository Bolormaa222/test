const express = require('express');
const app = express();
app.get("/", (req, res)=>res.send("Express on Vercel"));

app.listen(2000, ()=>console.log("server ready on port 2000"))

module.exports = app;