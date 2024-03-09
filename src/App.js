import './App.css';
import Logo from './componentes/Logo';
import MenuItens from './componentes/MenuItens';

// arrai com itens de menu, caso precise adicionar uma novo item, basta ataulizar o array abaixo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <MenuItens/>
      </header>
    </div>
  );
}

export default App;
