import HowItWorksStepsContainer from '@/components/HomePageComponents/HowItWorks/HowItWorksStepsContainer';
import HowItWorksHeaderSection from '@/components/HowItWorksComponents/HowItWorksHeaderSection/HowItWorksHeaderSection';
import HowToCreateECardSection from '@/components/HowItWorksComponents/HowToCreateECardSection/HowToCreateECardSection';

const HowItWorksPage = () => {
    return (
        <>
            <HowItWorksHeaderSection />
            <HowItWorksStepsContainer className='container mx-auto px-4 sm:px-6 lg:px-8 pb-12' />
            <HowToCreateECardSection />
        </>
    );
};

export default HowItWorksPage;