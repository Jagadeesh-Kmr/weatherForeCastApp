import styled from 'styled-components'

export const WeatherReportDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: 40px;
  margin-top: 40px;
  border-radius: 12px;
  background-color: #a2a8a4;
  color: #ffffff;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 60px;
    font-size: 20px;
    font-weight: 600;
  }
`
