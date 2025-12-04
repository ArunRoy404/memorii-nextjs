import heroPhotos from "@/data/heroImages";
import Image from "next/image";

import {
    Marquee,
    MarqueeContent,
    MarqueeFade,
    MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';

export default function HeroMarquee() {
    const loopedPhotos = [...heroPhotos, ...heroPhotos];

    return (
        <div className="relative w-full overflow-hidden">
            <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />

                <MarqueeContent
                    speed={30}
                    className="py-15 md:py-24 lg:py-40"
                >
                    {loopedPhotos.map((photo, index) => (
                        <MarqueeItem
                            key={`${photo.id}-${index}`}
                            className="shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-5"
                            style={{
                                transform: `rotate(${photo.rotation}deg) scale(${photo?.scale || 1})`,
                            }}
                        >
                            <div className="
                                border-4 sm:border-[5px] md:border-[6px] border-white 
                                rounded-xl xl:shadow-[0_-7px_30px_0_rgba(0,0,0,0.17)]
                                shadow-[0_-5px_20px_0_rgba(0,0,0,0.15)]
                                md:shadow-[0_-8px_30px_0_rgba(0,0,0,0.18)]
                                lg:shadow-[0_-10px_35px_0_rgba(0,0,0,0.20)]
                                overflow-hidden transition-transform duration-300 
                                hover:scale-105 hover:rotate-0
                                w-[130px] h-40
                                sm:w-[150px] sm:h-[190px]
                                md:w-[190px] md:h-[230px]
                                lg:w-60 lg:h-[290px]
                                xl:w-[260px] xl:h-[310px]
                            ">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="object-cover w-full h-full"
                                    loading="eager"
                                />
                            </div>
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>
        </div>
    );
}
