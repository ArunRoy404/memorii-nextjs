import Image from 'next/image';
import TemplateCardClick from './TemplateCardClick';

const TemplateCard = ({ template }) => {
    return (
        <div className='relative cursor-pointer flex flex-col items-center gap-4 md:gap-8'>
            <TemplateCardClick template={template} />
            <div className='aspect-3/4 w-full rounded-3xl overflow-hidden'>
                <Image
                    src={template?.src}
                    alt={template?.title || 'Template image'}
                    className="object-cover hover:scale-105 transition-ease-in-out w-full h-full"
                    loading="eager"
                />
            </div>
            <h2 className='text-center font-semibold md:text-2xl'>
                {template?.title}
            </h2>
        </div>
    );
};

export default TemplateCard;
