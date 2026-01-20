'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import CommonSection from "@/components/common/CommonSection/CommonSection";
import faqData from "@/data/faqData";
import { cn } from "@/lib/utils";
import { useGetSections, useGetFaqs } from '@/hooks/cms.hook';

const FAQSection = ({ classNameContainer, limit }) => {
    const { data: sections } = useGetSections()
    const { data: faqs } = useGetFaqs()
    const sectionData = sections?.find(section => section?.section === 'faq')

    // Map API data if available, else use static
    const sourceData = faqs?.length > 0
        ? faqs.map(f => ({ qs: f.question, ans: f.answer }))
        : faqData;


    const limitedFaqData = sourceData.slice(0, limit);


    return (
        <CommonSection
            title={sectionData?.title}
            subtitle={sectionData?.short_description}
        >

            {/* faq accordion  */}
            <Accordion type="single" collapsible defaultValue={1}>
                <div className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10",
                    classNameContainer
                )}>
                    <div className="justify-between flex flex-col item-start gap-4 lg:gap-7">
                        {limitedFaqData?.map((faq, idx) => {
                            if (idx < limitedFaqData.length / 2) {
                                return (
                                    <AccordionItem key={idx} value={idx + 1}>
                                        <AccordionTrigger>
                                            {faq?.qs}
                                        </AccordionTrigger>
                                        <AccordionContent>{faq?.ans}</AccordionContent>
                                    </AccordionItem>
                                );
                            }
                        })}
                    </div>
                    <div className="justify-between flex flex-col item-start gap-4 lg:gap-7">
                        {limitedFaqData?.map((faq, idx) => {
                            if (idx >= limitedFaqData.length / 2) {
                                return (
                                    <AccordionItem key={idx} value={idx + 1}>
                                        <AccordionTrigger>
                                            {faq?.qs}
                                        </AccordionTrigger>
                                        <AccordionContent>{faq?.ans}</AccordionContent>
                                    </AccordionItem>
                                );
                            }
                        })}
                    </div>
                </div>
            </Accordion>
        </CommonSection>
    );
};

export default FAQSection;
