import React, { memo } from 'react'
import BarChart from './BarChart/BarChart'
import LineChart from './LineChart/LineChart'

const Chart = ({ countryData, dailyData }) => {
  // console.log({ Chart: { dailyData, countryData } })

  return (
    <>
      <BarChart data={countryData} />
      <LineChart data={dailyData} />
    </>
  )
}

export default memo(Chart)
