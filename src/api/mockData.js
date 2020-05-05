const countries = [
  { name: 'India', iso2: 'IN', iso3: 'IND' },
  { name: 'Ireland', iso2: 'IE', iso3: 'IRL' },
]

const countryIndiaData = {
  confirmed: {
    value: 46476,
    detail: 'https://covid19.mathdro.id/api/countries/India/confirmed',
  },
  recovered: {
    value: 12849,
    detail: 'https://covid19.mathdro.id/api/countries/India/recovered',
  },
  deaths: {
    value: 1571,
    detail: 'https://covid19.mathdro.id/api/countries/India/deaths',
  },
  lastUpdate: '2020-05-05T12:32:31.000Z',
}

const dailyData = [
  {
    totalConfirmed: 555,
    mainlandChina: 548,
    otherLocations: 7,
    deltaConfirmed: 0,
    totalRecovered: 0,
    confirmed: { total: 555, china: 548, outsideChina: 7 },
    deltaConfirmedDetail: { total: 0, china: 0, outsideChina: 0 },
    deaths: { total: 17, china: 17, outsideChina: 0 },
    recovered: { total: 0, china: 0, outsideChina: 0 },
    active: 0,
    deltaRecovered: 0,
    incidentRate: 0.44821646978651847,
    peopleTested: 0,
    reportDate: '2020-01-22',
  },
  {
    totalConfirmed: 654,
    mainlandChina: 643,
    otherLocations: 11,
    deltaConfirmed: 99,
    totalRecovered: 0,
    confirmed: { total: 654, china: 643, outsideChina: 11 },
    deltaConfirmedDetail: { total: 99, china: 95, outsideChina: 4 },
    deaths: { total: 18, china: 18, outsideChina: 0 },
    recovered: { total: 0, china: 0, outsideChina: 0 },
    active: 0,
    deltaRecovered: 0,
    incidentRate: 0.47555995744189605,
    peopleTested: 0,
    reportDate: '2020-01-23',
  },
]

export default { countries, countryIndiaData, dailyData }
