import Button from "../ui/Button";
import { navLinks } from "./Navbar";

interface Props {
  mobMenu: boolean;
  toggleMenu: (value: boolean) => void;
}

const MobileMenu = ({ mobMenu, toggleMenu }: Props) => {
  return (
    <div
      className={`absolute w-full ${ mobMenu
          ? "grid grid-rows-[1fr] transition-all duration-300 ease-in-out"
          : "grid grid-rows-[0fr] transition-all duration-300 ease-in-out"
      }`}
    >
      <nav
        className={`overflow-hidden z-20 lg:hidden flex flex-col bg-white pb-6`}
      >
        {navLinks.map(({ path, title }) => (
          <a key={title} href={path} onClick={() => toggleMenu(!mobMenu)}>
            <p className='py-6 px-4 '>{title}</p>
          </a>
        ))}
        <Button variant="primary">Sign In</Button>
      </nav>
    </div>
  );
};

export default MobileMenu;


