'use client'

import DashboardHeader from '@/components/dashboardComponents/DashboardHeader';
import AvatarUser from '@/components/ui/AvatarUser';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useEffect, useRef, useState } from 'react';
import { useGetProfile, useRemoveProfilePhoto, useUpdateProfileInfo, useUpdateProfilePhoto } from '@/hooks/user/user.hook';
import { useForm } from 'react-hook-form';

const MyAccountPage = () => {
    const { data } = useGetProfile()
    const profileData = data?.user
    const [isEditing, setIsEditing] = useState(false);
    const fileInputRef = useRef(null);

    const { mutate: updateProfile, isPending: isUpdatingProfile } = useUpdateProfileInfo();
    const { mutate: removePhoto, isPending: isRemovingPhoto } = useRemoveProfilePhoto();
    const { mutate: updatePhoto, isPending: isUpdatingPhoto } = useUpdateProfilePhoto();

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: profileData?.name || '',
            email: profileData?.email || '',
        }
    });

    useEffect(() => {
        if (profileData) {
            reset({
                name: profileData.name,
                email: profileData.email,
            });
        }
    }, [profileData, reset]);

    const onNameSubmit = (data) => {
        updateProfile({ name: data.name }, {
            onSuccess: () => setIsEditing(false)
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            updatePhoto(file);
        }
    };

    const handleRemovePhoto = () => {
        removePhoto();
    }

    const handleChangePhotoClick = () => {
        fileInputRef.current?.click();
    };


    return (
        <section>
            <DashboardHeader
                title="My Account"
                description="Manage your account information and preferences."
            />

            <Card className="border-0 shadow-sm">
                {/* Adjusting padding for smaller screens */}
                <CardContent className="p-4 md:p-8">
                    <div>
                        <h5 className="font-semibold text-gray-900 mb-6">Profile Photo</h5>

                        {/* Stacks on mobile (flex-col), stays row on larger devices (md:flex-row) */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b pb-6">
                            <AvatarUser className="w-20 h-20" src={profileData?.profile_photo} alt={profileData?.name || ''} />

                            <div className="flex gap-3">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex-1 md:flex-none"
                                    onClick={handleRemovePhoto}
                                    isLoading={isRemovingPhoto}
                                >
                                    Remove photo
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex-1 md:flex-none"
                                    onClick={handleChangePhotoClick}
                                    isLoading={isUpdatingPhoto}
                                >
                                    Change photo
                                </Button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>

                        {/* Name Field */}
                        <form onSubmit={handleSubmit(onNameSubmit)} className="mb-6 border-b pb-6">
                            <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                            {/* Flex-col on mobile, flex-row on larger devices */}
                            <div className="flex flex-col md:flex-row gap-3">
                                <Input
                                    {...register("name")}
                                    className="flex-1 h-8"
                                    disabled={!isEditing}
                                />
                                <div className="flex gap-2">
                                    {isEditing ? (
                                        <>
                                            <Button
                                                size='sm'
                                                type="button"
                                                variant="outline"
                                                className="flex-1 md:flex-none"
                                                onClick={() => {
                                                    setIsEditing(false);
                                                    reset({ name: profileData?.name });
                                                }}
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                size='sm'
                                                type="submit"
                                                className="flex-1 md:flex-none"
                                                isLoading={isUpdatingProfile}
                                            >
                                                Save
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            variant="outline"
                                            size='sm'
                                            type="button"
                                            className="w-full md:w-auto"
                                            onClick={() => setIsEditing(true)}
                                        >
                                            Edit
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </form>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                            <div className="flex flex-col md:flex-row gap-3">
                                <Input
                                    {...register("email")}
                                    className="flex-1 h-8"
                                    disabled
                                />
                                <Button notImplemented size='sm' variant="outline" className="w-full md:w-auto">Edit</Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default MyAccountPage;