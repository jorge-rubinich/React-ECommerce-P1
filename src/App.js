import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';

const App = () => {  
  const [catName, setCatName] = useState('Todas');
  return (
    <div className="App">
      <Header/>
      <ItemListContainer categoria={catName}/>
    </div>
  );
}

export default App;
