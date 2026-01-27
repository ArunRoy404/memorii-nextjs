import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, LogOut, User } from 'lucide-react'
import { signOut } from 'next-auth/react';
import CommonAvatar from '../CommonAvatar/CommonAvatar';
import { useGetProfile } from '@/hooks/user/user.hook';
import { Skeleton } from '@/components/ui/skeleton';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserProfileDropDownContent from './UserProfileDropDownContent';



export default function UserProfileSheet() {
    const { data: profileData, isLoading } = useGetProfile()

    if (isLoading) {
        return (
            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center gap-3 px-2">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex flex-col gap-1">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-3 w-32" />
                    </div>
                </div>
            </div>
        )
    }

    const user = profileData?.user

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="w-full flex items-center justify-between gap-3 px-2 py-2 rounded-lg hover:bg-accent/50 cursor-pointer transition-colors group">
                    <div className="flex items-center gap-2">
                        <CommonAvatar
                            src={user?.profile_photo}
                            fallback={user?.name}
                            alt={user?.name}
                            className="h-9 w-9 border-2 border-primary/20"
                        />
                        <div className="flex flex-col min-w-0">
                            <span className="text-xs font-bold truncate leading-tight">{user?.name}</span>
                            <span className="text-[10px] text-muted-foreground truncate">{user?.email}</span>
                        </div>
                    </div>
                    <User className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 z-101" align="end" side="top">
                <UserProfileDropDownContent user={user} />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
