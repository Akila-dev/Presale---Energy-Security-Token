import { usePathname } from "next/navigation";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import {
  MOBILE_MAIN_NAV,
  MOBILE_NAV_FOOTER_1,
  MOBILE_NAV_FOOTER_2,
} from "../../constants";
import { CloseBtn } from "../../components";

const MenuPopup = ({ close, container }) => {
  useGSAP(
    () => {
      gsap.from(".gsap-menu-container", {
        xPercent: -100,
        duration: 0.75,
        stagger: 0.175,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  const pathname = usePathname();

  return (
    <div
      ref={container}
      className="fixed top-0 left-0 w-full sm:max-w-[375px] !z-[100] h-full"
    >
      <div className="gsap-menu-container bg-[--bg] text-[--white] w-full h-full overflow-y-auto flex flex-col gap-10 justify-between px-5 md:px-[2rem] text-xs">
        <CloseBtn onClick={() => close()} />

        <div>
          <div className="flex-y-4">
            {MOBILE_MAIN_NAV.map((item, id) => (
              <Link
                key={id}
                href={item.url}
                className={`block uppercase text-2xl text-medium link ${
                  pathname === `${item.url}`
                    ? "font-bold text-white"
                    : "text-white/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-5 pb-[60px] md:pb-[70px] gap-2">
          <div className="flex-y-4 col-span-2">
            {MOBILE_NAV_FOOTER_1.map((item, id) => (
              <Link
                key={id}
                href={item.url}
                className={`block uppercase sm link ${
                  pathname === item.url
                    ? "font-bold text-white"
                    : "text-white/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex-y-4 col-span-3">
            {MOBILE_NAV_FOOTER_2.map((item, id) => (
              <Link
                key={id}
                to={item.url}
                className={`block uppercase sm link ${
                  pathname === item.url
                    ? "font-bold text-white"
                    : "text-white/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="h-[40px] md:h-[50px] border-t border-[--border] absolute bottom-0 left-0 w-full" />
      </div>
    </div>
  );
};

export default MenuPopup;
