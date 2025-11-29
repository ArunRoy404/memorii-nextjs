import { Separator } from '@/components/ui/separator';
import React from 'react';

const FormSeparator = ({ children }) => {
    return (
        <div className="flex items-center gap-2">
            <Separator className="flex-1" />
            <span className="text-xs uppercase text-gray-500 px-2">{children}</span>
            <Separator className="flex-1" />
        </div>
    );
};

export default FormSeparator;