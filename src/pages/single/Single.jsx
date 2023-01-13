import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import Tables from '../../components/table/Table'
function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Infromation</h1>
            <div className="editButton">Edit</div>
            <div className="item">
              <img src="https://avatars.mds.yandex.net/i?id=3ca9eadbb62dd2d8dfb74d501279bee9-5349176-images-thumbs&n=13"
                   alt="hr girl"
                  className='itemImg'/>
              <div className="details">
                <h2 className="itemTitle">William Smith</h2>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">mir21.07.2004@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+998935430714</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Tashkent, Yunusobod avenue, 10034</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">country</span>
                  <span className="itemValue">Uzbekistan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title={'last 6 months of spendgin of this user'}/>
          </div>
        </div>
        <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            <Tables />
        </div>
      </div>
    </div>
  )
}

export default Single