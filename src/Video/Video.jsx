
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
    setcantor("");
    setDescricao("");
    setmusicas("");
    navigate("/");
  };

  return (
    <div>
      <Header />
      <form onSubmit={salvar}>
        <p>Video:</p>
        <input type="text" placeholder="Video" value={Video} onChange={(e) => setVideo(e.target.value)} />

        <p>Link do vídeo:</p>
        <input type="text" placeholder="linkdovidek" value={linkdovideo} onChange={(e) => setLink do video(e.target.value)} />
        <p>Cantor:</p>
        <input type="text" placeholder="Cantor" value={cantor} onChange={(e) => setCantor(e.target.value)} />

        <p>Descrição:</p>
        <input type="text" placeholder="Descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />

        <p>Musicas:</p>
        <input type="text" placeholder="Musicas" value={musicas} onChange={(e) => setMusicas(e.target.value)} />

        <br />

        <button className="btn btn-outline-dark">ADD</button>
      </form>
    </div>
  );
}
