import React, {useState, useEffect} from 'react';
import Categoria from './Categoria';
import Boton from './Boton';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import OrderSearch from './OrderSearch';
import { getCategories } from '../products'; 

const Navbar = () => {
    const [logged, setLogged ] = useState(false);
    const [usuario, setUsuario] = useState("Registrese");
    const [cat, setCat] = useState([]);
    let botText="Login";
    function clicBoton() {
        setLogged(!logged);
        setUsuario(!logged?"Admin":"Registrese");
    }

    useEffect(() => {
        getCategories().then(res => setCat(res));
    },[]);


    return (
        <>
            <div className='navContainer'>
                <div className='navLogo'>
                <Link to="/"><img src="/logo.png" alt="" /></Link>
                </div>
                <OrderSearch />
                {/* CartWidget */}
                <Link to="/cart" className="cartWidgetContainer">
                <div >
                    <CartWidget/>
                </div>
                </Link>
                {/* login de Usuario */}    
{/*                 <div className="userContainer">
                    <div id='usuario'>{usuario}</div>
                    <Boton botCaption={logged? 'Salir' : 'Ingresar'} action={clicBoton}/>
                </div> */}
            </div>
            
            {/* Categorias */}    
            <div className="catContainer">
                {cat.map((cat) => {
                    return (
                        <Categoria key={cat.id} catName={cat.titulo}/>
                    )
                }
                )}
            </div>
        </>
    )
}

export default Navbar