'use client'


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import CommonAvatar from '../CommonAvatar/CommonAvatar'
import { useGetProfile } from '@/hooks/user/user.hook'
import { Skeleton } from '@/components/ui/skeleton'
import UserProfileDropDownContent from './UserProfileDropDownContent'



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
                <UserProfileDropDownContent user={user} />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserProfile

