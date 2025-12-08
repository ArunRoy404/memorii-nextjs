import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroMarquee from "./HeroMarquee";

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-10 md:pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Text Content */}
      <div className="text-center space-y-4 sm:space-y-6 px-4">
        <h1 className="
          text-2xl md:text-4xl lg:text-6xl 
          font-bold text-secondary-foreground leading-tight
        ">
          Create a group e-Card or e-Memory
          <br />
          Book to share and cherish
        </h1>

        <p className="
          text-sm md:text-base lg:text-xl 
          font-medium text-icon max-w-2xl sm:max-w-3xl mx-auto
        ">
          Collect messages, photos, and well-wishes in one beautiful digital keepsake
        </p>
      </div>

      {/* Photo Marquee */}
      <div className="mt-8">
        <HeroMarquee />
      </div>

      {/* CTA */}
      <div className="mt-8 flex justify-center">
        <Link href="/get-started">
          <Button variant="defaultShiny" className="px-6 py-5 text-base sm:text-lg">
            Get Started for free today
          </Button>
        </Link>
      </div>

    </section>
  );
}
