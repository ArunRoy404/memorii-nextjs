'use client'

import AuthCard from '@/shared/auth/AuthCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';


const ResetPasswordPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <AuthCard
            title={<>Set new <span className='text-[#3AD0E6]'>password</span></>}
            subtitle={'Password must be at least 8 character '}
            className={'space-y-7'}
        >
            <form className="space-y-7">
                <div className="space-y-2">
                    <Label htmlFor="password" className="text-lg font-bold text-primary-foreground">
                        New password
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
                        Confirm password
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
                    Confirm
                </Button>
            </form>
        </AuthCard>
    );
};

export default ResetPasswordPage;