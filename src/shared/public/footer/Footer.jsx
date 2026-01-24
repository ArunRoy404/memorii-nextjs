'use client'

import CommonSection from "@/components/common/CommonSection/CommonSection";
import Logo from "@/components/common/logo/Logo";
import FooterLinks from "./FooterLinks";
import { Facebook, Instagram, LinkedIn, TikTok } from "@/components/svg/SocialIcons";
import { useGetFooter } from "@/hooks/cms.hook";
import Link from "next/link";

const Footer = () => {
    const { data: footerData } = useGetFooter()
    const menus = footerData?.menus
    const socials = footerData?.socials
    const siteSettings = footerData['site Setting']


    return (
        <footer>
            <CommonSection
                className={"backdrop-blur-2xl bg-footer relative overflow-hidden"}
            >
                <div className="flex flex-col xl:flex-row item-start justify-between gap-10 md;gap-15 xl:gap-[200px]">
                    {/* about  */}
                    <div className="max-w-[300px] flex flex-col gap-2 md:gap-6">
                        <Logo className={'text-4xl md:text-6xl'} />
                        <p className="text-sm md:text-base text-nav-secondary">{siteSettings[0]?.short_description}</p>

                        <div className="flex gap-5 items-center">
                            {socials?.map((social, idx) => {
                                return (
                                    <Link key={idx} href={social?.social_link || '/'} target="_blank">
                                        {social?.social_name === 'Facebook' ? <Facebook /> : null}
                                        {social?.social_name === 'Instagram' ? <Instagram /> : null}
                                        {social?.social_name === 'Linked In' ? <LinkedIn /> : null}
                                        {social?.social_name === 'Tik Tok' ? <TikTok /> : null}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* links  */}
                    <FooterLinks menus={menus} />

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