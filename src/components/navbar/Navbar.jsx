import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ListIcon from '@mui/icons-material/List';
import avatar from './avatar.png'
// import {useProvider} from '../../context/context';
import { ShowDb } from '../../context/second_context';
function Navbar() {
  const {Toggle} = ShowDb();
  return (
    <div className='navbar'>
     <div className="wrapper">
        <div className="search">
         <input type="text" name="text" id="text" placeholder='search...' />
         <SearchIcon />
        </div>
        <div className='items'>
          <div className="item">
          <LanguageIcon className='icon'/>
           English
          </div>
          <div className="item" onClick={() => Toggle()}>
            <DarkModeIcon className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ModeCommentIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon className='icon'/>
          </div>
          <div className="item">
            <img src={avatar} alt="Avatar" className='avatar'/>
          </div>
        </div>
     </div> 
    </div>
  )
}

export default Navbar