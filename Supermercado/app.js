var express = require("express");
const app = express();
const porta = 3000;
const router = require('./routers/routers');

app.set("view engine", "ejs");
app.set("views", __dirname, "/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use('/', router);

app.listen(porta, () => {
    console.log("Servidor rodando na porta " + porta)
});
