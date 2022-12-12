import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import {CartContext} from './contexts/CartContext';
import CartGlobal from './contexts/CartContext';
import Order from './components/Order';
import Confirm from './components/Confirm';
import CheckOut from './components/CheckOut';

const App = () => {  
  return (
    <BrowserRouter>
      <div className="App">
        {/* CartGlobal esta definido en el contexto cartContext */}
        <CartGlobal>
          <Header/>
          <div className='mainContainer'> 
            <Routes>
              <Route path="/categoria/:catName" element={<ItemListContainer/>}/>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/order/:orderId" element={<Order/>}/>
              <Route path="/confirm/:orderId" element={<Confirm/>}/>
              <Route path="/checkout/:orderId" element={<CheckOut/>}/>
            </Routes>
          </div>
        </CartGlobal>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
