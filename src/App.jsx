import React, {useState} from 'react';
import './App.css';
import Index from './pages';
import Contacto from './pages/contacto';
import './styles/styles.css'
import Layout from './layout/Layout';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Usuarios from './pages/admin/Usuarios/IndexUsuarios';
import IndexAdmin from './pages/admin/IndexAdmin';
import LayoutAdmin from './layout/LayoutAdmin';
import UsuarioGenerico from './pages/admin/Usuarios/UsuarioGenerico';
import { UserContext } from './context/user';
import { DarkContext } from './context/dark';
import Configuracion from './pages/Configuracion';


function App() {
  const [userData,setUserData]= useState({nombre: "Valeria", suma:0});
  const [dark,setDark]= useState(false)
  return (
    <DarkContext.Provider value={{dark,setDark}}>
      <UserContext.Provider value={{userData,setUserData}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path= '' element={<Index />}/>
              <Route path= 'contacto' element={<Contacto />}/>
              <Route path= 'configuracion' element={<Configuracion />}/>
            </Route>
            <Route path= '/admin' element={<LayoutAdmin/>}> 
              <Route path= '' element={<IndexAdmin />}/>
              <Route path= 'usuarios' element={<Usuarios />}/>
              <Route path= 'usuarios/:nombreusuario' element={<UsuarioGenerico />}/>
            </Route>


          </Routes>

        </BrowserRouter>
      </UserContext.Provider>
    </DarkContext.Provider>
  );
}

export default App;
