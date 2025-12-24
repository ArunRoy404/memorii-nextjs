import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import termSections from '@/data/termsSectionData';


const TermsList = () => {
    return (
        < main className="grow max-w-4xl mx-auto w-full px-4 md:px-6 pb-20" >
            <div className="bg-white rounded-3xl md:rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] p-5 md:p-10">

                <Accordion type="single" collapsible className="w-full space-y-2">
                    {termSections.map((section) => (
                        <AccordionItem
                            key={section.id}
                            value={section.id}
                            className="border-b border-gray-50 last:border-0"
                        >
                            <AccordionTrigger className="hover:no-underline py-5 group">
                                <div className="flex items-center gap-3 md:gap-5 text-left">
                                    <div className="p-2 md:p-2.5 bg-blue-500 rounded-xl group-hover:bg-blue-600 transition-colors">
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


                {/* Legal Summary Box */}
                <div className="mt-12 p-6 md:p-8 bg-blue-50/50 rounded-3xl border border-teal-100/50">
                    <h4 className="font-bold text-lg text-blue-900 mb-2">TL;DR (Summary)</h4>
                    <p className="text-sm text-blue-800 opacity-80">
                        {`Basically: Be kind, don't upload illegal stuff, we own the code but you own your photos, and we aren't responsible if you lose your link. We're here to help you make great memories!`}
                    </p>
                </div>
            </div>
        </main >
    );
};

export default TermsList;