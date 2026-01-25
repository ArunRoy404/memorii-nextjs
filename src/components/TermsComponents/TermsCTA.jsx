import { Button } from "@/components/ui/button"
import { useGetCTA } from "@/hooks/cms.hook";
import Link from "next/link";

const TermsCTA = () => {
    const { data: cta } = useGetCTA()
    const homeCTA = cta?.find(cta => cta?.section === 'privacy_policy')

    return (
        <section className="bg-gray-900 py-12 md:py-16 px-6 text-center text-white">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{homeCTA?.title}</h2>
                <p className="opacity-70 mb-8 text-sm md:text-base">{homeCTA?.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href='/contact'
                    >
                        <Button
                            className="rounded-full bg-teal-500 hover:bg-teal-600 text-white font-bold px-10 py-6 h-auto text-base transition-all"
                        >
                            Contact Support
                        </Button>
                    </Link>
                    <Link
                        href='/'
                    >
                        <Button
                            variant="outline"
                            className="rounded-full border-gray-700 hover:text-white hover:bg-gray-800 px-10 py-6 h-auto text-base transition-all"
                        >
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </section >
    );
};

export default TermsCTA;