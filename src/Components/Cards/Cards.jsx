import React, { memo } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

const Cards = ({ countryData }) => {
  // console.log({ Cards: countryData })
  return (
    <Box mb={3}>
      <Grid container justify='center'>
        <pre>{JSON.stringify(countryData, null, 2)}</pre>
      </Grid>
    </Box>
  )
}

export default memo(Cards)
