import React from "react";
import '../App.css';
import js from './assets/js.jpg';
import html from './assets/html.jpg';
import css from './assets/css.jpg';
import node from './assets/node.jpg';
import react from './assets/react-logo.png';
import reactNative from './assets/react-native.png';

export default function Sessao3 () {
    return (
        <div id="sessaoTecnologias"> 
            <p className="tituloSessao">Tecnologias</p>
                <div id="listaTecnologias">
                    <div className="nomeEtecnologias">
                        <img src={js} className="imagem" />
                        <p className="nomeTecnologia">JavaScript</p>
                    </div>
                    <div className="nomeEtecnologias">
                        <img src={html} className="imagem"/>
                        <p className="nomeTecnologia">HTML</p>
                    </div>
                    <div className="nomeEtecnologias">
                        <img src={css} className="imagem"/>
                        <p className="nomeTecnologia">CSS</p>
                    </div>
                    <div className="nomeEtecnologias">
                        <img src={node} className="imagem"/>
                        <p className="nomeTecnologia">Node JS</p>
                    </div>
                    <div className="nomeEtecnologias">
                        <img src={react} className="imagem"/>
                        <p className="nomeTecnologia">React JS</p>
                    </div>
                    <div className="nomeEtecnologias">
                        <img src={reactNative} className="imagem"/>
                        <p className="nomeTecnologia">React Native</p>
                    </div>
                </div>                
            </div>
    )

}