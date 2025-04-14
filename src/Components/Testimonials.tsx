import face1 from "../Assets/face1.jpg";
import face2 from "../Assets/face2.jpg";
import face3 from "../Assets/face3.jpg";
import face4 from "../Assets/face4.png";
import face5 from "../Assets/face5.jpeg";
import face6 from "../Assets/face6.jpeg";

const arrTestimonials = [
    {
        id: 1,
        name: "Jane Smith",
        image: face1,
        text: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe reprehenderit impedit quos sapiente officiis nihil, accusamus quia, officia voluptas voluptates. Labore at soluta ipsum porro. Debitis optio quas eaque!'",
    },
    {
        id: 2,
        name: "John Doe",
        image: face2,
        text: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe reprehenderit impedit quos sapiente officiis nihil, accusamus quia, officia voluptas voluptates. Labore at soluta ipsum porro. Debitis optio quas eaque!'",
    },
    {
        id: 3,
        name: "Steve Rogers",
        image: face3,
        text: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe reprehenderit impedit quos sapiente officiis nihil, accusamus quia, officia voluptas voluptates. Labore at soluta ipsum porro. Debitis optio quas eaque!'",
    },
    {
        id: 4,
        name: "Dana Craig",
        image: face4,
        text: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe reprehenderit impedit quos sapiente officiis nihil, accusamus quia, officia voluptas voluptates. Labore at soluta ipsum porro. Debitis optio quas eaque!'",
    },
    {
        id: 5,
        name: "Ana Johnson",
        image: face5,
        text: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe reprehenderit impedit quos sapiente officiis nihil, accusamus quia, officia voluptas voluptates. Labore at soluta ipsum porro. Debitis optio quas eaque!'",
    },
    {
        id: 6,
        name: "Charles Dickinson",
        image: face6,
        text: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe reprehenderit impedit quos sapiente officiis nihil, accusamus quia, officia voluptas voluptates. Labore at soluta ipsum porro. Debitis optio quas eaque!'",
    },
    
]

function Testimonials() {
  return (
    <section className="my-20 md:my-24 lg:mt-40 lg:px-6">
      <h2 className='text-center mb-8 lg:text-start'>Testimonials</h2>
      <div className='grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8'>        
        {arrTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='flex flex-col gap-6 p-7 max-w-96 xl:max-w-none rounded-lg border-2 border-gray-500 shadow-lg shadow-primary_green'
          >
            <p>{testimonial.text}</p>
            <div className='flex gap-3'>
              <img
                src={testimonial.image}
                alt='testimonial'
                className='w-8 h-8 rounded-full'
              />
              <h3 className="italic">{testimonial.name}</h3>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
}

export default Testimonials;
