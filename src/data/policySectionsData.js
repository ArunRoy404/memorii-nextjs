const { EyeOff, Lock, UserCheck, FileText } = require("lucide-react");

const policySections = [
    {
        id: "item-1",
        title: "1. Information We Collect",
        icon: <FileText className="w-5 h-5 text-white" />,
        content: "We collect information you provide directly to us when you create an account, such as your name, email address, and profile photo. When you contribute to a Memory Book, we store the messages, photos, and videos you upload to ensure they are delivered to the recipient."
    },
    {
        id: "item-2",
        title: "2. How We Use Your Data",
        icon: <UserCheck className="w-5 h-5 text-white" />,
        content: "Your data is used specifically to provide our service: displaying your greetings in e-cards, notifying you of contributions, and improving our template designs. We do not sell your personal data to third parties for marketing purposes."
    },
    {
        id: "item-3",
        title: "3. Data Security",
        icon: <Lock className="w-5 h-5 text-white" />,
        content: "We implement industry-standard encryption to protect your photos and messages. Access to group e-cards is restricted via unique URLs, and premium users can add password protection to their Memory Books."
    },
    {
        id: "item-4",
        title: "4. Your Rights & Choices",
        icon: <EyeOff className="w-5 h-5 text-white" />,
        content: "You have the right to access, update, or delete your personal information at any time. If you wish to remove a contribution from a Memory Book you've signed, you can do so through your dashboard or by contacting support."
    }
];

const lastUpdated = "October 24, 2025";



export default policySections;
export { lastUpdated };