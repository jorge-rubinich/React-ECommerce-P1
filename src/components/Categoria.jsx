import React from 'react'
import {Link } from 'react-router-dom'

const Categoria = ({catName}) => {
    return (
      <Link to={"/categoria/"+catName}>
            <p className="catButtonName">{catName}</p>
      </Link>
  )
}

export default Categoria
