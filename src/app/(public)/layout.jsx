import Footer from '@/shared/public/footer/Footer';
import Navbar from '@/shared/public/navbar/Navbar';
import React from 'react';

const PublicLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default PublicLayout;