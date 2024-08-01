"use client";
import { usePathname } from "next/navigation";
import { Link } from "@nextui-org/link";

// UI
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

// Config
import { NavItem, siteConfig } from "@/config/site";

// Icons
import { NavIcon } from "@/components/icons";

export const Navbar = () => {
  // Check which url matches the current location, get the current pathname
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 top-auto z-[999]">
      <NextUINavbar maxWidth="xl" position="sticky" isBlurred={false}>
        <NavbarContent className="flex basis-full" justify="center">
          <NavbarItem className="flex gap-2 w-full justify-around">
            {siteConfig.navItems.map((page, index) => (
              <Link
                aria-label={page.label}
                href={page.href}
                key={page.label + index}
              >
                <NavIcon
                  iconHref={page.href as NavItem["href"]}
                  isActive={pathname === page.href}
                  className={
                    pathname === page.href
                      ? "text-primary-500"
                      : "text-default-500"
                  }
                />
              </Link>
            ))}
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar>
    </div>
  );
};
