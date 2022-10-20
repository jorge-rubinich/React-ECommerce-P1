import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TicketList from './components/TicketList';

function App() {
  return (
    <div className="App">
      <Header/>
      <TicketList mensaje="Listado de productos" catName="Todas"/>
    </div>
  );
}

export default App;
