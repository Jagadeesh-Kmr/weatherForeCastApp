import {useState} from 'react'
import axios from 'axios'

import {
  WeatherMainDiv,
  WeatherH1,
  WeatherContainer,
  InputContainer,
  Label,
  Input,
  WeatherImg,
  Button,
  WeatherReportDiv,
} from './styledComponents'

const WeatherReport = () => {
  const [location, updateLocation] = useState('')
  const [weatherData, setWeatherData] = useState({})

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const onClickBtn = () => {
    axios.get(url).then(response => {
      setWeatherData(response.data)
    })
    updateLocation('')
  }
  console.log(weatherData)

  return (
    <>
      <WeatherMainDiv>
        <WeatherImg
          src="https://i0.wp.com/mageenews.com/wp-content/uploads/2023/01/weather.webp?fit=1200%2C600&ssl=1"
          alt="weatherImage"
        />
        <WeatherH1>Weather Forecast</WeatherH1>

        <WeatherContainer>
          <InputContainer>
            <Label htmlFor="city">City Name</Label>
            <Input
              type="text"
              value={location}
              onChange={event => updateLocation(event.target.value)}
              id="city"
              placeholder="Enter Location"
            />
            <Button type="button" onClick={onClickBtn}>
              Check
            </Button>
          </InputContainer>
          <WeatherReportDiv>
            <div className="feels">
              <p>{weatherData.name}</p>
            </div>
            <div className="humidity">
              {weatherData.main ? (
                <p className="bold">
                  {weatherData.main.feels_like.toFixed()}°F
                </p>
              ) : null}
            </div>
            <div className="Wind">
              {weatherData.main ? (
                <p className="bold">{weatherData.main.humidity}%</p>
              ) : null}
            </div>
          </WeatherReportDiv>
        </WeatherContainer>
      </WeatherMainDiv>
    </>
  )
}

export default WeatherReport
