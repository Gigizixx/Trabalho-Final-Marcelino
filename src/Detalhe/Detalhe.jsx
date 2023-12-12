import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Componentes/Cabeçalho";

export default function Detalhe() {
  const { id } = useParams();
  const lista = JSON.parse(localStorage.getItem("Lista"));
  const videosertanejo = lista.filter((objeto) => objeto.id == id);

  useEffect(() => {
    //Exemplo:busca dados adicionais ou executa ações na montagem do componente
  }, [id]); 
  return (
    <div>
      {videosertanejo.map((video) => (
        <div key={video.id}>
          <Header />
          <iframe
            title={video.Video}
            src={`https://youtu.be/5fGrfSxTRYw?si=0XneGXIPNfWTukQL/embed/${video.url.slice(17)}`}
          
          ></iframe>
          <p>{video.Video}</p>
          <p>{video.cantor}</p>
          <p>{video.descricao}</p>
         
        </div>
      ))}
    </div>
  );
}