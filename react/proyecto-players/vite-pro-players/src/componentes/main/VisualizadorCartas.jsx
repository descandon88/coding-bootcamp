import React, { useState } from "react";
import "../styles.css";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
// import { makeStyles } from "@material-ui/core/styles";

// import styles from "./Modal.module.css";

function VisualizadorCartas(props) {
  const [IncluyeJugador, setIncluyeJugador] = useState(false);
  // const [modalOpen, setmodalOpen] = useState(false);

  const handleOpen = () => {
    props.setModalOpen(true);
    // props.setModalOpen(true);
  };
  // const handleClose = () => {
  //   setmodalOpen(false);
  // };
  const changeButtomModal = (objeto) => {
    props.setModalDatos(objeto);
    console.log("se pasa", objeto);
  };
  const PlayersCard = (obj) => {
    console.log(obj);

    return obj.map((obj, index) => (
      <li className="li-cards" key={index}>
        <p> {obj.nombre} </p>
        <p>Aquí va la imagen</p>
        <p>{obj.especialidad}</p>
        <Button
          onClick={() => {
            handleOpen();
            changeButtomModal(obj);
          }}
          className="buttonLi"
          color="primary"
          variant="contained"
        >
          Ver más
        </Button>
        {/* <Modal
          open={modalOpen}
          className="modal"
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedly="modal-modal-description"
        >
          <div className="modal-container">
            <div className="inner-row-modal-container">
              <h2 className="modal-jugador">Jugador: {obj.nombre}</h2>
              <h4 className="modal-especialidad">
                Especialidad: {obj.especialidad}
              </h4>
              <ul>
                <li>{obj.edad}</li>
                <li>{obj.altura}</li>
                <li>{obj.peso}</li>
                <li>{obj.nacionalidad}</li>
              </ul>
            </div>

            <p className="modal-descripcion">Descripción: {obj.descripcion}</p>
          </div>
        </Modal> */}
      </li>
    ));
  };

  return (
    <div className="ContenedorCartasJugadores">
      <h4>Visualizador de Cartas</h4>
      <ul className="ul-cards">{PlayersCard(props.DatosObj)}</ul>
    </div>
  );
}

export default VisualizadorCartas;
