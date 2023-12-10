
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Componentes/Cabeçalho";
import Card from "../Componentes/Cartão";

export default function EmDestaque() {
  const destaques = JSON.parse(localStorage.getItem("Lista"));
  const AparecerDestaque = destaques.slice(-3);

  return (
    <div>
      <Header />
      <Card lista={AparecerDestaque} />
    </div>
  );
}
