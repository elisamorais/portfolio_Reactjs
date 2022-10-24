import React from "react";
import '../App.css';

const Portfolio = () => {
    return (
        <div className="containerPrincipal">
        
            <div className='topo'>
                <p className="textoTopo">Sobre</p>
                <p className="textoTopo">Tecnologias</p>
                <p className="textoTopo">Projetos</p>
                <p className="textoTopo">Contato</p>
            </div>
            <div className="sessaoNome">
                <p id="textoNome">Elisa Morais</p>
                <p id="textoProfissao">Web Developer</p>
            </div>
            <div className="sessaoSobre">
                <p className="tituloSessao">Sobre</p>
                <p id="textoSobre">What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book.
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book.
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book.
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book. 
                </p>
            </div>
            <div id="sessaoTecnologias"> 
                <p className="tituloSessao">Tecnologias</p>
                <div id="listaTecnologias">
                    <div className="nomeEtecnologias">
                        <img src="assets/js.jpg" className="imagem" />
                        <p className="nomeTecnologia">JavaScript</p>
                    </div>
                    <div className="nomeEtecnologias">
                        <img src="assets/html.jpg" className="imagem"/>
                        <p className="nomeTecnologia">HTML</p>
                    </div>
                    <div className="nomeEtecnologias">
                        <img src="assets/css.jpg" className="imagem"/>
                        <p className="nomeTecnologia">CSS</p>
                    </div>
                    <div className="nomeEtecnologias">
                        <img src="assets/node.jpg" className="imagem"/>
                        <p className="nomeTecnologia">Node JS</p>
                    </div>
                    <div className="nomeEtecnologias">
                        <img src="assets/react-logo.png" className="imagem"/>
                        <p className="nomeTecnologia">React JS</p>
                    </div>
                    <div className="nomeEtecnologias">
                        <img src="assets/react-native.png" className="imagem"/>
                        <p className="nomeTecnologia">React Native</p>
                    </div>
                </div>                
            </div>  
            <div>
                <p className="tituloSessao">Projetos</p>
            </div>
            <div id="listaTecnologias">
                <div className="nomeEtecnologias">
                    <p className="nomeTecnologia">Calculadora de Água</p>
                </div>
                <div className="nomeEtecnologias">
                    <p className="nomeTecnologia">Calculadora de IMC</p>
                </div>
                <div className="nomeEtecnologias">
                    <p className="nomeTecnologia">Jogo da Memória</p>
                </div>
                <div className="nomeEtecnologias">
                    <p className="nomeTecnologia">Calculadora de Água</p>
                </div>    
                <div className="nomeEtecnologias">
                    <p className="nomeTecnologia">Aplicativo Álcoolou Gasolina</p>
                </div>
                <div className="nomeEtecnologias">
                    <p className="nomeTecnologia">Aplicativo Tela de Login</p>
                </div>
                <div className="nomeEtecnologias">
                    <p className="nomeTecnologia">Portfólio em Node.JS</p>
                </div>
                <div className="nomeEtecnologias">
                    <p className="nomeTecnologia">Jogo Sonic Jump</p>
                </div>
        </div>
        </div>
    )
}


export default Portfolio; 