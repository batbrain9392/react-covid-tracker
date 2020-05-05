import { renderHook } from '@testing-library/react-hooks'
import { useCountries, useCountryData } from './index'
import axiosMock from 'axios'

jest.mock('axios')

test('useCountries hook should return a string array of country names', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: {
      countries: [
        { name: 'India', iso2: 'IN', iso3: 'IND' },
        { name: 'Ireland', iso2: 'IE', iso3: 'IRL' },
      ],
    },
  })
  const { result, waitForNextUpdate } = renderHook(() => useCountries())

  await waitForNextUpdate()

  expect(result.current).toEqual(['India', 'Ireland'])
})

test('useCountryData hook should return data for the provided country', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: {
      confirmed: {
        value: 3224,
        detail:
          'https://covid19.mathdro.id/api/countries/Afghanistan/confirmed',
      },
      recovered: {
        value: 421,
        detail:
          'https://covid19.mathdro.id/api/countries/Afghanistan/recovered',
      },
      deaths: {
        value: 95,
        detail: 'https://covid19.mathdro.id/api/countries/Afghanistan/deaths',
      },
      lastUpdate: '2020-05-05T12:32:31.000Z',
    },
  })
  const { result, waitForNextUpdate } = renderHook(() =>
    useCountryData('Afghanistan')
  )

  await waitForNextUpdate()

  expect(result.current).toEqual({
    country: 'Afghanistan',
    confirmed: 3224,
    recovered: 421,
    deaths: 95,
    lastUpdate: '2020-05-05T12:32:31.000Z',
  })
})
