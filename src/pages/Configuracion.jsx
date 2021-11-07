import React from 'react'
import {useDark} from '../context/dark'
import { Link } from 'react-router-dom';

const Configuracion = () => {
    const {dark, setDark}= useDark();
    return (
        <div>
            <button onClick={()=>setDark(!dark)}>{dark?"Desactivar":"Activar"} modo oscuro</button>
            <Link to ='/'>Ir a Home</Link>
        </div>
    )
}

export default Configuracion
