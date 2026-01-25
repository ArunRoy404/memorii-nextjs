'use client'

import HowItWorksStepsContainer from '@/components/HomePageComponents/HowItWorks/HowItWorksStepsContainer';
import HowItWorksHeaderSection from '@/components/HowItWorksComponents/HowItWorksHeaderSection/HowItWorksHeaderSection';
import HowToCreateECardSection from '@/components/HowItWorksComponents/HowToCreateECardSection/HowToCreateECardSection';
import { useGetHowItWorks, useGetWorkSteps } from '@/hooks/cms.hook';


const HowItWorksPage = () => {
    const { data: howItWorksData } = useGetHowItWorks()
    const { data: workSteps } = useGetWorkSteps()

    const howItWorks = howItWorksData['How To Work']
    const howToCreate = howItWorksData['How To Create']

    return (
        <>
            <HowItWorksHeaderSection data={howItWorks} />
            <HowItWorksStepsContainer data={workSteps} className='container mx-auto px-4 sm:px-6 lg:px-8 pb-12' />
            <HowToCreateECardSection data={howToCreate} />
        </>
    );
};

export default HowItWorksPage;