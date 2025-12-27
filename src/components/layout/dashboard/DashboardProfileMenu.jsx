'use client'

import {
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from "@/components/ui/sidebar"
import {
    ChevronRight,
    LayoutDashboard
} from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Link from "next/link";
import { usePathname } from "next/navigation";



const DashboardProfileMenu = () => {
    const pathname = usePathname()
    const { setOpenMobile } = useSidebar()

    const handleLinkClick = () => {
        setOpenMobile(false)
    }

    return (
        <Collapsible
            asChild
            defaultOpen={false}
            className="group/collapsible bg-white rounded-lg"
        >
            <SidebarMenuItem>

                <CollapsibleTrigger asChild className='bg-dashboard-primary data-[state=open]:bg-primary hover:data-[state=open]:bg-primary hover:data-[state=open]:text-white cursor-pointer'>
                    <SidebarMenuButton tooltip="My Account" className='text-white'>
                        <LayoutDashboard />
                        <span>My Account</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                    <SidebarMenuSub>


                        {/* account details  */}
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton
                                onClick={handleLinkClick}
                                asChild className={`${pathname === '/dashboard/my-account' ? 'text-primary' : 'text-dashboard-primary'} hover:text-primary`}>
                                <Link href='/dashboard/my-account'
                                    onClick={handleLinkClick}
                                >
                                    My Account Details
                                </Link>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>


                        {/* account password  */}
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton
                                onClick={handleLinkClick}
                                asChild className={`${pathname === '/dashboard/my-password' ? 'text-primary' : 'text-dashboard-primary'} hover:text-primary`}>
                                <Link href='/dashboard/my-password'
                                    onClick={handleLinkClick}
                                >
                                    Password
                                </Link>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>


                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    );
};

export default DashboardProfileMenu;