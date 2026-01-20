'use client'

import CommonSection from '@/components/common/CommonSection/CommonSection';
import ContactForm from '@/components/contactUsComponents/ContactForm';
import ContactInformation from '@/components/contactUsComponents/ContactInformation';
import ContactNeedHelp from '@/components/contactUsComponents/ContactNeedHelp';
import { useGetSections } from '@/hooks/cms.hook';

const ContactUsPage = () => {
    const { data: sections } = useGetSections()
    const sectionData = sections?.find(section => section?.section === 'get_in_touch')

    return (
        <section className="min-h-screen bg-white font-sans text-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <CommonSection
                    title={sectionData?.title}
                    subtitle={sectionData?.short_description}
                ></CommonSection>


                <div className="grid gap-12 items-start">
                    {/* <div className="space-y-8">
                        <ContactInformation />
                        </div> */}

                    <ContactForm />
                    <ContactNeedHelp />
                </div>
            </div>
        </section>
    );
};

export default ContactUsPage;