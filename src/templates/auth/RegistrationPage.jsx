'use client'

import AuthCard from '@/shared/auth/AuthCard';
import { Button } from '@/components/ui/button';
import GoogleSignIn from '@/components/common/AuthButton/GoogleSignIn';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from '@/components/common/Input/InputForm';
import FormSeparator from '@/components/common/Input/FormSeparator';
import FormFooter from '@/components/common/Input/FormFooter';
import { useSignUp } from '@/hooks/auth.hook';
import { useState } from 'react';
import CommonAlert from '@/components/common/CommonAlert/CommonAlert';

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

const RegistrationPage = () => {
    const [alert, setAlert] = useState(null);
    const { handleSignUp, isPending } = useSignUp({ setAlert });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    return (
        <AuthCard title={'Registration'} className={'space-y-7'}>
            <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4 md:space-y-7">

                <InputForm
                    id="name"
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                    register={register}
                    errors={errors}
                />

                <InputForm
                    id="email"
                    type="email"
                    label="Email address"
                    placeholder="Enter your email address"
                    register={register}
                    errors={errors}
                />

                <InputForm
                    id="password"
                    type="password"
                    label="Enter your password"
                    placeholder="Password"
                    register={register}
                    errors={errors}
                />

                <InputForm
                    id="confirmPassword"
                    type="password"
                    label="Confirm your password"
                    placeholder="Confirm Password"
                    register={register}
                    errors={errors}
                />

                {!!alert && <CommonAlert alert={alert} />}

                {/* Submit */}
                <Button
                    type="submit"
                    className="w-full"
                    isLoading={isPending}
                >
                    Register
                </Button>

                <FormSeparator>Or</FormSeparator>

                <GoogleSignIn />

                <FormFooter label={`Already have an account?`} href='/login'>
                    Log in
                </FormFooter>
            </form>
        </AuthCard>
    );
};

export default RegistrationPage;
