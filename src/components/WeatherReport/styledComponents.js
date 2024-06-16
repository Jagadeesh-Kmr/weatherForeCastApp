import styled from 'styled-components'

export const WeatherMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #fffff;
  width: 100%;
`
export const WeatherImg = styled.img`
  width: 100%;
  height: 200px;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
`

export const WeatherH1 = styled.h1`
  font-size: 16px;
  color: #073180;
  font-family: verdana;
  text-decoration: solid;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    font-weight: 700;
  }
`

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 12px;
  width: 80%;
  padding: 10px 0px 10px 0px;
  @media screen and (min-width: 768px) {
    width: 520px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const Label = styled.label`
  color: #00000;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  line-height: 1.33;
  margin-bottom: 10px;
  color: #202633;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 90px;
    margin: 15px 10px 0px 0px;
  }
`

export const Input = styled.input`
  color: #000000;
  background-color: transparent;
  font-size: 14px;
  border: 0px;
  border-bottom: 1px solid #000000;
  width: 180px;
  outline: none;
  padding: 0px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 244px;
    padding: 0px;
    margin: 20px 60px 10px 0px;
  }
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  align-self: left;
  font-size: 12px;
  margin-top: 8px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
  color: #5edd79;
  margin-bottom: 2px;
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid #5edd79;
  cursor: pointer;
  outline: none;
  height: 30px;
  width: 60px;
  align-self: center;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    height: 40px;
    width: 80px;
    margin: 0px;
  }
`
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
