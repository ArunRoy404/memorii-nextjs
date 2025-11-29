'use client'

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const InputForm = ({ id, type, label, placeholder, classNameInput, errors, register, classNameLabel }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="space-y-2">
            {!!label && (
                <Label
                    htmlFor={id}
                    className={cn(
                        "text-sm sm:text-lg md:text-lg font-bold text-primary-foreground",
                        classNameLabel
                    )}
                >
                    {label}
                </Label>
            )}

            <div className="relative">
                <Input
                    id={id}
                    type={showPassword ? "text" : type}
                    placeholder={placeholder}
                    className={cn(
                        "bg-transparent placeholder:text-sm text-sm sm:text-lg md:text-lg py-4 sm:py-5 md:py-6 border border-border placeholder:text-placeholder w-full",
                        classNameInput,
                        errors[id] ? "border-red-500" : ""
                    )}
                    {...register(id)}
                />

                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((p) => !p)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}

                {!!errors[id] && (
                    <p className="absolute text-red-500 text-[10px] ">
                        {errors[id]?.message}
                    </p>
                )}
            </div>
        </div>

    );
};

export default InputForm;