import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from '../components/Navbar';



// pages 

// assets 

function MainLayout() {
    return (
        <div className="w-full bg-white dark:bg-gray-900">
            <div className="container mx-auto min-h-screen bg-white dark:bg-gray-900">
                <Navbar />
                <Outlet />
                <Toaster/>
            </div>
        </div>
    );
}

export default MainLayout;
