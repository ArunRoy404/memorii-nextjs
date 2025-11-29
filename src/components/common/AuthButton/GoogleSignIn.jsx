import GoogleIcon from '@/components/svg/GoogleIcon';
import { Button } from '@/components/ui/button';
import React from 'react';

const GoogleSignIn = () => {
    return (
        <Button
            notImplemented={true}
            type="button"
            variant="outline"
            className="w-full bg-transparent hover:bg-gray-50"
        >
            <GoogleIcon className={'md:scale-120'} />
            <span className="text-primary-foreground font-semibold">Google</span>
        </Button>
    );
};

export default GoogleSignIn;