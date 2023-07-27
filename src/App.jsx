import { useState, useEffect } from 'react'
import Weather from './components/Weather.jsx'
import SearchBar from './components/SearchBar.jsx';
import LoadingAlert from './components/alerts/LoadingAlert.jsx';

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [loading, setLoading] = useState(false);

  const isLoading = (load) => {
    const { loading } = load;
    setLoading(loading);
  }

  const setCoordinates = (data) => {
    const {lat, lon} = data;
    setLat(lat);
    setLon(lon);
  }

  const getLocation = async() => {
    if ("geolocation" in navigator) {
      // setLoading(true);
      // Function to handle the successful retrieval of the user's location
      function showPosition(position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      }

      // Function to handle errors in geolocation retrieval
      function showError(error) {
        console.log("Error retrieving location:", error.message);
      }

      // Request the user's location
      navigator.geolocation.getCurrentPosition(showPosition, showError);
      // setLoading(false);
    } else {
      // Geolocation is not supported in this browser
      console.log("Geolocation is not supported.");
    }
  }

  useEffect(() => {
    getLocation();
  },[])

  

  return (
    <header className='bg-bg3 bg-cover bg-center min-h-screen'>
      <SearchBar coordinates={setCoordinates} setLoading={isLoading} />
      <main className="flex flex-col gap-20">
        {(!(lat === null && lon === null) && !loading) ? (
          <Weather lon={lon} lat={lat} />
        ):(
          <LoadingAlert message="Loading, please wait"/>
        )}
      </main>
    </header>
  )
};

export default App;