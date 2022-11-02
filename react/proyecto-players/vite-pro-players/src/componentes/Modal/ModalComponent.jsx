import React, { useState } from "react";
import "../styles.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ModalComponent(props) {
  // const handleOpen = () => {
  //   setmodalOpen(true);
  // };
  const handleClose = () => {
    props.setModalOpen(false);
  };

  return (
    <div>
      Modal
      <Modal
        open={props.ModalOpen}
        keepMounted
        className="modal"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-container">
          <Box className="inner-row-modal-container">
            {/* <h2 className="modal-jugador"> */}
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Jugador: {props.ModalDatos.nombre}
            </Typography>
            {/* </h2> */}
            <Typography className="modal-especialidad">
              Especialidad: {props.ModalDatos.especialidad}
            </Typography>
            <ul>
              <li>{props.ModalDatos.edad}</li>
              <li>{props.ModalDatos.altura}</li>
              <li>{props.ModalDatos.peso}</li>
              <li>{props.ModalDatos.nacionalidad}</li>
            </ul>
          </Box>

          <Typography className="modal-descripcion">
            Descripción: {props.ModalDatos.descripcion}
          </Typography>
        </Box>
      </Modal>
      {/* <p>{props.ModalDatos.edad}</p>
      <p>{props.ModalDatos.altura}</p>
      <p>{props.ModalDatos.peso}</p>
      <p>{props.ModalDatos.nacionalidad}</p> */}
    </div>
  );
}

export default ModalComponent;
