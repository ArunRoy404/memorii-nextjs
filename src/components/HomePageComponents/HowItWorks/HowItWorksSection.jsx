import CommonSection from '../../common/CommonSection/CommonSection';
import ColorfulText from '../../ui/ColorfulText';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HowItWorksStepsContainer from './HowItWorksStepsContainer';

const HowItWorksSection = () => {
    return (
        <CommonSection
            // sticky title
            // headerClassname="sticky md:static top-20 pb-10"
            title={<>How <ColorfulText>Memorii</ColorfulText> works</>}
            subtitle="Collect heartfelt messages and photos from everyone, then deliver a beautiful digital group card or memory book"
        >
            <HowItWorksStepsContainer />

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