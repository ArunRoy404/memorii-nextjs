import React from 'react';
import CommonSection from '../../common/CommonSection/CommonSection';
import ColorfulText from '../../ui/ColorfulText';
import HowItWorksSteps from './HowItWorksSteps';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HowItWorksStepsMobile from './HowItWorksStepsMobile';

const HowItWorksSection = () => {
    return (
        <CommonSection
            headerClassname="sticky md:static top-20"
            title={<>How <ColorfulText>Memorii</ColorfulText> works</>}
            subtitle="Collect heartfelt messages and photos from everyone, then deliver a beautiful digital group card or memory book"
        >
            <HowItWorksSteps />

            <HowItWorksStepsMobile />

            <div className='max-w-max mx-auto  mt-10 md:mt-20'>
                <Link href={'/get-started'} >
                    <Button>
                        Get Started for free today
                    </Button>
                </Link>
            </div>
        </CommonSection>
    );
};

export default HowItWorksSection;