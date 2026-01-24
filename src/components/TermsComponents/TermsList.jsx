import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FileText } from "lucide-react";
import { useGetSummary } from "@/hooks/cms.hook";


const TermsList = ({ termsConditions }) => {
    const { data } = useGetSummary();
    const termsSummary = data?.find((item) => item?.section === 'trems');

    
    return (
        < main className="grow max-w-4xl mx-auto w-full px-4 md:px-6 pb-20" >
            <div className="bg-white rounded-3xl md:rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] p-5 md:p-10">

                <Accordion type="single" collapsible className="w-full space-y-2">
                    {termsConditions?.map((section) => (
                        <AccordionItem
                            key={section.id}
                            value={section.id}
                            className="border-b border-gray-50 last:border-0"
                        >
                            <AccordionTrigger className="hover:no-underline py-5 group">
                                <div className="flex items-center gap-3 md:gap-5 text-left">
                                    <div className="p-2 md:p-2.5 bg-blue-500 rounded-xl group-hover:bg-blue-600 transition-colors">
                                        <FileText className="text-white" />
                                    </div>
                                    <span className="text-base md:text-xl font-bold text-gray-800 leading-tight">
                                        {section.question}
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed text-sm md:text-base pl-12 md:pl-16 pb-6 pr-4">
                                {section.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>


                {/* Legal Summary Box */}
                <div className="mt-12 p-6 md:p-8 bg-blue-50/50 rounded-3xl border border-teal-100/50">
                    <h4 className="font-bold text-lg text-blue-900 mb-2">TL;DR (Summary)</h4>
                    <p className="text-sm text-blue-800 opacity-80">
                        {termsSummary?.description}
                    </p>
                </div>
            </div>
        </main >
    );
};

export default TermsList;