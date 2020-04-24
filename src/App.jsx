import React, { useState, useCallback } from 'react'
import { CountryPicker, Cards, Chart } from './Components'
import { useCountries, useCountryData, useDailyData } from './api'

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
    <main>
      <CountryPicker countries={countries} onChange={onCountryChangeHandler} />
      <Cards countryData={countryData} />
      <Chart countryData={countryData} dailyData={dailyData} />
    </main>
  )
}

export default App
