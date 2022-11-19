const {json} = require("body-parser");
const telefonos = require("../agenda");
const knex = require("../config/knexfile");

// exports.list1 = (req,res) => {
//       res.json(telefonos);
// }

exports.list1 = (req,res) => {
  // knex("clientes").then((clientes)=>{
    res.json(clientes);
  // } );
};

exports.list = ( req, res) =>{
  knex
  .select("*")
  .from("clientes")
  .where("id", 1)
  .then((clientes) => {
    res.json(clientes);
  })
  .catch((error)=>{
    res.status(400).json({error: error.message});
  });
};
 
/*knex*/
exports.searchTelefono = (req, res) => {
  const idCliente = req.params.id; //lo que pasa el cliente
  knex
    .select("*")
    .from("clientes")
    .where("clienteid", idCliente)
    .then((clientes) => {
      if (clientes.length) {
        res.json(clientes);
      } else {
        res.status(404).json({ error: "El cliente no fue encontrado" });
      }
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
// ////// Ejercicio: 2.3//////

exports.searchId = (req, res) => {
  const id = Number(req.params.id);

  const result = telefonos.find((telefono) => telefono.id === id);

  if (!result) {
    res
      .status(404)
      .json({ error: `No se han encontrado registros con id: ${id}` });
  }

  res.json(result);
};



exports.addTelefono=(req, res) => {
  const nuevoTelefono = req.body;
  if (!nuevoTelefono.id) {
    res.status(400).json({ error: "No se ha mandado el id" });
    return;
  }
  if (!nuevoTelefono.name) {
    res.status(400).json({ error: "No se ha mandado el nombre" });
    return;
  }
  if (!nuevoTelefono.number) {
    res.status(400).json({ error: "No se ha mandado el numero" });
    return;
  }

  const validarId = telefonos.find(
    (telefono) => telefono.id === Number(nuevoTelefono.id)
  );

  if (validarId) {
    res.status(400).json({ error: "El id ya esta siendo utilizado" });
    // return;
  } else {
    telefonos.push(nuevoTelefono);
    res.status(201).json(telefonos);
  }

};