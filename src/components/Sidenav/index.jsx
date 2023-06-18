import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './index.css';
import logo from '../../assets/images/logo.svg'
import { Icon } from '@iconify/react';


const Sidenav = ({page_index}) => {
  return (
    <CDBSidebar
      className='hengrown-sidenav'
      textColor="#200E32" backgroundColor="#fff"
      breakpoint={999999}
      toggled={true}
    >
      <div className='hengrown-sidenav-logo'>
        <img src={logo} alt='Hengrown Logo'/>
      </div>

      <CDBSidebarContent className="hengrown-sidenav-content">
        <CDBSidebarMenu>
          <NavLink className={`hengrown-sidenav-link${page_index===0?' clicked':''}`} exact to="#" activeClassName="clicked">
            <Icon icon="bi:grid-fill" className='hengrown-sidenav-icon' />
          </NavLink>
          <NavLink className={`hengrown-sidenav-link${page_index===1?' clicked':''}`} exact to="#" activeClassName="clicked">
            <Icon icon="solar:bell-bold" className='hengrown-sidenav-icon' />
          </NavLink>
          <NavLink className={`hengrown-sidenav-link${page_index===2?' clicked':''}`} exact to="#" activeClassName="clicked">
            <Icon icon="solar:document-text-bold" vFlip={true} className='hengrown-sidenav-icon' />
          </NavLink>
          <NavLink className={`hengrown-sidenav-link${page_index===3?' clicked':''}`} exact to="#" activeClassName="clicked">
            <Icon icon="typcn:user" className='hengrown-sidenav-icon' />
          </NavLink>
          <NavLink className={`hengrown-sidenav-link${page_index===4?' clicked':''}`} exact to="#" activeClassName="clicked">
            <Icon icon="ic:round-settings" className='hengrown-sidenav-icon' />
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default Sidenav;