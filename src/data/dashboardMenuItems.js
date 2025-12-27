import {
    FileText,
    Send,
    Inbox,
    PlusCircle,
    BookHeart,
    BookOpen,
    Home,
} from 'lucide-react';

const dashboardMenuItems = [
    // { icon: CreditCard, label: 'My Account', active: true, submenu: ['My Account Details', 'Password'] },
    { icon: Home, label: 'Home', link: '/dashboard' },
    { icon: BookHeart, label: 'Active eCards', link: '/dashboard/active-e-cards' },
    { icon: BookOpen, label: 'Active eMemory Books', link: '/dashboard/active-e-memory-books' },
    { icon: FileText, label: 'Drafts', link: '/dashboard/drafts' },
    { icon: Send, label: 'Sent', link: '/dashboard/sent' },
    { icon: Inbox, label: 'Received', link: '/dashboard/received' },
    { icon: PlusCircle, label: 'Create New', link: '/templates' },
];
export default dashboardMenuItems;
