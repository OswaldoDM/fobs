import { useState } from "react";
import MobileIcon from "./MobileIcon";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";
import WorldSVG from "../SVGs/WorldSVG";
import Logo from "../ui/Logo";

export const navLinks = [
  { path: "#", title: "Discover" },
  { path: "#", title: "Trips" },
  { path: "#", title: "Review" },
  { path: "#", title: "More" },
];

const Navbar = () => {
  const [mobMenu, setMobMenu] = useState(false);

  function toggleMenu(menuState: boolean) {
    setMobMenu(menuState);
  }

  return (
    <section className='relative'>
      <div className='px-3 py-3 border-b-2 xl:px-0'>
        <div className='flex justify-between items-center'>
          <Logo/>
          <MobileIcon mobMenu={mobMenu} toggleMenu={toggleMenu} />
          <DesktopMenu />
          <div className='hidden lg:flex items-center gap-4'>
            <div className="flex items-center gap-1">
              <p className="text-gray-900 font-semibold border-r-2 pr-1">USD</p>
              <WorldSVG/>
            </div>
            <Button variant='primary'>Sign In</Button>
          </div>
        </div>
      </div>
      <MobileMenu mobMenu={mobMenu} toggleMenu={toggleMenu} />
    </section>
  );
};

export default Navbar;
