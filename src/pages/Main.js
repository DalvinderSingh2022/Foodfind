import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { AppContext } from '../App';

const Layout = () => {
    const animate = useContext(AppContext);
    animate();

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;