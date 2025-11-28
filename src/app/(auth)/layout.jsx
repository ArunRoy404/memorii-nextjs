import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <>
            <main
                className='bg-secondary min-h-screen flex items-center justify-center px-4'
            >
                {children}
            </main>
        </>
    );
};

export default AuthLayout;   