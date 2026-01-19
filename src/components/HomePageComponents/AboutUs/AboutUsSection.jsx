'use client'

import CommonSection from '@/components/common/CommonSection/CommonSection';
import aboutUsData from '@/data/aboutUs';
import AboutUsCard from './AboutUsCard';
import { useGetSections } from '@/hooks/cms.hook';

const AboutUsSection = () => {
    const { data: sections } = useGetSections()
    const sectionData = sections?.find(section => section?.section === 'about_us')

    return (
        <CommonSection
            title={sectionData?.title}
            subtitle={sectionData?.short_description}
        >

            <div className="space-y-16">
                {aboutUsData?.map(data => <AboutUsCard data={data} key={data?.id} />)}
            </div>
        </CommonSection>
    );
};

export default AboutUsSection;