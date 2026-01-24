'use client'

import CommonSection from '@/components/common/CommonSection/CommonSection';
import ContactForm from '@/components/contactUsComponents/ContactForm';
import ContactInformation from '@/components/contactUsComponents/ContactInformation';
import ContactNeedHelp from '@/components/contactUsComponents/ContactNeedHelp';
import { useGetContactInfo, useGetSections } from '@/hooks/cms.hook';

const ContactUsPage = () => {
    const { data: sections } = useGetSections()
    const { data: contactRes } = useGetContactInfo()

    const sectionData = sections?.find(section => section?.section === 'get_in_touch')
    const contactInfo = contactRes[0]
    const showContact = contactInfo?.status === 'active'


    return (
        <section className="min-h-screen bg-white font-sans text-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <CommonSection
                    title={sectionData?.title}
                    subtitle={sectionData?.short_description}
                ></CommonSection>


                <div className={`grid grid-cols-1 ${showContact ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-12 items-start mb-12`}>

                    {
                        showContact && (
                            <div className="space-y-8">
                                <ContactInformation data={contactInfo} />
                            </div>
                        )
                    }

                    <ContactForm />
                </div>
                <ContactNeedHelp />
            </div>
        </section>
    );
};

export default ContactUsPage;