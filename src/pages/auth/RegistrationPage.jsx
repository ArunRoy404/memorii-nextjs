'use client'

import AuthCard from '@/shared/auth/AuthCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import GoogleSignIn from '@/components/common/AuthButton/GoogleSignIn';


const RegistrationPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <AuthCard
            title={'Registration'}
            className={'space-y-7'}
        >
            <form className="space-y-7">
                <div className="space-y-6">
                    <Label htmlFor="name" className="text-lg font-bold text-primary-foreground">
                        Name
                    </Label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="bg-transparent text-lg py-6 border-border placeholder:text-placeholder"
                        required
                    />
                </div>


                <div className="space-y-6">
                    <Label htmlFor="email" className="text-lg font-bold text-primary-foreground">
                        Email address
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-transparent text-lg py-6 border-border placeholder:text-placeholder"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password" className="text-lg font-bold text-primary-foreground">
                        Enter your password
                    </Label>
                    <div className="relative">
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder="Password"
                            className="bg-transparent text-lg py-6 border-border placeholder:text-placeholder"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(p => !p)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-lg font-bold text-primary-foreground">
                        Confirm your password
                    </Label>
                    <div className="relative">
                        <Input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            placeholder="Password"
                            className="bg-transparent text-lg py-6 border-border placeholder:text-placeholder"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(p => !p)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <Button
                    type="submit"
                    className={'w-full'}
                >
                    Register
                </Button>
            </form>

            <div className="flex items-center gap-2">
                <Separator className="flex-1" />
                <span className="text-xs uppercase text-gray-500 px-2">Or</span>
                <Separator className="flex-1" />
            </div>

            <GoogleSignIn />

            <div className="flex justify-center pb-6">
                <p className="text-lg font-medium text-gray-600">
                    {`Already have an account? `}
                    <Link href="/" className="font-medium text-primary hover:text-primary/60">
                        Log in
                    </Link>
                </p>
            </div>
        </AuthCard>
    );
};

export default RegistrationPage;