import Link from "next/link";

const FooterLinks = ({ menus }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:flex flex-col md:flex-row gap-6 md:gap-20 justify-end flex-1">
      {/* categories / Labels */}
      {menus?.map((menu, idx) => {
        return (
          <div key={idx}>
            <p className="md:text-lg font-semibold md:mb-3 xl:mb-6 text-nav"> {menu?.title}</p>

            {/* links  */}
            <ul className="space-y-1 md:space-y-3">
              {menu?.menu_link?.map((link, idx) => {
                return (
                  <li key={idx}>
                    <Link className="text-xs md:text-base text-nav hover:underline" target="_blank" href={link?.link_url || '/'}>{link?.link}</Link>
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