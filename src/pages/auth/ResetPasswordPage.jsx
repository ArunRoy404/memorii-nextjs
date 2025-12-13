'use client'

import AuthCard from '@/shared/auth/AuthCard';
import { Button } from '@/components/ui/button';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from '@/components/common/Input/InputForm';
import notImplementedToast from '@/lib/notImplementedToast';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

const ResetPasswordPage = () => {
    const router = useRouter();

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
        notImplementedToast();
        router.push('/');
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

                <Button
                    type="submit"
                    className="w-full"
                >
                    Confirm
                </Button>
            </form>
        </AuthCard>
    );
};

export default ResetPasswordPage;