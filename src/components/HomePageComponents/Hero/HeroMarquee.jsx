import Image from "next/image";
import {
    Marquee,
    MarqueeContent,
    MarqueeFade,
    MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import { useGetSlider } from "@/hooks/cms.hook";



export default function HeroMarquee() {
    const orientation = [
        { rotation: -10, scale: 1.1 },
        { rotation: 10, scale: 1.3 },
        { rotation: -5, scale: 1.2 },
        { rotation: 13, scale: 1.5 },
        { rotation: -13, scale: 1.1 },
        { rotation: 2, scale: 1.2 },
        { rotation: -9, scale: 1.3 },
    ];

    const { data: sliderData, isLoading } = useGetSlider();

    if (isLoading) return <div>Loading...</div>;
    if (!sliderData || sliderData.length === 0) return null;

    return (
        <div className="relative w-full overflow-hidden">
            <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />

                <MarqueeContent
                    speed={30}
                    className="py-15 md:py-24 lg:py-40"
                >
                    {sliderData.map((photo, index) => {
                        const styleIndex = index % orientation.length;
                        const config = orientation[styleIndex];

                        return (
                            <MarqueeItem
                                key={photo.id || index}
                                className="shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-5"
                                style={{
                                    transform: `rotate(${config.rotation}deg) scale(${config.scale})`,
                                }}
                            >
                                <div className="
                                    border-4 sm:border-[5px] md:border-[6px] border-white 
                                    rounded-xl shadow-[0_-5px_20px_0_rgba(0,0,0,0.15)]
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
                                        src={photo.image}
                                        alt={photo.alt || "Hero Image"}
                                        className="object-cover w-full h-full"
                                        loading="eager"
                                        width={260}
                                        height={310}
                                    />
                                </div>
                            </MarqueeItem>
                        );
                    })}
                </MarqueeContent>
            </Marquee>
        </div>
    );
}