import Path from '@/components/svg/Path';
import HowItWorkCard from './HowItWorkCard';
import howItWorksData from '@/data/howItWorksData';

const bgColors = [
    '#FEF0E7',
    '#E2E8FE',
    '#F4E6FF',
    '#D8F2FF',
]

const circleColors = [
    { in: "#FC815F", out: "#C67A6A" },
    { in: "#637EF3", out: "#346AC5" },
    { in: "#7B65EE", out: "#6941D8" },
    { in: "#4CBEF6", out: "#2494CC" },
];

const HowItWorksSteps = () => {
    return (
        <div className='hidden md:block relative max-w-[600px] lg:max-w-[700px] h-[700px] xl:max-w-[1014px] xl:h-[900px] mx-auto lg:mt-10'>

            <Path className='absolute rotate-45 top-0 left-1/2 -translate-x-1/2 ' />
            <Path className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ' />
            <Path className='absolute rotate-50 bottom-0 left-1/2 -translate-x-1/2 ' />

            {
                howItWorksData?.map((step, index) => (
                    <HowItWorkCard
                        key={index}
                        bg={bgColors[index]}
                        step={step}
                        circleColor={circleColors[index]}
                    />

                ))
            }
        </div>
    );
};

export default HowItWorksSteps;