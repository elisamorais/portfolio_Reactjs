import logo from './logo.svg';
import './reset.css';
import './App.css';

import Cabecalho from './app/cabecalho';
import Sessao1 from './app/sessao1';
import Sessao2 from './app/sessao2';
import Sessao3 from './app/sessao3';
import Sessao4 from './app/sessao4';


function App() {
  return (
    <div>
      <Cabecalho />
      <Sessao1 />
      <Sessao2 />
      <Sessao3 />
      <Sessao4 />

    </div>
  );
}

export default App;
