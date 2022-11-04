import React, {useState} from 'react'
import Categoria from './Categoria'
import Boton from './Boton'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [logged, setLogged ] = useState(false);
    const [usuario, setUsuario] = useState("Registrese");
    let botText="Login";
    function clicBoton() {
        setLogged(!logged);
        setUsuario(!logged?"Admin":"Registrese");
    }

    return (
        <>
            <div className='navContainer'>
                <div className='navLogo'>
                <Link to="/"><img src="/logo.png" alt="" /></Link>
                </div>
                
                {/* CartWidget */}
                <Link to="/cart" className="cartContainer">
                <div >
                    <CartWidget/>
                </div>
                </Link>
                {/* login de Usuario */}    
                <div className="userContainer">
                    <div id='usuario'>{usuario}</div>
                    <Boton botCaption={logged? 'Salir' : 'Ingresar'} action={clicBoton}/>
                </div>
            </div>
            
            {/* Categorias */}    
            <div className="catContainer">
                <Categoria catName= "Pulseras" />
                <Categoria catName= "Llaveros" />
                <Categoria catName= "Entradas" />  
                <Categoria catName= "Marketing" />  
            </div>
        </>
    )
}

export default Navbar