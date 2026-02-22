import {
    FileText,
    Send,
    Inbox,
    BookHeart,
    BookOpen
} from 'lucide-react';


const dashboardStatData = [
    {
        key: "Active e-card",
        label: 'Active e-card',
        icon: BookHeart,
        bgColor: 'bg-primary',
    },
    {
        key: "Active memory book",
        label: 'Active memory book',
        icon: BookOpen,
        bgColor: 'bg-dashboard-primary',
    },
    {
        key: "Sent",
        label: 'Sent',
        icon: Send,
        bgColor: 'bg-primary',
    },
    {
        key: "Drafts",
        label: 'Drafts',
        icon: FileText,
        bgColor: 'bg-orange-400',
    },
    {
        key: "Received",
        label: 'Received',
        icon: Inbox,
        bgColor: 'bg-blue-400',
    },
];

export default dashboardStatData;
