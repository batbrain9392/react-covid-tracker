import React, { useState, useCallback } from 'react'
import { CountryPicker, Cards, Chart } from './Components'
import { useCountries, useCountryData, useDailyData } from './api'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import image from './image.png'

const App = () => {
  const [country, setCountry] = useState('')
  const countries = useCountries()
  const countryData = useCountryData(country)
  const dailyData = useDailyData()

  const onCountryChangeHandler = useCallback((value) => {
    setCountry(value)
  }, [])

  // console.log({ dailyData, countries, countryData })

  return (
    <Container>
      <Box my={10}>
        <Box mb={5} textAlign='center'>
          <img src={image} alt='COVID-19' />
        </Box>
        <CountryPicker
          countries={countries}
          onChange={onCountryChangeHandler}
        />
        <Cards countryData={countryData} />
        <Chart countryData={countryData} dailyData={dailyData} />
      </Box>
    </Container>
  )
}

export default App
