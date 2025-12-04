import Image from 'next/image';

const TemplateCard = ({ template }) => {
    return (
        <div
            className='cursor-pointer flex flex-col items-center gap-4 md:gap-8'
        >
            <div className='aspect-3/4 w-full rounded-3xl overflow-hidden'>
                <Image
                    src={template?.src}
                    alt={template?.title}
                    className="object-cover hover:scale-105 transition-ease-in-out w-full h-full"
                    loading="eager" />
            </div>
            <p className='text-center font-semibold md:text-2xl'>
                {template?.title}
            </p>
        </div>
    );
};

export default TemplateCard;