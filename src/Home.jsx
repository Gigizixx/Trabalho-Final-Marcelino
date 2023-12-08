
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Componentes/Cabeçalho";
import Card from "./Componentes/Cartão";

export default function Home() {
  const lista = JSON.parse(localStorage.getItem("Lista"));

  return (
    <div>
      <Header />
      <Card lista={lista} />
    </div>
  );
}


