import React, { memo } from 'react'

const CountryPicker = ({ countries, onChange }) => {
  // console.log({ CountryPicker: countries })
  const onChangeHandler = (event) => {
    const value = event.target.value
    onChange(value)
  }

  return (
    <select onChange={onChangeHandler}>
      <option value=''>Global</option>
      {countries.map((country) => (
        <option value={country} key={country}>
          {country}
        </option>
      ))}
    </select>
  )
}

export default memo(CountryPicker)
