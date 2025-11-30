import CommonSection from "@/components/common/CommonSection/CommonSection";
import Logo from "@/components/common/logo/Logo";
import footerData from "@/data/footerData";
import FooterLinks from "./FooterLinks";

const Footer = () => {
    return (
        <footer>
            <CommonSection
                className={"backdrop-blur-2xl bg-footer relative overflow-hidden"}
            >
                <div className="flex flex-col xl:flex-row item-start justify-between gap-10 md;gap-15 xl:gap-[200px]">
                    {/* about  */}
                    <div className="max-w-[300px] flex flex-col gap-2 md:gap-6">
                        <Logo className={'text-4xl md:text-6xl'} />
                        <p className="text-sm md:text-base text-nav-secondary">{footerData?.about}</p>
                    </div>

                    {/* links  */}
                    <FooterLinks footerData={footerData} />

                    {/* email and social icons */}
                    {/* <FooterSocialLinks footerData={footerData} /> */}
                </div>


                {/* copyright  */}
                <div>
                    <p className="text-xs md:text-base relative z-10 text-center text-nav-color pt-10">{footerData?.copyright}</p>
                </div>


                {/* gradient */}
                <div
                    className="absolute w-1/2 h-[600px] rounded-full -bottom-160 -rotate-12 left-2/5 transform -translate-x-1/2 z-0"
                    style={{
                        background: "linear-gradient(#49A4F8 10%, #0FD1BA 100%)",
                        filter: "blur(160px)",
                    }}
                />

            </CommonSection>
        </footer>
    );
};

export default Footer;