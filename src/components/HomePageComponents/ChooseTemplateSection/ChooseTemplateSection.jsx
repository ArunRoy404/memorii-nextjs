import CommonSection from '@/components/common/CommonSection/CommonSection';
import { Button } from '@/components/ui/button';
import ColorfulText from '@/components/ui/ColorfulText';
import templateData from '@/data/templateData';
import Link from 'next/link';
import React from 'react';
import TemplateCard from './TemplateCard';

const ChooseTemplateSection = () => {
    return (
        <CommonSection
            title={<>Choose a <ColorfulText>Template</ColorfulText> for any occasion</>}
            subtitle={'Find the perfect design for every moment — joyful or heartfelt. Memorii has templates for every occasion.'}
        >

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {templateData.slice(0, 4)?.map((template) => (
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