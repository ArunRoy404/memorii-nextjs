import CommonSection from '@/components/common/CommonSection/CommonSection';
import ECardStepsContainer from './ECardStepsContainer';

const HowToCreateECardSection = ({ data }) => {
    return (
        <CommonSection>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10'>
                {
                    data?.map((item) => (
                        <ECardStepsContainer key={item?.id} item={item} />
                    ))
                }
            </div>
        </CommonSection>
    );
};

export default HowToCreateECardSection;