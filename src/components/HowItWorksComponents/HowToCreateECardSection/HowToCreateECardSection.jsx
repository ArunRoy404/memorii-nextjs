import CommonSection from '@/components/common/CommonSection/CommonSection';
import ECardStepsContainer from './ECardStepsContainer';
import howToCreateCardData from '@/data/howToCreateCardData';

const HowToCreateECardSection = () => {
    return (
        <CommonSection>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10'>
                {
                    howToCreateCardData.map((item) => (
                        <ECardStepsContainer key={item?.category} item={item} />
                    ))
                }
            </div>
        </CommonSection>
    );
};

export default HowToCreateECardSection;