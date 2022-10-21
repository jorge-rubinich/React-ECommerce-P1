import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer catName="Todas"/>
    </div>
  );
}

export default App;
