import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CountryPicker from './CountryPicker'

function setup() {
  const onCountryChangeHandler = jest.fn()
  const countries = ['India', 'Ireland']
  const utils = render(
    <CountryPicker countries={countries} onChange={onCountryChangeHandler} />
  )
  const changeCountry = (value) =>
    fireEvent.change(utils.getByRole('combobox'), {
      target: { value },
    })

  return {
    ...utils,
    onCountryChangeHandler,
    countries,
    changeCountry,
  }
}

test('renders the country dropdown', () => {
  const { getAllByRole, getByText, countries } = setup()

  expect(getAllByRole('option')).toHaveLength(3)
  expect(getByText('The World')).toBeInTheDocument()
  expect(getByText(countries[0])).toBeInTheDocument()
  expect(getByText(countries[1])).toBeInTheDocument()
})

test('calls onChange with selected value when an option is selected', () => {
  const { countries, onCountryChangeHandler } = setup()

  onCountryChangeHandler(countries[0])

  expect(onCountryChangeHandler).toHaveBeenCalledWith(countries[0])
})
