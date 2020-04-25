import React, { memo } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from './Card/Card'

const Cards = ({ countryData }) => {
  if (!countryData) return null

  return (
    <Box mb={5}>
      <Grid container justify='center' spacing={2}>
        <Card
          header='Infected'
          count={countryData.confirmed}
          lastUpdate={countryData.lastUpdate}>
          Number of active cases of COVID-19.
        </Card>
        <Card
          header='Recovered'
          count={countryData.recovered}
          lastUpdate={countryData.lastUpdate}>
          Number of recoveries from COVID-19.
        </Card>
        <Card
          header='Deaths'
          count={countryData.deaths}
          lastUpdate={countryData.lastUpdate}>
          Number of deaths caused by COVID-19.
        </Card>
      </Grid>
    </Box>
  )
}

export default memo(Cards)
