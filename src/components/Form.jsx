import React from 'react'

const Form = () => {
    const [data, setData] = React.useState({nombre: '', apellido: ''});
    
    const enviarDatos = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]: value});
    };

    console.log(data);

    return (
    <div style={{
        display: 'flex',
        minHeight: '50vh',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <form action='' onSubmit={enviarDatos}>
            <label>Nombre</label>
            <input type="text" placehoder="nombre" name="nombre" onChange={handleChange} value={data.nombre}/>
            <label>Apellido</label>
            <input type="text" placehoder="apellido" name="apellido" onChange={handleChange} value={data.apellido}/>
            <button type="submit">Enviar</button>
        </form>

    </div>
  )
}

export default Form