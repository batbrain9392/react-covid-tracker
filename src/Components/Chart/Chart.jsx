import React, { memo } from 'react'
// import Grid from '@material-ui/core/Grid'
import BarChart from './BarChart/BarChart'
import LineChart from './LineChart/LineChart'

const Chart = ({ countryData, dailyData }) => {
  // console.log({ Chart: { dailyData, countryData } })

  return (
    <>
      <BarChart data={countryData} />
      <LineChart data={dailyData} />
      {/* <Grid container justify='center' alignItems='center' spacing={10}>
        <Grid item>
          <BarChart data={countryData} />
        </Grid>
        <Grid item>
          <LineChart data={dailyData} />
        </Grid>
      </Grid> */}
    </>
  )
}

export default memo(Chart)
