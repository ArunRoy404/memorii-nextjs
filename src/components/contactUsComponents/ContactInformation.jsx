import {
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";

const contactInfo = [
    {
        label: "Email Us",
        value: "support@memorii.com",
        icon: Mail,
    },
    {
        label: "Call Us",
        value: "+1 (555) 123-4567",
        icon: Phone,
    },
    {
        label: "Location",
        value: "123 Memory Lane, Digital City",
        icon: MapPin,
    },
];

const socialLinks = [
    {
        icon: Facebook,
        href: "#",
        hoverColor: "hover:text-teal-500",
    },
    {
        icon: Instagram,
        href: "#",
        hoverColor: "hover:text-pink-500",
    },
    {
        icon: Twitter,
        href: "#",
        hoverColor: "hover:text-blue-400",
    },
];


const ContactInformation = () => {
    return (
        <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

            <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
            </h3>

            {/* Contact Info */}
            <div className="space-y-6">
                {contactInfo.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div key={index} className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                                <Icon size={20} />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">{item.label}</p>
                                <p className="font-semibold text-gray-800">{item.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>



            {/* Socials */}
            <div className="mt-8 flex gap-4">
                {socialLinks.map((social, index) => {
                    const Icon = social.icon;

                    return (
                        <a
                            key={index}
                            href={social.href}
                            className={`p-2 bg-white rounded-full text-gray-600 ${social.hoverColor} shadow-sm transition`}
                        >
                            <Icon size={20} />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default ContactInformation;
