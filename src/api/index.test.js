import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import mockData from './mockData'
import { useCountries, useCountryData, useDailyData } from './index'

const mock = new MockAdapter(axios)
mock.onGet('/countries').reply(200, { countries: mockData.countries })
mock.onGet('/countries/India').reply(200, mockData.countryIndiaData)
mock.onGet('/daily').reply(200, mockData.dailyData)

async function setup(customHook, customHookParam) {
  const { result, waitForNextUpdate } = renderHook(() =>
    customHook(customHookParam)
  )

  await waitForNextUpdate()

  return result.current
}

test('useCountries hook should return a string array of country names', async () => {
  const result = await setup(useCountries)

  expect(result).toEqual(['India', 'Ireland'])
})

test('useCountryData hook should return data for the provided country', async () => {
  const result = await setup(useCountryData, 'India')

  expect(result).toEqual({
    country: 'India',
    confirmed: 46476,
    recovered: 12849,
    deaths: 1571,
    lastUpdate: '2020-05-05T12:32:31.000Z',
  })
})

test('useDailyData hook should return an object array of daily data', async () => {
  const result = await setup(useDailyData)

  expect(result).toEqual(mockData.dailyData)
})
