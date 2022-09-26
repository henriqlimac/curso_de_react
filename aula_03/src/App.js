import './App.css';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  return (
    <div className="App">      
      <Pessoa
        nome="Anderson"
        idade="48"
        profissao="Professor"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;