'use client'

import CommonSection from '@/components/common/CommonSection/CommonSection';
import AboutUsCard from './AboutUsCard';
import { useGetAboutUsSection, useGetSections } from '@/hooks/cms.hook';

const AboutUsSection = () => {
    const { data: sections } = useGetSections()
    const sectionData = sections?.find(section => section?.section === 'about_us')
    const { data: aboutUsSection } = useGetAboutUsSection()


    return (
        <CommonSection
            title={sectionData?.title}
            subtitle={sectionData?.short_description}
        >

            <div className="space-y-16">
                {aboutUsSection?.map(data => <AboutUsCard data={data} key={data?.id} />)}
            </div>
        </CommonSection>
    );
};

export default AboutUsSection;