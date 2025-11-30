import { cn } from '@/lib/utils';
import HowItWorksSteps from './HowItWorksSteps';
import HowItWorksStepsMobile from './HowItWorksStepsMobile';

const HowItWorksStepsContainer = ({ className }) => {
    return (
        <div className={cn(
            className
        )}>
            <HowItWorksSteps />
            <HowItWorksStepsMobile />
        </div>
    );
};

export default HowItWorksStepsContainer;