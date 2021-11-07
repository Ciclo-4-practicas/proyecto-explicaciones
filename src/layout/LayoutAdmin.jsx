import React from 'react'
import { Outlet } from 'react-router'

const LayoutAdmin = () => {
    return (
        <div>
            <nav>Este es el navbar</nav>
            <Outlet />
            <footer>Este es el Footer</footer>
        </div>
    )
}

export default LayoutAdmin
