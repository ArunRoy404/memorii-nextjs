import CommonSection from '@/components/common/CommonSection/CommonSection';
import TemplateCard from '@/components/HomePageComponents/ChooseTemplateSection/TemplateCard';
import TemplateCategoriesDropdown from '@/components/TemplatePagesComponents/TemplateCategoriesDropdown';
import ColorfulText from '@/components/ui/ColorfulText';
import templateData from '@/data/templateData';

const TemplatesPage = () => {
    return (
        <CommonSection
            headerClassname={'max-w-[1200px] mx-auto'}
            title={<>Find the Perfect  <ColorfulText>Template</ColorfulText>  for Every Memory</>}
            subtitle={`Choose from beautifully designed templates for both e-Cards and e-Memory Books. Whether you’re celebrating, congratulating, remembering, or simply saying thank you — `}
        >
            <TemplateCategoriesDropdown />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {templateData.slice(0, 12)?.map((template) => (
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