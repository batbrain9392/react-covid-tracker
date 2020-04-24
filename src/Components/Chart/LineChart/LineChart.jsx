import React, { memo } from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = ({ data }) => {
  if (!data.length) return null

  const lineLabels = data.map(({ reportDate }) => reportDate)
  const lineDatasetConfirmed = {
    label: 'Infected',
    data: data.map(({ confirmed }) => confirmed.total),
    borderColor: 'rgba(0,0,255,1)',
    fill: true,
  }
  const lineDatasetDeaths = {
    label: 'Deaths',
    data: data.map(({ deaths }) => deaths.total),
    borderColor: 'rgba(255,0,0,1)',
    backgroundColor: 'rgba(255,0,0,0.5)',
    fill: true,
  }
  const lineDatasets = [lineDatasetConfirmed, lineDatasetDeaths]

  return <Line data={{ labels: lineLabels, datasets: lineDatasets }} />
}

export default memo(LineChart)
