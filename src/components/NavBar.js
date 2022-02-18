import React from 'react'
import '../estilos/mis_estilos.css';
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
    <div className="mi_body">
      <div class="mi_header">
        <h2 className="nombre">LIBRERÍA EL ROMANO</h2>
        <nav class="nav">
            <CartWidget></CartWidget>
            <ul className="nav-menu">
                
                <li class="nav-menu-item">
                    <a href="#" className="nav-menu-link">Libros</a>
                </li>
                <li className="nav-menu-item">
                    <a href="#" class="nav-menu-link">Cómic y Manga</a>
                </li>
                <li className="nav-menu-item">
                    <a href="#" className="nav-menu-link">Más leídos</a>
                </li>
                <li class="nav-menu-item">
                    <a href="#" className="nav-menu-link">Novedades</a>
                </li>
            </ul>
        </nav>
      </div>
    </div>
    </>
  )
}

export default NavBar