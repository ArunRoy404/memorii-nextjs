import {
    FileText,
        Send,
        Inbox,
        BookHeart,
        BookOpen
} from 'lucide-react';


const dashboardStatData = [
    {
        label: 'Active e-cards',
        count: '08',
        icon: BookHeart,
        bgColor: 'bg-primary',
    },
    {
        label: 'Active e-memory book',
        count: '08',
        icon: BookOpen,
        bgColor: 'bg-dashboard-primary',
    },
    {
        label: 'Sent',
        count: '08',
        icon: Send,
        bgColor: 'bg-primary',
    },
    {
        label: 'Draft',
        count: '08',
        icon: FileText,
        bgColor: 'bg-orange-400',
    },
    {
        label: 'Receieved',
        count: '08',
        icon: Inbox,
        bgColor: 'bg-blue-400',
    },
];

export default dashboardStatData;
