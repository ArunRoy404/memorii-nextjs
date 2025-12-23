import AvatarUser from '@/components/ui/AvatarUser';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Bell } from 'lucide-react';

const DashboardNavbar = () => {
    return (
        // Changed px-8 to px-4 on mobile, sm:px-8 on larger screens
        <header className="bg-white border-b px-4 sm:px-8 py-4 flex gap-2 items-center">
            <SidebarTrigger />
            <div className='flex justify-between items-center w-full'>
                {/* text-lg on mobile, text-xl on desktop to save space */}
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate mr-2">
                    Dashboard
                </h2>

                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    <div className="flex items-center gap-2">
                        <AvatarUser src="/placeholder.jpg" alt="Esther Howard" />
                        {/* Hidden on small screens, shown on sm (640px) and up */}
                        <span className="hidden sm:block text-sm font-medium whitespace-nowrap">
                            Esther Howard
                        </span>
                    </div>
                    <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
                </div>
            </div>
        </header>
    );
};

export default DashboardNavbar;