import rain from '../assets/rain.png';
import cloudy from '../assets/cloudy.png';
import { useEffect, useState } from 'react';

export default function WeatherCard({data}) {
  const [country, setCountry] = useState("");
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const currentEpochDate = new Date(Number(`${data.dt}000`));
  const dayIndex = currentEpochDate.getDay();

  const getCountry = async() => {
    const getLocation = await fetch(`https://nominatim.openstreetmap.org/?addressdetails=1&q=${data.name}&format=json&limit=1`);
    const location = await getLocation.json();

    setCountry(location[0].address.country);
  }

  const weatherColor = (weather) => {
    switch (weather) {
      case "Rain":
        return "from-rain1 to-rain2"
        break;
      case "Snow":
        return "from-snow1 to-snow2"
        break;
      case "Thunderstorm":
        return "from-thunderstorm1 to-thunderstorm2"
        break;
      case "Clouds":
        return "from-cloudy1 to-cloudy2"
        break;
      case "Clear":
        return "from-sunny1 to-sunny2"
        break;
      default:
        return "from-default1 to-default2"
        break;
    }
  }
  const weatherImages = (weather) => {
    switch (weather) {
      case "Rain":
        return <img className='w-24' src={rain} alt="Rain" />
        break;
      case "Snow":
        return <img className='w-24 drop-shadow-md' src="https://img.icons8.com/3d-fluency/94/snow.png" alt="snow"/>
        break;
      case "Thunderstorm":
        return <img className='w-24 drop-shadow-md' src="https://img.icons8.com/emoji/96/cloud-with-lightning-and-rain.png" alt="cloud-with-lightning-and-rain"/>
        break;
      case "Clouds":
        return <img className='w-24' src={cloudy} alt="Cloudy" />
        break;
      case "Clear":
        return <img className='w-24 drop-shadow-md' src="https://img.icons8.com/emoji/48/sun-emoji.png" alt="sun-emoji"/>
        break;
      default:
        return <></>
        break;
    }
  }

  useEffect(() => {
    getCountry();
  }, [data])
  return (
    <main
      className={`
        p-5 h-350 text-white shadow-lg rounded-3xl overflow-hidden bg-gradient-to-t 
        ${weatherColor(data.weather[0].main)}
        w-350 mx-auto flex flex-wrap justify-center items-center`}
    >
      <section className="w-full flex items-center justify-between">
        <h3 className="font-bold text-lg">{data.name}, {country}</h3>
        <p>{data.weather[0].main}</p>
      </section>

      <section className="w-full h-1/2 text-center flex flex-col items-center justify-center">
        <p className="w-full mt-2 capitalize">{days[dayIndex]}</p>
        <h2 className="w-full text-7xl">{data.main.temp.toFixed()}°C</h2>
        <p className="w-full mt-2 capitalize">{data.weather[0].description}</p>
      </section>

      <section className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="windSpeed flex gap-4">
            {/* <img width="30" height="30" src="https://img.icons8.com/pastel-glyph/64/ffffff/wind--v1.png" alt="wind--v1"/> */}
            <p>Wind speed: {data.wind.speed}m/s</p>
          </div>

          <div className="humidity flex gap-4">
            {/* <img width="30" height="30" src="https://img.icons8.com/quill/50/ffffff/humidity.png" alt="humidity"/> */}
            <p>Humidity: {data.main.humidity}%</p>
          </div>

          <div className="windDirection flex gap-4">
            {/* <img width="30" height="30" src="https://img.icons8.com/external-outline-kendis-lasman/64/ffffff/external-wind-direction-wather-and-disaster-line-outline-kendis-lasman.png" alt="external-wind-direction-wather-and-disaster-line-outline-kendis-lasman"/> */}
            <p>Wind direction: {data.wind.deg}°</p>
          </div>
        </div>

        <div className="weatherImage">
          {weatherImages(data.weather[0].main)}
        </div>
      </section>
    </main>
  )
}