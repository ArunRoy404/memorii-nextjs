import Link from 'next/link';
import React from 'react';

const FormFooter = ({ children, href = '/', label }) => {
    return (
        <div className="flex justify-center pb-6">
            <p className="text-lg font-medium text-gray-600">
                {label}
                <Link href={href} className="font-medium text-primary hover:text-primary/60">
                    {" "}{children}
                </Link>
            </p>
        </div>
    );
};

export default FormFooter;