'use client'

import DashboardHeader from '@/components/dashboardComponents/DashboardHeader';
import AvatarUser from '@/components/ui/AvatarUser';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const MyAccountPage = () => {
    const [name, setName] = useState('Ratree');
    const [email] = useState('ratree@gmail.com');
    const [isEditing, setIsEditing] = useState(false);

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
                            <AvatarUser className="w-20 h-20" src="/placeholder.jpg" alt={name} />

                            <div className="flex gap-3">
                                <Button variant="outline" notImplemented size="sm" className="flex-1 md:flex-none">Remove photo</Button>
                                <Button variant="outline" notImplemented size="sm" className="flex-1 md:flex-none">Change photo</Button>
                            </div>
                        </div>

                        {/* Name Field */}
                        <div className="mb-6 border-b pb-6">
                            <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                            {/* Flex-col on mobile, flex-row on larger devices */}
                            <div className="flex flex-col md:flex-row gap-3">
                                <Input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="flex-1 h-8"
                                    disabled={!isEditing}
                                />
                                <div className="flex gap-2">
                                    {isEditing ? (
                                        <>
                                            <Button size='sm' variant="outline" className="flex-1 md:flex-none" onClick={() => setIsEditing(false)}>
                                                Cancel
                                            </Button>
                                            <Button notImplemented size='sm' className="flex-1 md:flex-none">
                                                Save
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            variant="outline"
                                            size='sm'
                                            className="w-full md:w-auto"
                                            onClick={() => setIsEditing(true)}
                                        >
                                            Edit
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                            <div className="flex flex-col md:flex-row gap-3">
                                <Input
                                    value={email}
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