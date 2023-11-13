const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./src/routes/index");

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

//Seteamos headers para la respuesta que le enviamos al cliente
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "http://localhost:5173/"); //Autorizo recibir solicitudes de este dominio
   res.header("Access-Control-Allow-Credentials", true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //Autorizo recibir solicitudes con dichos hedears
   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
   next();
});

app.use("/", routes);

module.exports = app;