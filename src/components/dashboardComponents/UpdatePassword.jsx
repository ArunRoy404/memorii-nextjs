'use client'

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import InputForm from '@/components/common/Input/InputForm';
import notImplementedToast from '@/lib/notImplementedToast';

// 1. Define the validation schema
const passwordSchema = z.object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(8, "New password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your new password"),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // sets the error to the confirmPassword field
});

const UpdatePassword = () => {
    // 2. Initialize the form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    // 3. Handle submission
    const onSubmit = (data) => {
        console.log("Password Data:", data);
        notImplementedToast();
        reset(); // Clear form after success
    };

    return (
        <Card className="border-0 shadow-sm mb-6">
            <CardContent className="p-4 md:p-8">
                <h5 className="font-semibold text-gray-900 mb-6">Change Password</h5>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Current Password */}
                    <InputForm
                        classNameLabel="text-sm! font-medium! text-gray-700!"
                        id="currentPassword"
                        type="password"
                        label="Current Password"
                        placeholder="Enter current password"
                        register={register}
                        errors={errors}
                    />

                    {/* New Password */}
                    <InputForm
                        classNameLabel="text-sm! font-medium! text-gray-700!"
                        id="newPassword"
                        type="password"
                        label="New Password"
                        placeholder="Enter new password"
                        register={register}
                        errors={errors}
                    />

                    {/* Confirm Password */}
                    <InputForm
                        classNameLabel="text-sm! font-medium! text-gray-700!"
                        id="confirmPassword"
                        type="password"
                        label="Confirm New Password"
                        placeholder="Confirm new password"
                        register={register}
                        errors={errors}
                    />

                    <div className="pt-2">
                        <Button type="submit" className="w-full md:w-auto">
                            Update Password
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default UpdatePassword;