import ChooseTemplateSection from '@/components/HomePageComponents/ChooseTemplateSection/ChooseTemplateSection';
import HeroSection from '@/components/HomePageComponents/Hero/HeroSection';
import HowItWorksSection from '@/components/HomePageComponents/HowItWorks/HowItWorksSection';

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <HowItWorksSection />
            <ChooseTemplateSection />
        </>
    );
};

export default HomePage;