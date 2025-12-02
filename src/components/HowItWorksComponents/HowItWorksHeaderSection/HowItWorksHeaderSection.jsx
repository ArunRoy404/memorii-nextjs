import { Button } from '@/components/ui/button';
import ColorfulText from '@/components/ui/ColorfulText';
import image1 from '@/assets/images/birthdayImage.jpg'
import image2 from '@/assets/images/NoteBookImage.jpg'
import Image from 'next/image';
import CircleShape from '@/components/svg/CircleShape';
import TriangleShape from '@/components/svg/TriangleShape';
import Wave from '@/components/svg/Wave';
import CommonSection from '@/components/common/CommonSection/CommonSection';



const HowItWorksHeaderSection = () => {
    return (
        <CommonSection className={'relative overflow-hidden'}>

            {/* <div className='w-full absolute top-125'>

                <div className='relative bg-red-400'> */}
            {/* wave shape  */}

            {/* </div>
            </div> */}


            <div className=' absolute top-160 md:top-140 lg:top-130'>
                <div className='relative'>
                    <Wave className='absolute'/>
                    <CircleShape className='absolute scale-30 top-34 left-90' />
                </div>
            </div>

            {/* container  */}
            <div className='container mx-auto px-4 py-12 sm:py-16'>
                <div className='flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20 2xl:gap-44'>

                    {/* content  */}
                    <div
                        className="relative lg:max-w-1/2 xl:max-w-[824px] space-y-4 sm:space-y-6 mb-10 sm:mb-14">
                        <h1
                            className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-snug md:leading-tight'>
                            How <ColorfulText>Memorii</ColorfulText> works
                        </h1>
                        <h2
                            className='text-sm md:text-base lg:text-2xl font-medium text-icon'>
                            Create something special together. Whether it’s an eCard filled with many messages or a Memory Book full of stories — Memorii makes it easy, private, and meaningful.
                        </h2>
                        <Button
                            variant="defaultShiny"
                            className={'mt-2 md:mt-6'}
                        >
                            Get Started for free today
                        </Button>
                    </div>



                    {/* images and shapes  */}
                    <div className='relative w-full md:w-1/2 h-[380px] lg:h-[480px] 2xl:h-[672px] lg:flex-1'>
                        {/* shapes */}
                        <TriangleShape className={'absolute scale-60 lg:scale-100 -top-10 lg:-top-4 -right-10 lg:-right-4'} />


                        <div className='absolute right-4 top-4 max-w-3/5'>
                            <CircleShape className='absolute scale-80 lg:scale-100 -bottom-15 -right-10 z-0' />
                            <div className='aspect-3/4 rounded-3xl overflow-hidden relative z-1'>
                                <Image
                                    src={image2}
                                    alt="birthdayImage"
                                    className="object-cover hover:scale-105 transition-ease-in-out w-full h-full"
                                    loading="eager" />
                            </div>
                        </div>


                        <div className="absolute bottom-4 left-4 max-w-3/5">
                            <CircleShape className="absolute scale-80 lg:scale-100 -top-15 -left-10 z-0" />
                            <div className="aspect-3/4 rounded-3xl overflow-hidden relative z-1">
                                <Image
                                    src={image1}
                                    alt="NoteBookImage"
                                    className="object-cover hover:scale-105 transition-ease-in-out w-full h-full"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CommonSection>
    );
};

export default HowItWorksHeaderSection;