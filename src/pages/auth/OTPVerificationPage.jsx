'use client'

import { useState } from 'react';
import AuthCard from '@/shared/auth/AuthCard';
import { Button } from '@/components/ui/button';

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import notImplementedToast from '@/lib/notImplementedToast';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const OTPVerificationPage = () => {
    const [otp, setOtp] = useState("");
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp.length !== 6) {
            toast.error('OTP must be 6 digits');
            return;
        }
        notImplementedToast();
        router.push('/reset-password');
    };

    return (
        <AuthCard
            title={'OTP Verification'}
            subtitle={`Enter the verification code we sent you on: Alberts******@gmail.com`}
            className={'space-y-7 px-4 sm:px-6 md:px-12'}
        >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-10">

                <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                    value={otp}
                    onChange={setOtp}
                >
                    <InputOTPGroup>
                        {[0, 1, 2, 3, 4, 5].map(i => (
                            <InputOTPSlot key={i} index={i} />
                        ))}
                    </InputOTPGroup>
                </InputOTP>

                <Button
                    type="submit"
                    className="w-full text-base md:text-lg py-4"
                >
                    Verify
                </Button>
            </form>

            <div className="flex justify-center pb-6">
                <p className="text-xs md:text-lg font-medium text-gray-600 text-center">
                    {`Don’t receive the code? `}
                    <span
                        onClick={notImplementedToast}
                        className="font-medium text-primary hover:text-primary/60 cursor-pointer ml-1"
                    >
                        Click to resend code
                    </span>
                </p>
            </div>
        </AuthCard>
    );
};

export default OTPVerificationPage;
