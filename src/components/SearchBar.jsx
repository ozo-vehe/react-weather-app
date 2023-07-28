import { useState } from "react";

function SearchBar ({ coordinates, setLoading, error }) {
  const [input, setInput] = useState(null);
  
  const getCoordinates = async() => {
    error({error: false});
    setLoading({loading: true});
    try{
      const getLoaction = await fetch(`https://nominatim.openstreetmap.org/?addressdetails=1&q=${input}&format=json&limit=1`)
      const locationDetails = await getLoaction.json();
      
      coordinates({
        lat: locationDetails[0].lat,
        lon: locationDetails[0].lon,
      })
      setLoading({loading: false});
    } catch(err) {
      error({error: true});
    }
  }
    
  return (
    <nav className='bg-none pt-5 mb-2'>
      <div className='bg-white shadow-lg pr-5 rounded-full overflow-hidden flex flex-wrap items-center justify-between w-350 h-16 mx-auto'>
        <input
          className='bg-none h-full w-5/6 pl-5 outline-none border-none'
          onChange={(e) => setInput(e.target.value)}
          type="text"
          id="search"
          placeholder="Search By Loaction"
          autocomplete="off"
        />
        <img onClick={getCoordinates} className='w-6 cursor-pointer active:scale-100 hover:scale-110 transition-all duration-300' src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
      </div>
    </nav>
  );
}

export default SearchBar;