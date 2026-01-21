import { cn } from '@/lib/utils';
import HowItWorksSteps from './HowItWorksSteps';
import HowItWorksStepsMobile from './HowItWorksStepsMobile';

const HowItWorksStepsContainer = ({ className, data }) => {
    return (
        <div className={cn(
            className
        )}>
            <HowItWorksSteps data={data} />
            <HowItWorksStepsMobile data={data} />
        </div>
    );
};

export default HowItWorksStepsContainer;