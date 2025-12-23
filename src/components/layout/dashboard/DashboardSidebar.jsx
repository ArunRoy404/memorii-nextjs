"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import {
    LogOut,
} from 'lucide-react';
import Logo from "@/components/common/logo/Logo";
import Link from "next/link";
import DashboardProfileMenu from "./DashboardProfileMenu";
import dashboardMenuItems from "@/data/dashboardMenuItems";



export function DashboardSidebar(props) {
    return (
        <Sidebar collapsible="icon" {...props} className={'z-100'}>
            <SidebarHeader
                className='bg-dashboard-primary'
            >
                <SidebarMenu>
                    <SidebarMenuButton
                        size="lg"
                        className="hover:bg-dashboard-primary active:bg-dashboard-primary"
                    >
                        <div className="bg-white text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                            <span className="text-[#08A2A6] font-bold">M</span>
                        </div>
                        <Logo className="text-2xl" noAction />
                    </SidebarMenuButton>
                </SidebarMenu>
            </SidebarHeader>



            <SidebarContent
                className='bg-dashboard-primary'
            >
                <SidebarGroup>
                    <SidebarGroupLabel>Platform</SidebarGroupLabel>
                    <SidebarMenu>

                        {/* profile option  */}
                        <DashboardProfileMenu />


                        {/* navigation  */}
                        {
                            dashboardMenuItems?.map(menu => (
                                <Link href={menu?.link} key={menu?.label}>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton tooltip={menu?.label} className="text-white cursor-pointer">
                                            {menu?.icon && <menu.icon />}
                                            {menu?.label}
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </Link>
                            ))
                        }
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>




            <SidebarFooter
                className='bg-dashboard-primary'
            >
                {/* logout  */}
                <SidebarMenuItem>
                    <SidebarMenuButton tooltip='Logout' className="cursor-pointer text-red-500 hover:text-red-500">
                        <LogOut />
                        Logout
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}