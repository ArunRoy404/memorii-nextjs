import CommonSection from '@/components/common/CommonSection/CommonSection';
import ColorfulText from '@/components/ui/ColorfulText';
import aboutUsData from '@/data/aboutUs';
import AboutUsCard from './AboutUsCard';

const AboutUsSection = () => {
    return (
        <CommonSection
            title={<><ColorfulText>About</ColorfulText> Us</>}
            subtitle={'Bringing people closer through shared memories and heartfelt messages'}
        >

            <div className="space-y-16">
                {aboutUsData?.map(data => <AboutUsCard data={data} key={data?.id} />)}
            </div>
        </CommonSection>
    );
};

export default AboutUsSection;