import './styles.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Form from './components/Form';
import {CartContext} from './contexts/CartContext';
import CartGlobal from './contexts/CartContext';
import Order from './components/Order';

const App = () => {  
  return (
    <BrowserRouter>
      <div className="App">
        {/* CartGlobal esta definido en el contexto cartContext */}
        <CartGlobal>
          <Header/>
          <Routes>
            <Route path="/categoria/:catName" element={<ItemListContainer/>}/>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Form/>}/>
            <Route path="/order/:orderId" element={<Order/>}/>"
{/*             <Route path="*" element={<h1>Ups! Lo siento. Creo que la pagina solicitada no existe.</h1>}/>
 */}          </Routes>
        </CartGlobal>
      </div>
    </BrowserRouter>
  );
}

export default App;
