import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import CommonSection from "@/components/common/CommonSection/CommonSection";
import ColorfulText from "@/components/ui/ColorfulText";
import faqData from "@/data/faqData";

const FAQSection = () => {
    return (
        <CommonSection
            title={<>Frequently Ask <ColorfulText>Questions</ColorfulText></>}
        >


            {/* faq accordion  */}
            <Accordion type="single" collapsible defaultValue={1}>
                <div className="grid grid-cols-2 gap-10">
                    <div className="justify-between flex flex-col item-start">
                        {faqData?.map((faq, idx) => {
                            if (idx < faqData.length / 2) {
                                return (
                                    <AccordionItem key={idx} value={idx + 1}>
                                        <AccordionTrigger>
                                            {faq?.id}. {faq?.qs}
                                        </AccordionTrigger>
                                        <AccordionContent>{faq?.ans}</AccordionContent>
                                    </AccordionItem>
                                );
                            }
                        })}
                    </div>
                    <div className="justify-between flex flex-col item-start">
                        {faqData?.map((faq, idx) => {
                            if (idx >= faqData.length / 2) {
                                return (
                                    <AccordionItem key={idx} value={idx + 1}>
                                        <AccordionTrigger>
                                            {faq?.id}. {faq?.qs}
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
