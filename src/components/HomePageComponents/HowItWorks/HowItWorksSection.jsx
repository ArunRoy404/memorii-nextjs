'use client'

import CommonSection from '../../common/CommonSection/CommonSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HowItWorksStepsContainer from './HowItWorksStepsContainer';
import { useGetSections, useGetWorkSteps } from '@/hooks/cms.hook';

const HowItWorksSection = () => {
    const { data: sections } = useGetSections()
    const { data: workSteps } = useGetWorkSteps()
    const howItWorksSection = sections?.find(section => section?.section === 'how_memori_works')


    return (
        <CommonSection
            // sticky title
            // headerClassname="sticky md:static top-20 pb-10"
            // title={<>How <ColorfulText>Memorii</ColorfulText> works</>}
            title={howItWorksSection?.title}
            subtitle={howItWorksSection?.short_description}
        >
            <HowItWorksStepsContainer data={workSteps} />

            <div className='max-w-max mx-auto  mt-10 md:mt-20'>
                <Link href={'/get-started'} >
                    <Button
                        variant='defaultShiny'
                    >
                        Get Started for free today
                    </Button>
                </Link>
            </div>
        </CommonSection>
    );
};

export default HowItWorksSection;