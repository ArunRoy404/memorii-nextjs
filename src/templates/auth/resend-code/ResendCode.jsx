'use client'

import { useEffect, useState } from "react";
import { useSendOtp } from "@/hooks/auth.hook";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ResendCode = () => {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(0);
    const { mutate: handleSendOtp, isPending } = useSendOtp({
        setAlert: (alert) => {
            if (alert?.type === 'error') {
                toast.error(alert.message);
            }
        }
    });

    useEffect(() => {
        const checkTimer = () => {
            const info = localStorage.getItem("otp_info");
            if (!info) {
                toast.error("Process expired, please try again");
                router.push("/forgot-password");
                return;
            }

            const { sentAt } = JSON.parse(info);
            const now = Date.now();
            const diff = now - sentAt;

            // 10 minutes validation
            if (diff > 10 * 60 * 1000) {
                toast.error("OTP request expired, please start over");
                localStorage.removeItem("otp_info");
                router.push("/forgot-password");
                return;
            }

            // 1 minute countdown
            const remaining = Math.max(0, 60 * 1000 - diff);
            setTimeLeft(Math.ceil(remaining / 1000));
        };

        checkTimer();
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [router]);

    const handleResend = () => {
        const info = localStorage.getItem("otp_info");
        if (info) {
            const { email } = JSON.parse(info);
            handleSendOtp(email, {
                onSuccess: () => {
                    setTimeLeft(60);
                }
            });
        }
    };

    return (
        <div className="flex justify-center pb-6">
            <p className="text-xs md:text-lg font-medium text-gray-600 text-center">
                {`Don’t receive the code? `}
                {timeLeft > 0 ? (
                    <span className="text-muted-foreground ml-1">
                        Resend in {timeLeft}s
                    </span>
                ) : (
                    <span
                        onClick={!isPending ? handleResend : undefined}
                        className={`font-medium text-primary hover:text-primary/60 cursor-pointer ml-1 ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isPending ? "Sending..." : "Click to resend code"}
                    </span>
                )}
            </p>
        </div>
    );
};

export default ResendCode;
