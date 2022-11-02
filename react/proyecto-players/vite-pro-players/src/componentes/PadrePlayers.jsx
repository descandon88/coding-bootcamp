import React, { useState, useEffect } from "react";
import Buscador from "./input/Buscador";
import VisualizadorCartas from "./main/VisualizadorCartas";
import ModalComponent from "./Modal/ModalComponent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./styles.css";

function PadrePlayers() {
  const Datos = [
    {
      nombre: "Pablo Heredia",
      especialidad: "Culturismo",
      edad: "31",
      altura: "1.72",
      peso: "90kg",
      nacionalidad: "Argentina",
      record: "120 press plano",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      estadisticas: {
        energia: 100,
        fuerza: 100,
        resistencia: 100,
        agilidad: 100,
        aguante: 100,
        dedicacion: 100,
        profesionalismo: 100,
      },
    },
    {
      nombre: "Luis M. Suarez",
      especialidad: "Fútbol",
      edad: "38",
      altura: "1.85",
      peso: "90kg",
      nacionalidad: "Uruguay",
      record: "Jugó con Messi",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      estadisticas: {
        energia: 80,
        fuerza: 100,
        resistencia: 100,
        agilidad: 10,
        aguante: 100,
        dedicacion: 50,
        profesionalismo: 40,
      },
    },
    {
      nombre: "Soy Dalto",
      especialidad: "Programador",
      edad: "25",
      altura: "1.65",
      peso: "70kg",
      nacionalidad: "Uruguay",
      record: "1000 líneas de código por minuto",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      estadisticas: {
        energia: 100,
        fuerza: 15,
        resistencia: 100,
        agilidad: 15,
        aguante: 100,
        dedicacion: 100,
        profesionalismo: 100,
      },
    },
    {
      nombre: "Tigresa Acuña",
      especialidad: "Boxo",
      edad: "35",
      altura: "1.72",
      peso: "83kg",
      nacionalidad: "Argentina",
      record: "Tumbó mas de 10 dientes",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      estadisticas: {
        energia: 100,
        fuerza: 85,
        resistencia: 100,
        agilidad: 85,
        aguante: 80,
        dedicacion: 100,
        profesionalismo: 80,
      },
    },
    {
      nombre: "Andres Vilaseca",
      especialidad: "Rugby",
      edad: "28",
      altura: "1.90",
      peso: "100kg",
      nacionalidad: "Uruguay",
      record: "15 tackles en menos de 5 minutos",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      estadisticas: {
        energia: 100,
        fuerza: 100,
        resistencia: 100,
        agilidad: 60,
        aguante: 100,
        dedicacion: 87,
        profesionalismo: 91,
      },
    },
    {
      nombre: "Manuela Vilar",
      especialidad: "Hockey",
      edad: "29",
      altura: "1.70",
      peso: "73kg",
      nacionalidad: "Uruguay",
      record: "8 goles",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      estadisticas: {
        energia: 85,
        fuerza: 50,
        resistencia: 90,
        agilidad: 95,
        aguante: 75,
        dedicacion: 100,
        profesionalismo: 100,
      },
    },
  ];
  const [Data, SetData] = useState(Datos);
  const [JugadoresIngresado, setJugadoresIngresado] = useState("");
  const [InputBuscar, setInputBuscar] = useState(false);
  const [ModalData, setModalData] = useState([]);
  const [modalOpen, setmodalOpen] = useState(false);

  const handleClickSearch = () => {
    setJugadoresIngresado("");

    console.log("InputBuscar: ", InputBuscar);
    // setInputBuscar((input) => (input = JugadoresIngresado));
    // setInputBuscar(JugadoresIngresado);
    console.log("InputBuscar: ", InputBuscar);
  };

  const handlePlayersChange = (event) => {
    // setJugadoresIngresado("");
    setJugadoresIngresado(event.target.value);
    setInputBuscar(true);
    // setInputBuscar((input) => (input = JugadoresIngresado));
  };

  return (
    <div className="Main">
      <Buscador
        DatosObj={Datos}
        setDatosObj={SetData}
        setModalOpen={setmodalOpen}
        HandlePlayers={handlePlayersChange}
        ItemPlayer={JugadoresIngresado}
      />
      <VisualizadorCartas
        DatosObj={Data}
        ItemPlayer={JugadoresIngresado}
        onClick={handleClickSearch}
        setModalDatos={setModalData}
        setModalOpen={setmodalOpen}
      />
      <ModalComponent
        ModalDatos={ModalData}
        ModalOpen={modalOpen}
        setModalOpen={setmodalOpen}
      />
    </div>
  );
}

export default PadrePlayers;
