import {
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { LayoutDashboard, LogOut, User } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import CommonAvatar from '../CommonAvatar/CommonAvatar'



export default function UserProfileDropDownContent({ user }) {
    return (
        <>
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
                <Link href="/dashboard/my-account" className="cursor-pointer flex w-full items-center py-2 px-3 rounded-md transition-colors hover:bg-accent group">
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
        </>
    )
}