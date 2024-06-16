import {useState} from 'react'
import axios from 'axios'
import DateObject from 'react-date-object'

import WeatherDetails from '../WeatherDetails'

import {
  WeatherMainDiv,
  WeatherH1,
  WeatherContainer,
  InputContainer,
  Label,
  Input,
  WeatherImg,
  Button,
  ErrorMessage,
  ModeImg,
  WeatherDarkMainDiv,
  WeatherDarkH1,
  LabelDark,
  InputDark,
} from './styledComponents'

const WeatherReport = () => {
  const [location, updateLocation] = useState('')
  const [errorMsg, SetErrorMSg] = useState('')
  const [weatherData, setWeatherData] = useState({})
  const [toggleMode, setToggleMode] = useState(false)

  const TodayDate = new DateObject()

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const onClickBtn = () => {
    if (location.length !== 0) {
      axios.get(url).then(response => {
        setWeatherData(response.data)
      })
      updateLocation('')
      SetErrorMSg('')
    } else {
      SetErrorMSg('*Enter Location')
    }
  }

  const mode = toggleMode
    ? 'https://cdn-icons-png.freepik.com/512/6714/6714978.png'
    : 'https://static.thenounproject.com/png/4066359-200.png'

  const WeatherDiv = toggleMode ? WeatherDarkMainDiv : WeatherMainDiv
  const WeatherHead = toggleMode ? WeatherDarkH1 : WeatherH1
  const InputLabel = toggleMode ? LabelDark : Label
  const InputDiv = toggleMode ? InputDark : Input

  return (
    <>
      <WeatherDiv>
        <WeatherImg
          src="https://i0.wp.com/mageenews.com/wp-content/uploads/2023/01/weather.webp?fit=1200%2C600&ssl=1"
          alt="weatherImage"
        />
        <WeatherHead>
          Weather Forecast
          <span style={{marginLeft: '20px'}}>
            <button
              style={{
                background: 'transparent',
                border: 0,
                cursor: 'pointer',
              }}
              type="button"
              onClick={() => setToggleMode(!toggleMode)}
            >
              <ModeImg src={mode} alt="modeImage" />
            </button>
          </span>
        </WeatherHead>
        <p style={{color: '#72acce', fontSize: '20px', fontWeight: '700'}}>
          {TodayDate.format()}
        </p>
        <WeatherContainer>
          <InputContainer>
            <InputLabel htmlFor="city">City Name</InputLabel>
            <InputDiv
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
          <ErrorMessage>{errorMsg}</ErrorMessage>

          <WeatherDetails weatherDetails={weatherData} />
        </WeatherContainer>
      </WeatherDiv>
    </>
  )
}

export default WeatherReport
