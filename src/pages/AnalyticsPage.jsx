import React from 'react'
import { MakerCountChart } from '../components/Charts/MakerCountChart'
import { CountryCountChart } from '../components/Charts/CountryCountChart'
import { CityCountChart } from '../components/Charts/CityCountChart'
import Header from '../components/common/Header'

const AnalyticsPage = () => {
  return (
    <div>
        <Header title="Analytics" />
      <MakerCountChart />
        <CountryCountChart />
        <CityCountChart />
    </div>
  )
}

export default AnalyticsPage
