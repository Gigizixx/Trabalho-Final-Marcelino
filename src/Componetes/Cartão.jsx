
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ lista }) => {
  console.log(lista);

  return (
    <>
      {lista.map((video) => (
        <div className="card" key={video.id}>
          <Link to={`./Detalhe/${video.id}`}>
            <iframe
              title={video.Video}
              src={`adicionar link/embed/${video.url.slice(17)}`}
              frameBorder="0"
            ></iframe>
            <p>{video.Video}</p>
          </Link>
        </div>
      ))}
    </>
  );
};
