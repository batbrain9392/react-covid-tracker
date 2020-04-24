import React, { memo } from 'react'

const Chart = ({ countryData, dailyData }) => {
  // console.log({ Chart: { dailyData, countryData } })
  return (
    <>
      <pre>{JSON.stringify(countryData, null, 2)}</pre>
      <pre>{JSON.stringify(dailyData, null, 2)}</pre>
    </>
  )
}

export default memo(Chart)
