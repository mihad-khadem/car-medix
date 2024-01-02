import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;