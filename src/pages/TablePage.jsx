import React from 'react'
import VehicleTable from '../components/VehicleTable'
import Header from '../components/common/Header'

const TablePage = () => {
  return (
    <div className='w-full'>
        <Header title="Table" />

      <VehicleTable/>
    </div>
  )
}

export default TablePage
