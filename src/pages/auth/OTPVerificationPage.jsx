'use client'

import AuthCard from '@/shared/auth/AuthCard';
import { Button } from '@/components/ui/button';


import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"


const OTPVerificationPage = () => {

    return (
        <AuthCard
            title={'OTP Verification'}
            subtitle={`Enter the verification code we send you on:Alberts******@gmail.com`}
            className={'space-y-7'}
        >
            <form className="space-y-10">

                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>

                <Button
                    type="submit"
                    className={'w-full'}
                >
                    Register
                </Button>
            </form>


            <div className="flex justify-center pb-6">
                <p className="text-lg font-medium text-gray-600">
                    {`Don’t receive the code? `}
                    <span className="font-medium text-primary hover:text-primary/60">
                        Click to resend code
                    </span>
                </p>
            </div>
        </AuthCard>
    );
};

export default OTPVerificationPage;