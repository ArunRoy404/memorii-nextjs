import DashboardNavbar from '@/components/layout/dashboard/DashboardNavbar';
import { DashboardSidebar } from '@/components/layout/dashboard/DashboardSidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import footerData from '@/data/footerData';
import React from 'react';

const layout = ({ children }) => {
    return (
        <SidebarProvider>
            <DashboardSidebar />

            <SidebarInset>
                <main
                    className='flex flex-col min-h-screen max-h-screen overflow-hidden'
                >
                    <DashboardNavbar />

                    <div
                        className='flex-1 overflow-y-auto bg-dashboard-secondary'
                    >
                        <div className='flex flex-col justify-between h-full p-4 md:p-8'>
                            {children}

                            {/* Footer */}
                            <div className="text-center py-6">
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