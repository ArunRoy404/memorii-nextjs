import { DashboardSidebar } from '@/components/layout/dashboard/DashboardSidebar';
import AvatarUser from '@/components/ui/AvatarUser';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import footerData from '@/data/footerData';
import { Bell } from 'lucide-react';
import React from 'react';

const layout = ({ children }) => {
    return (
        <SidebarProvider>
            <DashboardSidebar />

            <SidebarInset>
                <main
                    className='flex flex-col min-h-screen overflow-hidden'
                >
                    <header className="bg-white border-b px-8 py-4 flex gap-2 items-center">
                        <SidebarTrigger />
                        <div
                            className='flex justify-between items-center w-full'
                        >
                            <h2 className="text-xl font-semibold text-gray-900">My Account Details</h2>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <AvatarUser src="/placeholder.jpg" alt="Esther Howard" />
                                    <span className="text-sm font-medium">Esther Howard</span>
                                </div>
                                <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
                            </div>
                        </div>
                    </header>



                    <div
                        className='flex-1 overflow-y-auto bg-dashboard-secondary'
                    >
                        <div className='flex flex-col justify-between h-full p-8'>
                            {children}

                            {/* Footer */}
                            <div className="text-center pt-6">
                                <p className="text-xs text-gray-500">{footerData.copyright}</p>
                            </div>
                        </div>
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default layout;