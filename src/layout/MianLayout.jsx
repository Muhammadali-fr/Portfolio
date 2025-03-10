import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



// pages 

// assets 

function MainLayout() {

    return (
        <div className="w-full bg-white dark:bg-gray-900">
            <div className="container mx-auto min-h-screen bg-white dark:bg-gray-900">
                <Navbar />
                <Outlet />
                {/* <Toaster /> */}
                <Toaster
                    position="bottom-right"
                    reverseOrder={false}
                />
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;
