import HowItWorksStepsContainer from '@/components/HomePageComponents/HowItWorks/HowItWorksStepsContainer';
import HowItWorksHeaderSection from '@/components/HowItWorksComponents/HowItWorksHeaderSection/HowItWorksHeaderSection';
import HowToCreateECardSection from '@/components/HowItWorksComponents/HowToCreateECardSection/HowToCreateECardSection';
import React from 'react';

const HowItWorksPage = () => {
    return (
        <>
            <HowItWorksHeaderSection />
            <HowItWorksStepsContainer className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16' />
            <HowToCreateECardSection />
        </>
    );
};

export default HowItWorksPage;