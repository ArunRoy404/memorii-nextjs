import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, LogOut, User } from 'lucide-react'
import { signOut } from 'next-auth/react';
import CommonAvatar from '../CommonAvatar/CommonAvatar';
import { useGetProfile } from '@/hooks/user/user.hook';
import { Skeleton } from '@/components/ui/skeleton';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



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
        <Dialog>
            <DialogTrigger asChild>
                <div className="w-full flex items-center justify-between gap-4 px-2 py-3 rounded-xl hover:bg-accent/50 cursor-pointer transition-colors group">
                    <div className="flex items-center gap-3">
                        <CommonAvatar
                            src={user?.profile_photo}
                            fallback={user?.name}
                            alt={user?.name}
                            className="h-10 w-10 border-2 border-primary/20"
                        />
                        <div className="flex flex-col min-w-0">
                            <span className="text-sm font-bold truncate leading-tight">{user?.name}</span>
                            <span className="text-xs text-muted-foreground truncate">{user?.email}</span>
                        </div>
                    </div>
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-accent/50 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <User className="h-4 w-4" />
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[320px] rounded-2xl p-6">
                <DialogHeader className="mb-4">
                    <DialogTitle className="text-left flex items-center gap-3">
                        <CommonAvatar
                            src={user?.profile_photo}
                            fallback={user?.name}
                            alt={user?.name}
                            className="h-10 w-10"
                        />
                        <div className="flex flex-col">
                            <span className="text-sm font-bold">{user?.name}</span>
                            <span className="text-xs font-normal text-muted-foreground">{user?.email}</span>
                        </div>
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-3">
                    <Link href="/dashboard" className="w-full">
                        <Button variant="outline" className="w-full justify-start gap-3 h-12 px-4 border-primary/10 hover:bg-primary/5 hover:text-primary transition-all">
                            <LayoutDashboard className="h-4 w-4" />
                            <span className="font-semibold">Dashboard</span>
                        </Button>
                    </Link>

                    <Link href="/dashboard/profile" className="w-full">
                        <Button variant="outline" className="w-full justify-start gap-3 h-12 px-4 border-primary/10 hover:bg-primary/5 hover:text-primary transition-all">
                            <User className="h-4 w-4" />
                            <span className="font-semibold">Profile Settings</span>
                        </Button>
                    </Link>

                    <div className="pt-2 mt-2 border-t">
                        <Button
                            variant="ghost"
                            className="w-full justify-start gap-3 h-12 px-4 text-destructive hover:text-destructive hover:bg-destructive/10 transition-all"
                            onClick={() => signOut()}
                        >
                            <LogOut className="h-4 w-4" />
                            <span className="font-bold">Logout</span>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

