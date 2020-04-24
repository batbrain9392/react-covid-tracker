import React, { memo } from 'react'

const Cards = ({ countryData }) => {
  // console.log({ Cards: countryData })
  return <pre>{JSON.stringify(countryData, null, 2)}</pre>
}

export default memo(Cards)
