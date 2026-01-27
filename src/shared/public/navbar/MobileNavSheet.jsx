import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetFooter,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import NavLinks from './NavLinks';
import Logo from '@/components/common/logo/Logo';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import UserProfileSheet from './UserProfileSheet';



const MobileNavSheet = () => {
    const [open, setOpen] = useState(false);
    const { data: session, status } = useSession()
    const user = session?.user

    return (
        <Sheet open={open} onOpenChange={setOpen} >
            <SheetTrigger asChild className="xl:hidden">
                <Button variant="ghost" className={'p-0! hover:bg-transparent'}>
                    <Menu className='scale-110' />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 z-100 flex flex-col">
                <SheetHeader>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                </SheetHeader>


                <div className="grid flex-1 auto-rows-min gap-6 px-4 py-6">
                    <NavLinks onNavigate={() => setOpen(false)} />
                </div>



                <SheetFooter className="mt-auto border-t pt-4 px-4 pb-4">
                    {status === 'authenticated' ? (
                        <UserProfileSheet />
                    ) : (
                        <Link href="/login" onClick={() => setOpen(false)} className='w-full'>
                            <Button className='w-full' >Login</Button>
                        </Link>
                    )}
                </SheetFooter>

            </SheetContent>
        </Sheet>
    );
};

export default MobileNavSheet;
