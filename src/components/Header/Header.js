import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption/HeaderOption'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SuppervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import { BusinessCenter, Chat, Notifications } from '@material-ui/icons'
import { useGlobalContext } from '../../context'
function Header() {
  const { logoutOfApp, user } = useGlobalContext()

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
          alt=''
        />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' placeholder='Serach' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SuppervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={Chat} title='Messaging' />
        <HeaderOption Icon={Notifications} title='Notifications' />
        <HeaderOption Icon={BusinessCenter} title='Jobs' />
        <HeaderOption
          avatar='https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png'
          title={user?.displayName || 'me'}
          onClick={logoutOfApp}
        />
      </div>
    </div>
  )
}

export default Header
