import LenisProvider from '@/providers/LenisProvider';
import QueryProvider from '@/providers/QueryProvider';
import Footer from '@/shared/public/footer/Footer';
import Navbar from '@/shared/public/navbar/Navbar';
import React from 'react';

const PublicLayout = ({ children }) => {
    return (
        <>
            <QueryProvider>
                <LenisProvider>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </LenisProvider>
            </QueryProvider>
        </>
    );
};

export default PublicLayout;