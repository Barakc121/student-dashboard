import React from 'react'
import './stats.css'

function StatsCard({number,text}) {
  return (
    <div className='stats-bar'>

       <label className='stats-number'>{number}</label> 
       <label className='stats-label'>{text}</label>       
    </div>
  )
}

export default StatsCard
