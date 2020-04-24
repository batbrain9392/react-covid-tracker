import React, { memo } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const CountryPicker = ({ countries, onChange }) => {
  // console.log({ CountryPicker: countries })

  const onChangeHandler = (event) => {
    const value = event.target.value
    onChange(value)
  }

  return (
    <FormControl>
      <InputLabel shrink htmlFor='location'>
        Location
      </InputLabel>
      <Select
        native
        onChange={onChangeHandler}
        inputProps={{
          name: 'location',
          id: 'location',
        }}>
        <option value=''>The World</option>
        {countries.map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}

export default memo(CountryPicker)
