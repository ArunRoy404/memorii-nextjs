import CommonSection from '@/components/common/CommonSection/CommonSection';
import ContactForm from '@/components/contactUsComponents/ContactForm';
import ContactInformation from '@/components/contactUsComponents/ContactInformation';
import ContactNeedHelp from '@/components/contactUsComponents/ContactNeedHelp';
import ColorfulText from '@/components/ui/ColorfulText';

const ContactUsPage = () => {
    return (
        <section className="min-h-screen bg-white font-sans text-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <CommonSection
                    title={<>Get in touch with <ColorfulText>Us</ColorfulText></>}
                    subtitle={`Have questions about creating your Memory Book? We're here to help you share and cherish your special moments.`}
                ></CommonSection>


                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <ContactInformation />
                        <ContactNeedHelp />
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactUsPage;