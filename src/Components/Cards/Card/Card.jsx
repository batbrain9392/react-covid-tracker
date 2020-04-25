import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CountUp from 'react-countup'

const useStyles = makeStyles({
  root: {
    minWidth: 170,
    height: '100%',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default memo(({ header, count, lastUpdate, children }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={4} md='auto'>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom>
            {header}
          </Typography>
          <Typography variant='h5' component='h2'>
            <CountUp end={count} separator=',' />
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            as of {new Date(lastUpdate).toLocaleDateString()}
          </Typography>
          <Typography variant='body2' component='p'>
            {children}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
})
