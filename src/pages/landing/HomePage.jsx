import ChooseTemplateSection from '@/components/HomePageComponents/ChooseTemplateSection/ChooseTemplateSection';
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
        </>
    );
};

export default HomePage;