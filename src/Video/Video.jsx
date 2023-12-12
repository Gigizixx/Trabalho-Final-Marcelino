
import React, { useState, useEffect } from "react";
import Header from "../Componentes/Cabeçalho";
import { useNavigate } from "react-router-dom";

export default function Video() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    const [lista, setLista] = useState(listaLocalStorage);
    const [id, setId] = useState((listaLocalStorage.length && listaLocalStorage[listaLocalStorage.length - 1].id + 1) || 1);
    const [Video, setVideo] = useState("");
    const [linkdovideo, setlinkdovideo] = useState("");
    const [cantor, setcantor] = useState("");
    const [descricao, setdescricao] = useState("");
    const [musicas, setmusicas] = useState("");

    useEffect(() => {
        localStorage.setItem("Lista", JSON.stringify(lista));
    }, [lista]);

    const navigate = useNavigate();

    const salvar = (e) => {
        e.preventDefault();
        const Video = {
            id,
            Video,
            linkdovideo,
            cantor,
            descricao,
            musicas,
        };
        setLista([...lista, Video]);
        setId(id + 1);
        setVideo("");
        setlinkdovideo("");
        setcantor("");
        setdescricao("");
        setmusicas("");
        navigate("/");
    };

    return (
        <div>
            <Header />

            <form onSubmit={salvar}>
                <label>
                    Video:
                    <input type="text" placeholder="Video" value={Video} onChange={(e) => setVideo(e.target.value)} />
                </label>

                <label>
                    link do video:
                    <input type="text" placeholder="linkdovideo" value={linkdovideo} onChange={(e) => setlinkdovideo(e.target.value)} />
                </label>

                <label>
                    Cantor:
                    <input type="text" placeholder="Cantor" value={cantor} onChange={(e) => setCantor(e.target.value)} />
                </label>

                <label>
                    descrição:
                    <input type="text" placeholder="descricao" value={descricao} onChange={(e) => setdescricao(e.target.value)} />
                </label>

                <label>
                    Musicas:
                    <input type="text" placeholder="Musicas" value={musicas} onChange={(e) => setMusicas(e.target.value)} />
                </label>

                <button className="btn btn-outline-dark">ADD</button>
            </form>
        </div>
    );
}
