'use client'

import CommonSection from '@/components/common/CommonSection/CommonSection';
import TemplateCard from '@/components/HomePageComponents/ChooseTemplateSection/TemplateCard';
import TemplateCategoriesDropdown from '@/components/TemplatePagesComponents/TemplateCategoriesDropdown';
import { TemplatePagination } from '@/components/TemplatePagesComponents/TemplatePagination';
import { useGetSections } from '@/hooks/cms.hook';
import { useGetTemplates } from '@/hooks/templates.hook';

const TemplatesPage = () => {
    const { data: sections } = useGetSections()
    const { data: templates } = useGetTemplates()
    const sectionData = sections?.find(section => section?.section === 'perfect_template')

    return (
        <CommonSection
            headerClassname={'max-w-[1200px] mx-auto'}
            title={sectionData?.title}
            subtitle={sectionData?.short_description}
        >
            <TemplateCategoriesDropdown />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {templates?.map((template) => (
                    <TemplateCard
                        template={template}
                        key={template?.id}
                    />
                ))}
            </div>

            <div className='mt-10'>
                <TemplatePagination />
            </div>
        </CommonSection>
    );
};

export default TemplatesPage;