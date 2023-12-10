
import React, { useState, useEffect } from "react";
import Header from "../Componentes/Cabeçalho";
import { useNavigate } from "react-router-dom";

export default function Video() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [lista, setLista] = useState(listaLocalStorage);
  const [id, setId] = useState(listaLocalStorage.length ? listaLocalStorage[listaLocalStorage.length - 1].id + 1 : 1);
  const [Video, setVideo] = useState("");
  const [linkdovideo, setlinkdovideo] = useState("");
  const [cantor, setcantor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [musicas, setmusicas] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  const salvar = (e) => {
    e.preventDefault();
    const novoVideo = {
      id,
      Video,
      linkdovideo,
      cantor,
      descricao,
      musicas,
    };
    setLista([...lista, novoVideo]);
    setId(id + 1);
    setVideo("");
    setlinkdovideo("");
    