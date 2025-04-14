import france from "../Assets/France.jpg";
import italy from "../Assets/Italy.jpg";
import spain from "../Assets/Spain.jpg";
import greece from "../Assets/Greece.jpg";

const topPlaces = [
  { id: 1, fullName: "Paris, France", image: france },
  { id: 2, fullName: "Roma, Italy", image: italy },
  { id: 3, fullName: "Barcelona, Spain", image: spain },
  { id: 4, fullName: "Santorini, Greece", image: greece },
];

function TopPlaces() {
  return (
    <section className="mt-10 md:mt-24">
      <h2>Top destinations</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
        {topPlaces.map((place) => (
          <div
            key={place.id}
            className='h-72 overflow-hidden rounded-lg relative'
          >
            <img
              src={place.image}
              alt={place.fullName}
              loading="lazy"
              className='w-full h-full object-cover cursor-pointer transition duration-1000 ease-in-out hover:scale-125'
            />            
            <h2 className='text-white absolute inset-0 top-[83%] left-[4%]'>
              {place.fullName}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopPlaces;
