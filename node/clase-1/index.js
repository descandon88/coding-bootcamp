//Levantar el servidor y utilizar la comunicación http
const express = require("express");
//Ver los recursos que se consultan, el verbo y la respuesta.
const morgan = require("morgan");
//Nos permite acceder a la información que el cliente nos manda por body en la comunicación http
const bodyParser = require("body-parser");
//Nos permite acceder a las cookies de la request.
const cookieParser = require("cookie-parser");
//Deshabilita el cors para hacer una correcta conexión entre backend y frontend por HTTP.
const cors = require("cors");
//Nos permite acceder al archivo .env donde estarán las variables de entorno.
require("dotenv").config();
// let telefonos = require("./agenda");
//ENDPOINT -  localhost:8000/usuarios    GET
// REQUEST - localhost:8000/usuarios    POST     body: {usuario: nombreUsuario, mail: mail@uysuari.com}
// MIDDLEWARE - Man In The Middle
// RESPONSE - STATUS CODE: 200, 201, 400, 404.       JSON(usuario)       JSON({error:'no se ha encontrado el usuario'})
const telefonosRoutes = require("./routes/telefonos");
//Servidor express
const app = express();
//MIDDLEWARES
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api",telefonosRoutes);
//ENDPOINTS
app.get("/api", (req, res) => {
  res.json({ time: Date() });
});

app.get("/error", (req, res) => {
  res.status(400).json({ error: "Recurso not found" });
});


//EJECUCION DEL SERVIDOR
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




// app.get("/api/telefonos", (req, res) => {
//   res.json(telefonos);
// });

// app.get("/api", (req, res) => {
//   res.json(telefonos);
// });

// ////// Ejercicio: 2.3//////

// app.get("/api/telefonos/:id", (req, res) => {
//   const id = Number(req.params.id);
//   // res.send('Hello World!')

//   const result = telefonos.find((telefono) => telefono.id === id);

//   if (!result) {
//     res
//       .status(404)
//       .json({ error: `No se han encontrado registros con id: ${id}` });
//   }

//   res.json(result);
// });

// ///////////////////////////////////////////////
// /////////////////ej 3.1////////////////////////
// app.post("/api/telefonos/nuevo", (req, res) => {
//   const nuevoTelefono = req.body;
//   if (!nuevoTelefono.id) {
//     res.status(400).json({ error: "No se ha mandado el id" });
//     return;
//   }
//   if (!nuevoTelefono.name) {
//     res.status(400).json({ error: "No se ha mandado el nombre" });
//     return;
//   }
//   if (!nuevoTelefono.number) {
//     res.status(400).json({ error: "No se ha mandado el numero" });
//     return;
//   }

//   const validarId = telefonos.find(
//     (telefono) => telefono.id === Number(nuevoTelefono.id)
//   );

//   if (validarId) {
//     res.status(400).json({ error: "El id ya esta siendo utilizado" });
//     // return;
//   } else {
//     telefonos.push(nuevoTelefono);
//     res.status(201).json(telefonos);
//   }

//   //Insercion a la base de datos ficticia.
//   // nuevoTelefono.id = nuevoId;
//   // telefonos.push(nuevoTelefono);
//   // res.statusMessage(201).json(telefonos);
// });

// // Ej 3.2

// // Utilizar el endpoint creado anteriormente y solamente pasar por body el nombre y número. El id se deberá calcular con el último id registrado.

// // 4.1 Borrar un registro según el número de teléfono.
// app.delete("/api/telefonos/borrar/:borrar", (req, res) => {
//   const borrar = string(req.params.number);
//   const listNum = telefonos.filter((telefono) => telefono.number != borrar);
//   if (!listNum) {
//     res
//       .status(404)
//       .json({
//         error: `nose han encontrado registros con el numero : ${number}`,
//       });
//   }
//   res(201).json(listNum);
// });

// //4.2 Borrar un registro según el id.
// app.delete("/api/telefonos/borrar/:borrar", (req, res) => {
//   const borrarid = string(req.params.id);
//   const listId = telefonos.filter((telefono) => telefono.id != borrarid);
//   if (!listId) {
//     res
//       .status(404)
//       .json({ error: `No se han encontrado registros con el id : ${id}` });
//   }
//   res(201).json(listId);
// });

// ////////////////////5.1///////////////
// app.put("/api/telefonos/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const resultadoPut = telefonos.map((tel) => {
//     if (tel.id === id) {
//       tel.name = "pepe";
//     }
//     return tel;
//   });
//   return res.json(resultadoPut);
// });
