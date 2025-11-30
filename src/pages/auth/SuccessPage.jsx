'use client'

import AuthCard from '@/shared/auth/AuthCard';
import { Button } from '@/components/ui/button';
import TickTeal from '@/components/svg/TickTeal';


const SuccessPage = () => {
    return (
        <AuthCard
            title={'Password updated successfully'}
            subtitle={'Your password has been successfully updated. Please log in first'}
            className={'space-y-7'}
            SetLogo={TickTeal}
        >
            <Button
                className={'w-full  md:mt-10'}
            >
                Login Now
            </Button>
        </AuthCard>
    );
};

export default SuccessPage;