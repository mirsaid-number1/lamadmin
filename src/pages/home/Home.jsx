import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import Chart from '../../components/chart/Chart';
import Tables from '../../components/table/Table';
import Featured from '../../components/featured/Featured';

import './home.scss'; 
function Home() {
  return (
    <div className='user'>
      <Sidebar />
      <div className="userContainer">
        <Navbar />
        <div className="widgets">
        <Widget type='user'/>
        <Widget type='order'/>
        <Widget type='earning'/>
        <Widget type='balance'/>
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1} title={'Last 6 months revenue'}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest transactions
          </div>
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default Home