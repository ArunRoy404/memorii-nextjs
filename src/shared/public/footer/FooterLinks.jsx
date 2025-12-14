import Link from "next/link";

const FooterLinks = ({ footerData }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:flex flex-col md:flex-row gap-6 md:gap-20 justify-end flex-1">
      {/* categories / Labels */}
      {footerData?.footerLinks?.map((footerLink, idx) => {
        return (
          <div key={idx}>
            <p className="md:text-lg font-semibold md:mb-3 xl:mb-6 text-nav"> {footerLink?.label}</p>

            {/* links  */}
            <ul className="space-y-1 md:space-y-3">
              {footerLink?.links?.map((link, idx) => {
                return (
                  <li key={idx}>
                    <Link className="text-xs md:text-base text-nav hover:underline" href={link?.link}>{link?.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FooterLinks;