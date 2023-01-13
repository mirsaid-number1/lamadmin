import React from 'react'
import './chart.scss'
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({aspect,title}) {
  const data = [
   {name:'January',Total:300},
   {name:'February',Total:756},
   {name:'March',Total:546},
   {name:'April',Total:90},
   {name:'May',Total:898},
   {name:'June',Total:690},
  ];
  
  return (
    <div className='chart'>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#6439ff" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='grey'/>
  <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="black" fillOpacity={1} fill="url(#total)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart