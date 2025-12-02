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


const MobileNavSheet = () => {
    return (
        <Sheet>
            <SheetTrigger asChild className="xl:hidden">
                <Button variant="ghost" className={'p-0! hover:bg-transparent'}>
                    <Menu className='scale-110' />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
                <SheetHeader>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                </SheetHeader>


                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <NavLinks />
                </div>



                <SheetFooter>
                    <Link href="/login">
                        <Button className='w-full' >Login</Button>
                    </Link>
                    <Link href="/get-started">
                        <Button variant="outline" className='w-full'>Get Started</Button>
                    </Link>
                </SheetFooter>

            </SheetContent>
        </Sheet>
    );
};

export default MobileNavSheet;