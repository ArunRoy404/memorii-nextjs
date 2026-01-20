'use client'

import CommonSection from '@/components/common/CommonSection/CommonSection';
import TemplateCard from '@/components/HomePageComponents/ChooseTemplateSection/TemplateCard';
import TemplateCategoriesDropdown from '@/components/TemplatePagesComponents/TemplateCategoriesDropdown';
import templateData from '@/data/templateData';
import { useGetSections } from '@/hooks/cms.hook';

const TemplatesPage = () => {
    const { data: sections } = useGetSections()
    const sectionData = sections?.find(section => section?.section === 'perfect_template')

    return (
        <CommonSection
            headerClassname={'max-w-[1200px] mx-auto'}
            title={sectionData?.title}
            subtitle={sectionData?.short_description}
        >
            <TemplateCategoriesDropdown />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {templateData?.map((template) => (
                    <TemplateCard
                        template={template}
                        key={template?.id}
                    />
                ))}
            </div>
        </CommonSection>
    );
};

export default TemplatesPage;