import Envelope from '@/components/Envelope/Envelope';
import FogTransition from '@/components/fog/FogTransition';

const page = () => {
    return (
        <div className='w-screen h-screen flex items-center justify-center overflow-hidden'>
            <Envelope />
            {/* <FogTransition /> */}
        </div>
    );
};

export default page; 