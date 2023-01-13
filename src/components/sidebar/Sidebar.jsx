import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ViewStreamTwoToneIcon from '@mui/icons-material/ViewStreamTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import MedicalInformationTwoToneIcon from '@mui/icons-material/MedicalInformationTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
// import {useProvider} from '../../context/context'
import { ShowDb } from '../../context/second_context';
function Sidebar() {
  let {setLight,setDark} = ShowDb();
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to='/' style={{textDecoration:'none'}}>
          <span className="logo">MirsaidAdmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
          <Link to='/users/1' style={{textDecoration:'none'}}>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </Link>
          </li>
          <p className="title">List</p>
          <li>
          <Link to='/users' style={{textDecoration:'none'}}>
            <PeopleIcon className='icon'/>
            <span>Users</span>
          </Link>
          </li>
          <li>
          <Link to='/products' style={{textDecoration:'none'}}>
            <AddBusinessIcon className='icon'/>
            <span>Products</span>
          </Link>
          </li>
          <li>
            <ViewStreamTwoToneIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingTwoToneIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="title">Userful</p>
          <li>
            <QueryStatsTwoToneIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveTwoToneIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>
          <li>
            <MedicalInformationTwoToneIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <LoginTwoToneIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountBoxIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => setLight()}></div>
        <div className="colorOption" onClick={() => setDark()}></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar