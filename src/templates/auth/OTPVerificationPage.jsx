'use client'

import { useEffect, useState } from 'react';
import AuthCard from '@/shared/auth/AuthCard';
import { Button } from '@/components/ui/button';

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useVerifyOtp } from '@/hooks/auth.hook';
import CommonAlert from '@/components/common/CommonAlert/CommonAlert';
import ResendCode from './resend-code/ResendCode';

const OTPVerificationPage = () => {
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState(() => {
        if (typeof window !== "undefined") {
            const info = localStorage.getItem("otp_info");
            return info ? JSON.parse(info).email : "";
        }
        return "";
    });
    const [alert, setAlert] = useState(null);
    const router = useRouter();
    const { mutate: handleVerifyOtp, isPending } = useVerifyOtp({ setAlert });

    useEffect(() => {
        const info = localStorage.getItem("otp_info");
        if (!info) {
            router.replace("/forgot-password");
        }
    }, [router]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp.length !== 6) {
            toast.error('OTP must be 6 digits');
            return;
        }
        handleVerifyOtp(otp);
    };

    return (
        <AuthCard
            title={'OTP Verification'}
            subtitle={`Enter the verification code we sent you on: ${email}`}
            className={'space-y-7 px-4 sm:px-6 md:px-12'}
        >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-10">

                <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                    value={otp}
                    onChange={setOtp}
                    autoFocus
                >
                    <InputOTPGroup className="w-full flex justify-between">
                        {[0, 1, 2, 3, 4, 5].map(i => (
                            <InputOTPSlot
                                key={i}
                                index={i}
                                className="w-10 h-12 md:w-14 md:h-16 text-lg md:text-2xl"
                            />
                        ))}
                    </InputOTPGroup>
                </InputOTP>

                {!!alert && <CommonAlert alert={alert} />}

                <Button
                    type="submit"
                    className="w-full text-base md:text-lg py-4"
                    isLoading={isPending}
                >
                    Verify
                </Button>
            </form>

            <ResendCode />
        </AuthCard>
    );
};

export default OTPVerificationPage;


