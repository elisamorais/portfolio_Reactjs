import React from "react";
import '../App.css';
import logo from './assets/novaLogo.png';


export default function Sessao1 () {
    return (  
        <>
        <div className="containerApresentacao">  
            <div class="card">
            <div class="lines"></div>
            <div class="imgBox">
                <img src={logo} alt='logo' />
            </div>
            <div class="content">
                <div class="details">
                    <div class="data">
                        <h3>***<span>Projetos</span></h3>
                        <h3>***<span>Commits</span></h3>
                        <h3>***<span>Forks</span></h3>
                    </div>
                    <div class="actionBtn">
                        <button>Github</button>
                        <button>LinkedIn</button>
                </div>
            </div>
            </div>
            </div>
            </div>
        </> 
    
    )
}
