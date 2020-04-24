import React, { memo } from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = ({ data }) => {
  if (!data) return null

  const barLabels = ['Infected', 'Recovered', 'Deaths']
  const barDatasets = [
    {
      data: [data.confirmed, data.recovered, data.deaths],
      backgroundColor: [
        'rgba(0,0,255,0.5)',
        'rgba(0,255,0,0.5)',
        'rgba(255,0,0,0.5)',
      ],
    },
  ]

  return (
    <Bar
      data={{
        labels: barLabels,
        datasets: barDatasets,
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: `Current state in ${data.country}`,
        },
      }}
    />
  )
}

export default memo(BarChart)
