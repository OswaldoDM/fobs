import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import TransitionGroup from "./Components/ui/TransitionGroup";
import SearchBox from "./Components/ui/SearchBox";
import Footer from "./Components/Footer/Footer";
import TopPlaces from "./Components/TopPlaces";
import Sponsor from "./Components/Sponsor";
import PlacesGrid from "./Components/PlacesGrid";
import Ecosystem from "./Components/Ecosystem";
import Testimonials from "./Components/Testimonials";

function App() {
  const [query, setQuery] = useState<string>("");    

  function onSearch(e: InputChangeEvent) {
    setQuery(e.target.value);
  }  

  return (
    <main>
      <div className='container mx-auto px-3'>
        <Navbar />
        <div className='flex flex-col items-center justify-center pt-16 gap-6'>
          <h1>Visit Europe</h1>
          <TransitionGroup />
          <SearchBox onSearch={onSearch} />
        </div>
        <PlacesGrid query={query} />
        <TopPlaces />
        <Ecosystem />
        <Testimonials />
        <Sponsor />
        <Footer />
      </div>
    </main>
  );
}

export default App;
