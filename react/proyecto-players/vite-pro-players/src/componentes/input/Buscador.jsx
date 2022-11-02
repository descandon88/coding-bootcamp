import React, { useState } from "react";
import PadrePlayers from "../PadrePlayers";
import "../styles.css";
import datos from "../datos";

function Buscador(props) {
  const ChangeComparativo = (obj) => {
    console.log("Se clickea el boton buscar", props.ItemPlayer);

    const lcItemPlayer = props.ItemPlayer;

    const vectorFiltered = obj.filter((ob) => {
      if (ob.nombre.includes(props.ItemPlayer)) {
        return true;
      } else {
        return false;
      }
    });
    console.log("se imprime", vectorFiltered);
    if (vectorFiltered.length === 0) {
      props.setDatosObj(obj);
    } else {
      props.setDatosObj(vectorFiltered);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={props.JugadorIngresado}
        placeholder="Escribe aqui el nombre"
        onChange={props.HandlePlayers}
      ></input>
      <button
        id="BotonBuscador"
        onClick={() => {
          // props.setDatosObj(vectorFiltered);
          // props.SummitbyClick();
          ChangeComparativo(datos);
        }}
      >
        Buscar
      </button>
      <p>{props.ItemPlayer}</p>
    </div>
  );
}

export default Buscador;
