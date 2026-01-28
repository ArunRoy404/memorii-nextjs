'use client'

import { SidebarMenuButton } from "@/components/ui/sidebar";
import { LogOut } from "lucide-react";
import { useLogout } from "@/hooks/auth.hook";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

export default function DashboardLogoutButton() {
    const { mutateAsync: handleLogout, isPending } = useLogout();
    const onLogout = () => {
        const logoutPromise = handleLogout();

        toast.promise(logoutPromise, {
            loading: 'Logging out...',
            success: 'Logged out successfully!',
            error: (err) => err?.message || 'Failed to log out',
        });
    }



    return (
        <SidebarMenuButton onClick={onLogout} disabled={isPending} tooltip='Logout' className="cursor-pointer text-red-500 hover:text-red-500">
            {isPending ? <Spinner /> : <LogOut />}
            Logout
        </SidebarMenuButton>
    )
}