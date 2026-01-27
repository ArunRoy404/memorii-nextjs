'use client'

import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, LogOut, User } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import CommonAvatar from '../CommonAvatar/CommonAvatar'
import { useGetProfile } from '@/hooks/user/user.hook'
import { Skeleton } from '@/components/ui/skeleton'



const UserProfile = () => {
    const { data: profileData, isLoading } = useGetProfile()

    if (isLoading) {
        return <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
    }

    const user = profileData?.user

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className='p-0! outline-none! focus-visible:ring-0! active:scale-100! hover:scale-100!'>
                    <CommonAvatar
                        src={user?.profile_photo}
                        fallback={user?.name}
                        alt={user?.name}
                        className="h-10 w-10 border-2 border-primary/10"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 z-101 p-2" align="end" forceMount>
                <DropdownMenuLabel className="font-normal border-b pb-3 mb-2">
                    <div className="flex items-center gap-3">
                        <CommonAvatar
                            src={user?.profile_photo}
                            fallback={user?.name}
                            alt={user?.name}
                            className="h-10 w-10"
                        />
                        <div className="flex flex-col space-y-0.5 min-w-0">
                            <p className="text-sm font-semibold truncate">{user?.name}</p>
                            <p className="text-xs text-muted-foreground truncate">
                                {user?.email}
                            </p>
                        </div>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="cursor-pointer flex w-full items-center py-2 px-3 rounded-md transition-colors hover:bg-accent group">
                        <LayoutDashboard className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium">Dashboard</span>
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    <Link href="/dashboard/profile" className="cursor-pointer flex w-full items-center py-2 px-3 rounded-md transition-colors hover:bg-accent group">
                        <User className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium">My Profile</span>
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="my-1" />

                <DropdownMenuItem
                    className="cursor-pointer flex w-full items-center py-2 px-3 rounded-md transition-colors hover:bg-destructive/10 text-destructive focus:text-destructive focus:bg-destructive/10 group"
                    onClick={() => signOut()}
                >
                    <LogOut className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold">Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserProfile

