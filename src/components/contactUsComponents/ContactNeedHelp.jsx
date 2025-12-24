import Link from 'next/link';

const ContactNeedHelp = () => {
    return (
        <div className="bg-linear-to-br from-primary/20 to-white p-6 rounded-3xl border border-teal-100 text-center">
            <h4 className="font-bold text-gray-800 mb-2">Check our FAQs</h4>
            <p className="text-sm text-gray-500 mb-4">Find answers instantly in our help center.</p>
            <Link href='/faq' className="text-teal-600 font-semibold text-sm hover:underline">FAQ &rarr;</Link>
        </div>
    );
};

export default ContactNeedHelp;