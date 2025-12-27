import {
    ArrowRight
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link';


const PrivacyCTA = () => {
    return (
        <section className="bg-primary py-12 md:py-16 px-6 text-center text-white">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Your memories are safe.</h2>
                <p className="opacity-90 mb-8 text-sm md:text-base">Ready to start creating your next digital memory book?</p>
                <Link href='/templates'>
                    <Button
                        variant="outline"
                        className="w-full sm:w-auto rounded-full bg-transparent transition-ease-in-out border-white text-white hover:bg-white hover:text-primary font-bold px-10 py-6 h-auto text-base transition-colors"
                    >
                        Create a Card Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default PrivacyCTA;