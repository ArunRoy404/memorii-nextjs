import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import policySections from '@/data/policySectionsData'
import Link from 'next/link';


const PrivacyList = () => {
    return (
        < main className="grow max-w-4xl mx-auto w-full px-4 md:px-6 pb-20" >
            <div className="bg-white rounded-3xl md:rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] p-5 md:p-10">

                <Accordion type="single" collapsible className="w-full space-y-2">
                    {policySections.map((section) => (
                        <AccordionItem
                            key={section.id}
                            value={section.id}
                            className="border-b border-gray-50 last:border-0"
                        >
                            <AccordionTrigger className="hover:no-underline py-5 group">
                                <div className="flex items-center gap-3 md:gap-5 text-left">
                                    <div className="p-2 md:p-2.5 bg-primary rounded-xl group-hover:bg-primary/90 transition-colors">
                                        {section.icon}
                                    </div>
                                    <span className="text-base md:text-xl font-bold text-gray-800 leading-tight">
                                        {section.title}
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed text-sm md:text-base pl-12 md:pl-16 pb-6 pr-4">
                                {section.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Bottom Help Box */}
                <div className="mt-12 p-6 md:p-8 bg-linear-to-br from-gray-50 to-white rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-lg text-gray-800 mb-1">Questions about your data?</h4>
                        <p className="text-sm text-gray-500">
                            Our privacy team is ready to help you with any concerns.
                        </p>
                    </div>
                    <Link href='/contact'>
                        <Button className="w-full md:w-auto rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 h-auto shadow-md transition-transform active:scale-95">
                            Contact Privacy Team
                        </Button>
                    </Link>
                </div>
            </div>
        </main >
    );
};

export default PrivacyList;