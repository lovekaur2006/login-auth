import React from 'react'
import img1 from '../../../public/dashboard.jpg'
function Dashboard() {
  return (
    <div style={{display:'flex'}}>
      <div className="left" style={{width:'40%', padding:'3rem'}}>
        <h1>This is a dashboard</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, odit vero amet soluta quos nihil iure deleniti quidem porro enim.</p>
      </div>
      <div className="right"  style={{width:'40%', padding:'3rem'}}>
        <img src={img1} alt="" width='100%' height='90%'/>
      </div>
    </div>
  )
}

export default Dashboard