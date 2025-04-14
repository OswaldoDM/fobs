import { companyLinks, legalLinks, productLinks, solutionLinks } from "./links/links";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Facebook from "./socials/Facebook";
import Instagram from "./socials/Instagram";
import Linkedin from "./socials/Linkedin";
import Threads from "./socials/Threads";
import TikTok from "./socials/TikTok";
import Twitter from "./socials/Twitter";

function Footer() {
  return (
    <footer className='border-b-2 pt-20'>
      <div className='mb-8 border-b-2 md:mb-12'>
        <div className='flex flex-wrap items-end justify-center md:justify-between gap-6 px-6 pb-6'>
          <Logo/>
          <div className='flex flex-wrap justify-center gap-6 text-sm'>
            <Twitter/>
            <Linkedin/>
            <Facebook/>
            <Threads/>
            <Instagram/>
            <TikTok/>
          </div>
        </div>
      </div>
      <div className='px-6'>
        <div className='grid gap-12 md:grid-cols-5 md:gap-0 lg:grid-cols-4'>
          <div className='grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-5 md:row-start-1 lg:col-span-3'>
            <div className='space-y-4 text-sm'>
              <span className='text-title font-medium text-base'>Product</span>
              {productLinks.map((link) => (
                <a key={link.id} href={link.path} className='block'>
                <span>{link.label}</span>
              </a>
              ))}              
            </div>
            <div className='space-y-4 text-sm'>
              <span className='text-title font-medium text-base'>Solution</span>
              {solutionLinks.map((link) => (
                <a key={link.id} href={link.path} className='block'>
                <span>{link.label}</span>
              </a>
              ))}
            </div>
            <div className='space-y-4 text-sm'>
              <span className='text-title font-medium text-base'>Company</span>
              {companyLinks.map((link) => (
                <a key={link.id} href={link.path} className='block'>
                <span>{link.label}</span>
              </a>
              ))}
            </div>
            <div className='space-y-4 text-sm'>
              <span className='text-title font-medium text-base'>Legal</span>
              {legalLinks.map((link) => (
                <a key={link.id} href={link.path} className='block'>
                <span>{link.label}</span>
              </a>
              ))}
            </div>
          </div>
          <form className='row-start-1 border-b pb-8 text-sm md:col-span-2 md:border-none lg:col-span-1'>
            <div>
              <label htmlFor='mail' className='text-title font-medium text-base'>
                Newsletter
              </label>
              <div className='flex'>
                <input
                  type='email'
                  id='mail'
                  name='mail'
                  placeholder='Your email'
                  className='border-2 px-3'
                />               
                <Button variant="primary" className="rounded-none">Submit</Button>
              </div>              
            </div>
          </form>
        </div>
        <div className='mt-12 flex flex-wrap items-end justify-center gap-6 py-6'>
          <span className=' block text-center text-sm md:order-first'>
            © 2024 FOBS, All rights reserved
          </span>          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
