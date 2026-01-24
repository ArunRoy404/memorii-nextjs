import {
    Mail,
    MapPin,
    Phone,
} from "lucide-react";


const ContactInformation = ({ data }) => {

    
    const contactInfo = [
        {
            label: "Email Us",
            value: data?.email,
            icon: Mail,
        },
        {
            label: "Call Us",
            value: data?.phone,
            icon: Phone,
        },
        {
            label: "Location",
            value: data?.loaction,
            icon: MapPin,
        },
    ];



    return (
        <div className="bg-blue-50/50 p-6 md:p-8 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden">
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
                            <div className="p-2 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
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
        </div>
    );
};

export default ContactInformation;
