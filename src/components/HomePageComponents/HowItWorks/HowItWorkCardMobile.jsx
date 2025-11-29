import Circle from '@/components/svg/Circle';

const HowItWorkCardMobile = ({ step, bg = '#FEF0E7', circleColor }) => {
    const { id, title, description } = step;

    return (
        <div
            className={`sticky top-72 p-4 space-y-4 bg-[#F9F9F9] rounded-3xl 
                        shadow-[8px_4px_8.4px_0_rgba(0,0,0,0.25)]
                        md:p-4 md:space-y-3 md:max-w-[220px]`}
        >
            <div className='flex items-center justify-center'>
                <Circle colorIn={circleColor.in} colorOut={circleColor.out} />
            </div>
            <div
                className='p-4 text-center md:p-4'
                style={{ backgroundColor: bg }}
            >
                <p className='text-2xl font-bold md:text-xl'>{id}</p>
                <h1 className='pt-3 pb-3 text-lg font-semibold md:pt-3 md:pb-4 md:text-base'>
                    {title}
                </h1>
                <p className='text-[#4B5563] font-medium md:text-sm'>{description}</p>
            </div>
        </div>
    );
};

export default HowItWorkCardMobile;