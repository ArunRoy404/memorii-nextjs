import AboutUsSection from '@/components/HomePageComponents/AboutUs/AboutUsSection';
import ChooseTemplateSection from '@/components/HomePageComponents/ChooseTemplateSection/ChooseTemplateSection';
import CTASection from '@/components/HomePageComponents/CTASection/CTASection';
import FAQSection from '@/components/HomePageComponents/FAQSection/FAQSection';
import HeroSection from '@/components/HomePageComponents/Hero/HeroSection';
import HowItWorksSection from '@/components/HomePageComponents/HowItWorks/HowItWorksSection';

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <HowItWorksSection />
            <ChooseTemplateSection />
            <FAQSection />
            <AboutUsSection />
            <CTASection/>
        </>
    );
};

export default HomePage;