import CommonSection from '@/components/common/CommonSection/CommonSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const CTASection = () => {
    return (
        <CommonSection
            className={'bg-primary flex items-center'}
        >
            <div className='flex flex-col text-center items-center justify-center gap-4 w-full'>
                <h1 className='text-white font-bold text-xl md:text-2xl lg:text-4xl'>
                    Found Your Perfect Template?
                </h1>
                <p className='text-white/90 font-medium text-sm lg:text-lg'>
                    Start creating your memory book now and invite others to contribute their favorite moments.
                </p>

                <Button
                    variant='shiny'
                    className={"bg-white text-black hover:bg-white mt-4"}
                >
                    Start Creating Now
                    <ArrowRight />
                </Button>
            </div>
        </CommonSection>
    );
};

export default CTASection;