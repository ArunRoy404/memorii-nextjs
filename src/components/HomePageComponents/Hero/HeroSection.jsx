import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroMarquee from "./HeroMarquee";



export default function HeroSection() {

  return (
    <section className="relative to-white pt-24 pb-16 overflow-hidden">
   
        {/* Text Content */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight px-4">
            Create a group e-Card or e-Memory
            <br />
            Book to share and cherish
          </h1>

          <p className="text-lg md:text-xl  font-medium text-icon max-w-3xl mx-auto px-4">
            Collect messages, photos, and well-wishes in one beautiful digital keepsake
          </p>
        </div>

        {/* Photo Marquee */}
        <HeroMarquee/>

        <div className="max-w-max mx-auto">
          {/* CTA Button */}
          <Link href="/get-started">
            <Button>
              Get Started for free today
            </Button>
          </Link>
        </div>
 
    </section>
  );
}