import traveling1 from '../Assets/traveling1.jpg'
import traveling2 from '../Assets/traveling2.jpg'

function Ecosystem() {
  return (
    <section className="mt-20 md:mt-24 lg:mt-48">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
            <h1 className='hidden lg:block'>The FOBS ecosystem brings <br />people together</h1>
            <h1 className='lg:hidden'>The FOBS ecosystem</h1>
            <p className="max-w-[500px]">FOBS is evolving to be more than just an app. It supports an entire ecosystem 
                — from products to the communities and platforms helping travelers and businesses innovate.
            </p>            
        </div>
        <div className="flex flex-col lg:flex-row gap-3 mt-8 lg:h-80 xl:96 2xl:h-[427px] lg:px-6">
            <img src={traveling1} alt="traveling" className="flex-1 rounded-lg object-cover"/>
            <img src={traveling2} alt="traveling" className="flex-1 rounded-lg object-cover"/>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-8 gap-10 md:px-6">
            <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbf764" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                    <h3>Fast</h3>
                </div>
                <p className='text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbf764" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                    </svg>
                    <h3>Powerful</h3>
                </div>
                <p className='text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbf764" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
                    </svg>
                    <h3>Security</h3>
                </div>
                <p className='text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbf764" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                    </svg>

                    <h3>Control</h3>
                </div>
                <p className='text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>        
    </section>
  )
}

export default Ecosystem