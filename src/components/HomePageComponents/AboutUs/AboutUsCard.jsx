import Image from 'next/image';

const AboutUsCard = ({ data }) => {
    return (
        <div
            key={data?.id}
            className="flex flex-col md:flex-row md:even:flex-row-reverse gap-6 xl:gap-20">
            <div className="relative flex-1 aspect-video overflow-hidden rounded-xl shadow-sm">
                <Image
                    src={data?.image}
                    alt="Digital cards and memory books workspace"
                    fill
                    className="object-cover hover:scale-105 transition-ease-in-out"
                    priority
                />
            </div>

            <div className='md:w-4/7'>
                <h2 className="md:text-xl font-semibold tracking-tight text-gray-900 lg:text-3xl">
                    {data?.title}
                </h2>
                <p className="mt-2 md:mt-4 text-xs md:text-sm leading-relaxed text-gray-600 sm:text-base">
                    {data?.description}
                </p>
            </div>
        </div>
    );
};

export default AboutUsCard;