import { usePathname } from "next/navigation";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import text_data from "../../text_data";
import { CloseButton } from "../../components";

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
      className="fixed top-0 left-0 !z-[10000] h-full w-full overflow-x-hidden hide-lg"
    >
      <div className="gsap-menu-container bg-[--bg] text-[--white] h-full overflow-y-auto flex flex-col gap-6 justify-between px-3 md:px-[1.5em]">
        <CloseButton container={container} onClick={() => close()} />

        <div>
          <div className="flex-y-4">
            {text_data.MOBILE_MAIN_NAV.map((item, id) => (
              <Link
                key={id}
                href={item.url}
                className={`block uppercase mobile-nav-link ${
                  pathname === `${item.url}`
                    ? "font-bold text-gradient"
                    : "text-fg"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 pb-5 md:pb-5 gap-y-1 gap-x-2">
          {text_data.MOBILE_NAV_FOOTER.map((item, id) => (
            <div key={id} className="col-span-1">
              <Link
                href={item.url}
                className={`block uppercase link ${
                  pathname === item.url ? "font-bold text-gradient" : "text-fg"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPopup;
