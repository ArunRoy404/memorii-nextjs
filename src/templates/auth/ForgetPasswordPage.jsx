'use client'

import AuthCard from '@/shared/auth/AuthCard';
import { Button } from '@/components/ui/button';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from '@/components/common/Input/InputForm';
import { useSendOtp } from '@/hooks/auth.hook';
import { useState } from 'react';
import CommonAlert from '@/components/common/CommonAlert/CommonAlert';

const formSchema = z.object({
    email: z.string().email("Enter a valid email address"),
});

const ForgetPasswordPage = () => {
    const [alert, setAlert] = useState(null)
    const { mutate: handleSendOtp, isPending } = useSendOtp({ setAlert })

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
        handleSendOtp(data.email)
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

                {!!alert && <CommonAlert alert={alert} />}

                <Button
                    type="submit"
                    className="w-full"
                    isLoading={isPending}
                >
                    Continue
                </Button>
            </form>
        </AuthCard>
    );
};

export default ForgetPasswordPage;