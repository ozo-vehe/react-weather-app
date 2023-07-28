import rain from '../assets/rain.png';
import cloudy from '../assets/cloudy.png';
import { temp } from '../utils/kelvinToCelsius';

export default function Forecast({data}) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const currentDate = new Date(data.dt_txt);
  const dayIndex = currentDate.getDay();

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
        return <img className='w-12' src={rain} alt="Rain" />
        break;
      case "Snow":
        return <img className='w-12 drop-shadow-md' src="https://img.icons8.com/3d-fluency/94/snow.png" alt="snow"/>
        break;
      case "Thunderstorm":
        return <img className='w-12 drop-shadow-md' src="https://img.icons8.com/emoji/96/cloud-with-lightning-and-rain.png" alt="cloud-with-lightning-and-rain"/>
        break;
      case "Clouds":
        return <img className='w-12' src={cloudy} alt="Cloudy" />
        break;
      case "Clear":
        return <img className='w-12 drop-shadow-md' src="https://img.icons8.com/emoji/48/sun-emoji.png" alt="sun-emoji"/>
        break;
      default:
        return <></>
        break;
    }
  }

  return (
    <main
      className={`
        h-36 text-white rounded-lg bg-gradient-to-t
        ${weatherColor(data.weather[0].main)}
        w-40 flex flex-wrap justify-center items-center`}
    >
      <section className="w-full text-center">
        <h2 className="w-full text-xl font-bold">{temp(data.main.temp).toFixed(1)}°C</h2>
        <p className="w-full capitalize text-sm">{data.weather[0].description}</p>
      </section>

      <section className="flex w-full justify-center items-center">
        <div className="weatherImage">
          {weatherImages(data.weather[0].main)}
        </div>
      </section>

      <section className='w-full text-center'>
        <p>{days[dayIndex]}</p>
      </section>
    </main>
  )
}