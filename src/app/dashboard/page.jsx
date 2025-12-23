'use client'

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    CreditCard,
    Book,
    FileText,
    Send,
    Inbox,
    PlusCircle,
    LogOut,
    Bell
} from 'lucide-react';

export default function MemoriiDashboard() {
    const [name, setName] = useState('Ratree');
    const [email] = useState('ratree@gmail.com');
    const [isEditing, setIsEditing] = useState(false);

    const stats = [
        {
            label: 'Active e-cards',
            count: '08',
            icon: CreditCard,
            bgColor: 'bg-teal-100',
            iconColor: 'text-teal-600'
        },
        {
            label: 'Active e-memory book',
            count: '08',
            icon: Book,
            bgColor: 'bg-teal-100',
            iconColor: 'text-teal-600'
        },
        {
            label: 'Sent',
            count: '08',
            icon: Send,
            bgColor: 'bg-red-100',
            iconColor: 'text-red-600'
        },
        {
            label: 'Draft',
            count: '08',
            icon: FileText,
            bgColor: 'bg-yellow-100',
            iconColor: 'text-yellow-600'
        },
        {
            label: 'Receieved',
            count: '08',
            icon: Inbox,
            bgColor: 'bg-blue-100',
            iconColor: 'text-blue-600'
        },
    ];

    const menuItems = [
        { icon: CreditCard, label: 'My Account', active: true, submenu: ['My Account Details', 'Password'] },
        { icon: CreditCard, label: 'Active eCards', active: false },
        { icon: Book, label: 'Active eMemory Books', active: false },
        { icon: FileText, label: 'Drafts', active: false },
        { icon: Send, label: 'Sent', active: false },
        { icon: Inbox, label: 'Received', active: false },
        { icon: PlusCircle, label: 'Create New', active: false },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-48 bg-slate-900 text-white flex flex-col">
                {/* Logo */}
                <div className="p-6">
                    <h1 className="text-2xl font-bold">
                        <span className="text-white">Mem</span>
                        <span className="text-orange-500">o</span>
                        <span className="text-white">rii</span>
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3">
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            <button
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${item.active
                                    ? 'bg-teal-500 text-white'
                                    : 'text-gray-300 hover:bg-slate-800'
                                    }`}
                            >
                                <item.icon className="w-4 h-4" />
                                <span className="text-sm">{item.label}</span>
                            </button>
                            {item.submenu && item.active && (
                                <div className="ml-4 mb-2">
                                    {item.submenu.map((sub, subIndex) => (
                                        <button
                                            key={subIndex}
                                            className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${subIndex === 0
                                                ? 'text-white bg-slate-800'
                                                : 'text-gray-400 hover:text-white hover:bg-slate-800'
                                                }`}
                                        >
                                            {sub}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Sign Out */}
                <div className="p-3">
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 text-red-400 hover:bg-slate-800 rounded-lg transition-colors">
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                {/* Header */}
                <header className="bg-white border-b px-8 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">My Account Details</h2>
                    <div className="flex items-center gap-4">
                        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
                        <div className="flex items-center gap-2">
                            <Avatar className="w-8 h-8">
                                <AvatarImage src="/placeholder.jpg" />
                                <AvatarFallback>EH</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">Esther Howard</span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="p-8">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome back!</h3>
                        <p className="text-gray-600 text-sm">Here's what's happening with your Memorii cards and books</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-5 gap-4 mb-8">
                        {stats.map((stat, index) => (
                            <Card key={index} className="border-0 shadow-sm">
                                <CardContent className="p-6">
                                    <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center mb-3`}>
                                        <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                                    </div>
                                    <p className="text-xs text-gray-600 mb-1">{stat.label}</p>
                                    <p className="text-3xl font-bold text-gray-900">{stat.count}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Profile & Settings */}
                    <Card className="border-0 shadow-sm">
                        <CardContent className="p-8">
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 mb-1">Profile & Settings</h4>
                                <p className="text-sm text-gray-600">Manage your account information and preferences.</p>
                            </div>

                            <div className="border-t pt-6">
                                <h5 className="font-semibold text-gray-900 mb-6">Profile Photo</h5>

                                <div className="flex items-center gap-4 mb-8">
                                    <Avatar className="w-20 h-20">
                                        <AvatarImage src="/placeholder.jpg" />
                                        <AvatarFallback className="bg-amber-100 text-amber-900 text-2xl">R</AvatarFallback>
                                    </Avatar>
                                    <div className="flex gap-3">
                                        <Button variant="outline" size="sm">Remove photo</Button>
                                        <Button variant="outline" size="sm">Change photo</Button>
                                    </div>
                                </div>

                                {/* Name Field */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                                    <div className="flex gap-3">
                                        <Input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="flex-1"
                                            disabled={!isEditing}
                                        />
                                        {isEditing ? (
                                            <>
                                                <Button variant="outline" onClick={() => setIsEditing(false)}>
                                                    Cancel
                                                </Button>
                                                <Button className="bg-teal-500 hover:bg-teal-600">
                                                    Save
                                                </Button>
                                            </>
                                        ) : (
                                            <Button
                                                variant="outline"
                                                onClick={() => setIsEditing(true)}
                                            >
                                                Edit
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                                    <div className="flex gap-3">
                                        <Input
                                            value={email}
                                            className="flex-1"
                                            disabled
                                        />
                                        <Button variant="outline">Edit</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Footer */}
                    <div className="text-center mt-8">
                        <p className="text-xs text-gray-500">Copyright @ Memorii 2026. All Rights Reserved.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}