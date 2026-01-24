'use client'

import CommonSection from '@/components/common/CommonSection/CommonSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useGetCTA } from '@/hooks/cms.hook';
import Link from 'next/link';

const CTASection = () => {
    const { data: cta } = useGetCTA()
    const homeCTA = cta?.find(cta => cta?.section === 'home')

    return (
        <CommonSection
            className={'bg-primary flex items-center'}
        >
            <div className='flex flex-col text-center items-center justify-center gap-4 w-full'>
                <h1 className='text-white font-bold text-xl md:text-2xl lg:text-4xl'>
                    {homeCTA?.title}
                </h1>
                <p className='text-white/90 font-medium text-sm lg:text-lg'>
                    {homeCTA?.description}
                </p>

                <Link href={'/templates'}>
                    <Button
                        variant='shiny'
                        className={"bg-white text-black hover:bg-white mt-4"}
                    >
                        Start Creating Now
                        <ArrowRight />
                    </Button>
                </Link>
            </div>
        </CommonSection>
    );
};

export default CTASection;