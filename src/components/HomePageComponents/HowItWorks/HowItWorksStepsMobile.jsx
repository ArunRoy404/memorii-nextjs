import howItWorksData from '@/data/howItWorksData';
import HowItWorkCardMobile from './HowItWorkCardMobile';

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

const HowItWorksStepsMobile = ({ data }) => {
    const stepsToRender = data?.map((item, index) => ({
        ...howItWorksData[index],
        title: item.title,
        description: item.short_description,
        id: String(index + 1).padStart(2, '0')
    }))


    return (
        <div className='md:hidden grid grid-cols-1 gap-4 mx-auto mt-10 md:mt-30'>

            {
                stepsToRender?.map((step, index) => (
                    <HowItWorkCardMobile
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

export default HowItWorksStepsMobile;