var exprss = require("express");
var path = require("path");

var app = exprss();

console.log(__dirname);
console.log(__dirname + "/../public");
const port = process.env.PORT || 3000;

var publicpath = path.join(__dirname,"/../public");
app.use(exprss.static(publicpath));

app.listen(port,()=>{
    console.log("Server start on port no. 3000");
});