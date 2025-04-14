import travelers from '../Assets/travelers.jpg'
import Button from './ui/Button';

function Sponsor() {
  return (
    <section className="mb-4 mt-16 lg:mt-40 lg:mb-12 lg:px-6 xl:mt-52 xl:mb-20">
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-0'>
        <img src={travelers} alt="travelers" className='rounded-lg w-full lg:w-[50%]' />
        <div className="flex flex-col justify-center items-center flex-1 gap-3">            
            <div className="flex gap-2">
                <span className='w-4 h-4 bg-primary_green rounded-full mt-1'></span>
                <h4 className="text-gray-500 font-semibold">Sponsored by STARBUCKS©</h4>                
            </div>
            <h2 className='text-center'>Embark on Your European<br />Adventure Today!</h2>
            <p className='text-center max-w-[400px]'>
                Discover the magic of Europe with unforgettable journeys tailored just for you. 
                From historic landmarks to breathtaking landscapes, start planning your dream 
                trip now and let the adventure begin!
            </p>
            <Button variant='secondary'>Explore more</Button>
        </div>
      </div>
    </section>
  );
}

export default Sponsor;
