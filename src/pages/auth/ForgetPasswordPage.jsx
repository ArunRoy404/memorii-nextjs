'use client'

import AuthCard from '@/shared/auth/AuthCard';
import { Button } from '@/components/ui/button';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from '@/components/common/Input/InputForm';
import notImplementedToast from '@/lib/notImplementedToast';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
    email: z.string().email("Enter a valid email address"),
});

const ForgetPasswordPage = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (data) => {
        notImplementedToast();
        router.push('/otp-verification')
    };

    return (
        <AuthCard
            title={'Forget Password'}
            subtitle={'No worries, we will send you reset instructions'}
            className={'space-y-7'}
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                <InputForm
                    id="email"
                    type="email"
                    label="Email address"
                    placeholder="Enter your email address"
                    register={register}
                    errors={errors}
                />

                <Button
                    type="submit"
                    className="w-full"
                >
                    Continue
                </Button>
            </form>
        </AuthCard>
    );
};

export default ForgetPasswordPage;
