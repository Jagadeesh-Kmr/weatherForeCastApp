import {WeatherReportDiv} from './styledComponents'

const WeatherDetails = props => {
  const {weatherDetails} = props
  const {name} = weatherDetails
  const isTrue = name !== undefined

  return (
    <>
      {isTrue ? (
        <WeatherReportDiv>
          <div className="feels">
            <p>{weatherDetails.name}</p>
          </div>
          <div className="humidity">
            {weatherDetails.main ? (
              <p className="bold">
                {weatherDetails.main.feels_like.toFixed()}°F
              </p>
            ) : null}
          </div>
          <div className="Wind">
            {weatherDetails.main ? (
              <p className="bold">
                {weatherDetails.weather ? (
                  <p>{weatherDetails.weather[0].main}</p>
                ) : null}
              </p>
            ) : null}
          </div>
        </WeatherReportDiv>
      ) : (
        ''
      )}
    </>
  )
}

export default WeatherDetails
