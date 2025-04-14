import { navLinks } from "./Navbar";

function DesktopMenu() {

    return (
      <nav className='hidden lg:flex lg:gap-6 font-medium ml-6 2xl:text-lg'>
        {navLinks.map(({path,title}) => (
            <a key={title} href={path}>{title}</a>
        ))}      
      </nav>
    );
  };
  
  export default DesktopMenu;
  
  