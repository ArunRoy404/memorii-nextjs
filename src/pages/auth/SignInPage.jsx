'use client'

import AuthCard from '@/shared/auth/AuthCard';
import { Button } from '@/components/ui/button';
import GoogleSignIn from '@/components/common/AuthButton/GoogleSignIn';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from '@/components/common/Input/InputForm';
import notImplementedToast from '@/lib/notImplementedToast';
import FormExtra from '@/components/common/Input/FormExtra';
import FormSeparator from '@/components/common/Input/FormSeparator';
import FormFooter from '@/components/common/Input/FormFooter';
import { useRouter } from 'next/navigation';


const formSchema = z.object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(1, "Password is required"),
    remember: z.boolean().optional()
});


const SignInPage = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    });



    const onSubmit = (data) => {
        notImplementedToast()
        router.push('/')
    };



    return (
        <AuthCard title={'Login'} className={'space-y-7'}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-7">

                {/* Email */}
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


                {/* Remember + Forgot */}
                <FormExtra
                    checkboxId="remember"
                    register={register}
                    errors={errors}
                    checkboxLabel="Remember me"
                    linkLabel="Forgot Password?"
                    linkHref="/forgot-password"
                />


                {/* Submit */}
                <Button
                    type="submit"
                    className="w-full"
                >
                    Login
                </Button>

                <FormSeparator>Or</FormSeparator>

                <GoogleSignIn />

                <FormFooter label={`Don't have an account?`} href='/register' >
                    Register
                </FormFooter>
            </form>
        </AuthCard>
    );
};

export default SignInPage;
