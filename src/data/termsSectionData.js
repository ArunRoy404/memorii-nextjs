import { AlertCircle, CreditCard, FileText, Gavel, UserPlus } from "lucide-react";

const termsValidTo = "December 24, 2025";

const termSections = [
    {
        id: "term-1",
        title: "1. Acceptance of Terms",
        icon: <UserPlus className="w-5 h-5 text-white" />,
        content: "By accessing or using Memorii, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to all of these terms, do not use our services. We reserve the right to update these terms at any time."
    },
    {
        id: "term-2",
        title: "2. User Conduct & Content",
        icon: <FileText className="w-5 h-5 text-white" />,
        content: "You are solely responsible for the content (photos, messages, videos) you upload. You agree not to upload any content that is defamatory, obscene, infringing on intellectual property rights, or otherwise unlawful. Memorii reserves the right to remove content that violates these standards."
    },
    {
        id: "term-3",
        title: "3. Payments & Refunds",
        icon: <CreditCard className="w-5 h-5 text-white" />,
        content: "Premium templates and Memory Books are subject to one-time fees. All sales are final; however, if you experience technical issues that prevent the delivery of your digital product, please contact support within 7 days for a resolution."
    },
    {
        id: "term-4",
        title: "4. Intellectual Property",
        icon: <Gavel className="w-5 h-5 text-white" />,
        content: "The Memorii platform, including its logo, design, and software, is the property of Memorii Inc. Users retain ownership of their personal content but grant Memorii a limited license to host and display that content as part of the requested service."
    },
    {
        id: "term-5",
        title: "5. Limitation of Liability",
        icon: <AlertCircle className="w-5 h-5 text-white" />,
        content: "Memorii provides its services 'as is.' We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform or the loss of any digital content stored on our servers."
    }
];

export default termSections
export { termsValidTo }