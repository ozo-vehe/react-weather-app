import { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import LoadingAlert from './alerts/LoadingAlert';
import Forecast from './Forecast';

function Weather ({ lon, lat }) {
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState(null);
  // const API_KEY = "35e032361968a668ca687692aecfed21";
  const API_KEY = "2595654ed6dc89b9ed4ba498831abbf9";

  const getForecast = async() => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await res.json();

      const newArr = [];
      const currentDate = new Date();
      const currentDay = currentDate.getDate();

      for (let i = 0; i < jsonData.list.length;) {
        const weatherDate = new Date(jsonData.list[i].dt_txt);

        if(weatherDate.getDate() !== currentDay) {
          newArr.push(jsonData.list[i]);
          i+=8
        } else {
          i+=1;
        }
      }
      setForecast(newArr);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=24af55e05930810f0386c8f7559871e0`);
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await res.json();
        setData(jsonData);
        await getForecast();
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchData();
  },[lat, lon])

  return (
    <>
      {(!data) ? (
        <LoadingAlert message={"Loading data, please wait"} />
      ):(
        <div className='p-4'>
          <WeatherCard data={data}/>
          {forecast && 
            <div className='forecast mt-8 flex gap-x-8 gap-y-4 flex-wrap items-center justify-center'>
              {forecast.map((weather) => {
                return (
                  <Forecast data={weather} />
                )
              })}
            </div>
          }
        </div>
      )}
    </>
  )
}

export default Weather;