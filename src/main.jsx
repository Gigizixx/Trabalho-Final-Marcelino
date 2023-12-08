
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Destaque from './Destaque/Destaque';
import Video from './Video/Video';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destaque" element={<Destaque />} />
        <Route path="/Video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);