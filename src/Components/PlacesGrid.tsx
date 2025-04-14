import { useMemo } from "react";
import { places } from "../Data/mockData";
import StarSVG from "./SVGs/StarSVG";

interface Props {
  query: string;
  likedPlaces: Set<number>;
  onLike: (placeId: number) => void;
}

function PlacesGrid({ query, likedPlaces, onLike }: Props) {
  const filteredPlaces = useMemo(() => {
    return places.filter(
      (place) =>
        place.country.toLowerCase().includes(query.toLowerCase()) ||
        place.city.toLowerCase().includes(query.toLowerCase()) ||
        place.place.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
      {filteredPlaces.map((place) => (
        <div key={place.id} className='flex flex-col justify-center p-4'>
          <div className='w-full h-64 overflow-hidden rounded-lg shadow-lg border border-gray-500 relative'>
            <img
              src={place.img}
              alt={place.place}
              className='w-full h-full object-cover cursor-pointer transition duration-1000 ease-in-out hover:scale-125'
            />
            <div className='bg-white size-9 z-10 absolute inset-0 rounded-full top-[2%] left-[85%]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                onClick={() => onLike(place.id)}
                className={`size-6 relative inset-0 top-[20%] left-[15%] cursor-pointer ${
                  likedPlaces.has(place.id)
                    ? "fill-red-500 stroke-red-500"
                    : "fill-none stroke-black"
                } hover:fill-red-500 hover:stroke-red-500 transition-colors`}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                />
              </svg>
            </div>
          </div>
          <h3 className='mt-4'>{place.place}</h3>
          <p className='italic'>
            {place.city} - {place.country}
          </p>
          <div className='text-gray-600 flex items-center gap-1'>
            <p>{place.rating}</p>
            <StarSVG />
            <p>{`(${place.reviews})`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlacesGrid;
