import { renderHook } from '@testing-library/react-hooks'
import { useCountries } from './index'
import axiosMock from 'axios'

test('useCountries hook should return string array of country names', async () => {
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
