import SearchSVG from "../SVGs/SearchSVG";

interface Props {
  onSearch: (e: InputChangeEvent) => void;
}

function SearchBox({ onSearch }: Props) {
  return (
    <div className='relative w-[300px] md:w-[600px] lg:w-[800px]'>
      <div className='absolute text-gray-900 top-[25%] left-[5%] md:left-[2%]'>
        <SearchSVG/>
      </div>
      <input
        type='text'
        placeholder='Places to go...'
        onChange={(e) => onSearch(e)}
        className={`z-10 block w-full p-4 pl-14  
        border-2 border-gray-300 rounded-3xl 
        outline-none appearance-none shadow-lg`}                
      />
      </div>
    );
  }
  
  export default SearchBox;
        
