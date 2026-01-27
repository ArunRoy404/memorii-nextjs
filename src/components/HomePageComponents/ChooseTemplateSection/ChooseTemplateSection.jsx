'use client'

import CommonSection from '@/components/common/CommonSection/CommonSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import TemplateCard from './TemplateCard';
import { useGetSections } from '@/hooks/cms.hook';
import { useGetTemplates } from '@/hooks/templates.hook';

const ChooseTemplateSection = () => {
    const { data: sections } = useGetSections()
    const { data: templates } = useGetTemplates()
    const templatesList = templates?.data
    const sectionData = sections?.find(section => section?.section === 'template_occasions')

    return (
        <CommonSection
            title={sectionData?.title}
            subtitle={sectionData?.short_description}
        >

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {templatesList?.slice(0, 4)?.map((template) => (
                    <TemplateCard
                        template={template}
                        key={template?.id}
                    />
                ))}
            </div>

            <div className='max-w-max mx-auto mt-10'>
                <Link href={'/templates'}>
                    <Button>
                        See All
                    </Button>
                </Link>
            </div>
        </CommonSection>
    );
};

export default ChooseTemplateSection;