import React from 'react'
import { useStore } from '../../store/fetchAll'

const BrandModelHistogram = () => {
  const {modelTableData}=  useStore()
  console.log(modelTableData)
  return (
    <div>
      
    </div>
  )
}

export default BrandModelHistogram
