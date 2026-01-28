'use client'

import AuthCard from '@/shared/auth/AuthCard';
import { Button } from '@/components/ui/button';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from '@/components/common/Input/InputForm';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useResetPassword } from '@/hooks/auth.hook';
import CommonAlert from '@/components/common/CommonAlert/CommonAlert';

const formSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

const ResetPasswordPage = () => {
    const router = useRouter();
    const [alert, setAlert] = useState(null);
    const { mutate: handleResetPassword, isPending } = useResetPassword({ setAlert });

    const [email, setEmail] = useState(() => {
        if (typeof window !== "undefined") {
            const info = localStorage.getItem("otp_info");
            return info ? JSON.parse(info).email : "";
        }
        return "";
    });

    useEffect(() => {
        const info = localStorage.getItem("otp_info");
        if (!info) {
            router.replace("/forgot-password");
        }
    }, [router]);

    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data) => {
        handleResetPassword({
            email,
            new_password: data.password,
            new_password_confirmation: data.confirmPassword,
        });
    };

    return (
        <AuthCard
            title={<>Set new <span className='text-[#3AD0E6]'>password</span></>}
            subtitle={'Password must be at least 8 characters'}
            className={'space-y-7'}
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">

                <InputForm
                    id="password"
                    type='password'
                    label="New password"
                    placeholder="Password"
                    register={register}
                    errors={errors}
                />

                <InputForm
                    id="confirmPassword"
                    type='password'
                    label="Confirm password"
                    placeholder="Confirm Password"
                    register={register}
                    errors={errors}
                />

                {!!alert && <CommonAlert alert={alert} />}

                <Button
                    type="submit"
                    className="w-full"
                    isLoading={isPending}
                >
                    Confirm
                </Button>
            </form>
        </AuthCard>
    );
};

export default ResetPasswordPage;