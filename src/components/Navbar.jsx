import React, {useState} from 'react'
import Categoria from './Categoria'
import Boton from './Boton'


const Navbar = () => {
    const [logged, setLogged ] = useState(false);
    const [usuario, setUsuario] = useState("Registrese");
    let botText="Login";
    function clicBoton() {
        setLogged(!logged);
        setUsuario(!logged?"Admin":"Registrese");
    }

    return (
        <div className='navContainer'>
            {/* Categorias */}    
            <div className="catContainer">
                                
                <Categoria catName= "Todas" />
                <Categoria catName= "Pulseras" />
                <Categoria catName= "Llaveros" />
                <Categoria catName= "Entradas" />  
                <Categoria catName= "Marketing" />  
                              
            </div>
            {/* login de Usuario */}    
            <div className="userContainer">
                <div id='usuario'>{usuario}</div>
                <Boton botCaption={logged? 'Salir' : 'Ingresar'} action={clicBoton}/>
            </div>
        </div>
    )
}

export default Navbar