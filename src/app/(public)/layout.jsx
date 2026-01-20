import LenisProvider from '@/providers/LenisProvider';
import QueryProvider from '@/providers/QueryProvider';
import Footer from '@/shared/public/footer/Footer';
import Navbar from '@/shared/public/navbar/Navbar';
import React from 'react';
import { prefetchLayoutData } from '@/hooks/prefetch.hook';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/lib/getQueryClient';

const PublicLayout = async ({ children }) => {
    const queryClient = getQueryClient();
    await prefetchLayoutData(queryClient);
    return (
        <>
            <QueryProvider>
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <LenisProvider>
                        <Navbar />
                        <main>
                            {children}
                        </main>
                        <Footer />
                    </LenisProvider>
                </HydrationBoundary>
            </QueryProvider>
        </>
    );
};

export default PublicLayout; 