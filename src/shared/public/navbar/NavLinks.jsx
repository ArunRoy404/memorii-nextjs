import navLinks from "@/data/navLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ className }) => {
    const pathName = usePathname();
    return (
        <>
            {navLinks?.map((link) => {
                return (
                    <Link
                        className={cn(
                            "relative text-lg text-black font-medium after:absolute after:-bottom-1 hover:after:left-0 after:right-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                            `${pathName.includes(link?.href) ? "after:w-full text-primary font-bold" : ""}`,
                            className
                        )}
                        key={link?.href}
                        href={link?.href}
                    >
                        {link?.name}
                    </Link >
                );
            })}
        </>
    );
};

export default NavLinks;
