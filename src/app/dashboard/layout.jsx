import { DashboardSidebar } from '@/components/layout/dashboard/DashboardSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            {children}
        </SidebarProvider>
    );
};

export default layout;