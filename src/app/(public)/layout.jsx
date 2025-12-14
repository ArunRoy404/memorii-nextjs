import LenisProvider from '@/providers/LenisProvider';
import Footer from '@/shared/public/footer/Footer';
import Navbar from '@/shared/public/navbar/Navbar';
import React from 'react';

const PublicLayout = ({ children }) => {
    return (
        <>
            <LenisProvider>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </LenisProvider>
        </>
    );
};

export default PublicLayout;