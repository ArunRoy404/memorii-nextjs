import Image from 'next/image';
import TemplateCardClick from './TemplateCardClick';

const TemplateCard = ({ template }) => {
    const category = template?.category;

    return (
        <div className='flex flex-col items-center gap-4 md:gap-6 group w-full'>
            <div className='rounded-md relative overflow-hidden w-full aspect-3/4 hover:shadow-xl hover:scale-101 transition-all duration-300 '>
                <TemplateCardClick template={template} />

                <Image
                    src={template?.image}
                    alt={category?.name || 'Template image'}
                    fill
                    className="object-cover -z-10"
                    loading="eager"
                />
            </div>

            <h2 className='text-center font-semibold text-lg md:text-2xl text-gray-900'>
                {category?.name}
            </h2>
        </div>
    );
};

export default TemplateCard; 