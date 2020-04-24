import axios from 'axios'
import { useState, useEffect } from 'react'

axios.defaults.baseURL = 'https://covid19.mathdro.id/api'

export const useCountries = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/countries')
      setData(data.countries.map(({ name }) => name))
    }
    getData()
  }, [])

  return data
}

export const useCountryData = (country) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(country ? `/countries/${country}` : '/')
      setData({
        country: country || 'the World',
        confirmed: data.confirmed.value,
        recovered: data.recovered.value,
        deaths: data.deaths.value,
        lastUpdate: data.lastUpdate,
      })
    }
    getData()
  }, [country])

  return data
}

export const useDailyData = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/daily')
      setData(data)
    }
    getData()
  }, [])

  return data
}
