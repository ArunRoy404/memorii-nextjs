'use client'

import dashboardMenuItems from '@/data/dashboardMenuItems';
import Link from 'next/link';
import React from 'react';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import DashboardProfileMenu from '../layout/dashboard/DashboardProfileMenu';
import { usePathname } from 'next/navigation';



const DashboardNavigation = () => {
    const pathname = usePathname()

    return (
        <SidebarMenu>

            {/* profile option  */}
            <DashboardProfileMenu />


            {/* navigation  */}
            {
                dashboardMenuItems?.map(menu => (
                    <Link href={menu?.link} key={menu?.label}>
                        <SidebarMenuItem
                            className={`${pathname === menu?.link ? 'bg-primary' : ''} rounded-md`}
                        >
                            <SidebarMenuButton tooltip={menu?.label} className="text-white cursor-pointer">
                                {menu?.icon && <menu.icon />}
                                {menu?.label}
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </Link>
                ))
            }
        </SidebarMenu>
    );
};

export default DashboardNavigation;