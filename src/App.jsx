import React, { useState, useCallback } from 'react'
import { CountryPicker, Cards, BarChart, LineChart } from './Components'
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

  return (
    <Container maxWidth='md'>
      <Box my={7}>
        <Box mb={5} textAlign='center'>
          <img src={image} alt='COVID-19' />
        </Box>
        <CountryPicker
          countries={countries}
          onChange={onCountryChangeHandler}
        />
        <Cards countryData={countryData} />
        {country ? (
          <BarChart data={countryData} />
        ) : (
          <LineChart data={dailyData} />
        )}
      </Box>
    </Container>
  )
}

export default App
