import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import Logo from '@/components/common/logo/Logo';

export default function AuthCard({ title, subtitle, children, className }) {
    return (
        <Card
            className="w-full rounded-3xl border-none shadow-[0_20px_40px_-4px_rgba(145,158,171,0.16)] max-w-[750px] bg-[#FDFAF5] my-10 py-24 px-12"
        >

            {/* header  */}
            <CardHeader className="space-y-4 text-5xl text-center pb-2">
                <Logo />
                {
                    !!title && (
                        <CardTitle className='text-3xl text-primary-foreground font-bold'>
                            {title}
                        </CardTitle>
                    )
                }

                {
                    !!subtitle && (
                        <h3 className='text-lg text-subtitle font-medium'>
                            {subtitle}
                        </h3>
                    )
                }
            </CardHeader>

            {/* content  */}
            <CardContent
                className={className}
            >
                {children}
            </CardContent>
        </Card>
    );
}