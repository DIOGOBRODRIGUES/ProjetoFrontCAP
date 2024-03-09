import './App.css';
import CaixaDeBusca from './componentes/CaixaDeBusca';
import Logo from './componentes/Logo';
import MenuItens from './componentes/MenuItens';
import Parceiros from './componentes/Parceiros';

// arrai com itens de menu, caso precise adicionar uma novo item, basta ataulizar o array abaixo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <MenuItens/>
      </header>
      <body>
          <CaixaDeBusca/>
          <Parceiros></Parceiros>
      </body>
    </div>
  );
}

export default App;
