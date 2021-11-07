import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/sidebar'

const Layout = ({children}) => {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Layout
