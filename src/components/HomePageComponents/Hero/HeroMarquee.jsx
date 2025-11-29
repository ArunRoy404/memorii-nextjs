import heroPhotos from "@/data/heroImages";
import Image from "next/image";

export default function HeroMarquee() {
    const loopedPhotos = [...heroPhotos, ...heroPhotos];
    return (
        <div className="relative w-full overflow-hidden py-40">
            {/* Moving Row */}
            <div className="flex animate-scroll">
                {loopedPhotos.map((photo, index) => (
                    <div
                        key={`${photo.id}-${index}`}
                        className="shrink-0 mx-3 md:mx-4"
                        style={{
                            transform: `rotate(${photo.rotation}deg)`,
                            scale: `${photo?.scale}`,
                        }}
                    >
                        <div className="border-[6px] border-white w-[180px] h-[220px] md:w-[220px] md:h-[270px] lg:w-[250px] lg:h-[300px] rounded-xl shadow-[0_-7px_30px_0_rgba(0,0,0,0.17)] overflow-hidden transition-transform duration-300 hover:scale-105 hover:rotate-0">
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                className="object-cover w-full h-full"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}
