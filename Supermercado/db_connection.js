var mysql = require("mysql");

var db = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user",
    database: "supermercado"
});

db.connect(function(err){
    if (err) throw err;
    console.log("DB Connected")
});

module.exports = db;