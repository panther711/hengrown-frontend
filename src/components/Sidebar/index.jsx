import React from 'react';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import './index.css';
import { Icon } from '@iconify/react';
import avatar from "../../assets/images/avatar.jpg";
import { Button } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" toggled={false} className='hengrown-sidebar' breakpoint={850}>
      <div className='hengrown-sidebar-header'>
        <div className='hengrown-profile-box'>
          <div className='avatar'>
            <img alt='avatar' src={avatar} />
          </div>
          <div className='profile'>
            <h2>Michael Vaid</h2>
            <h6 className='address'>
              <Icon icon='mdi:address-marker-outline' className='address-marker' />
              Hongkong
            </h6>
          </div>
        </div>
        <Button variant="primary" type="submit" className='hengrown-button dotted'>
          Setup My Wallet
        </Button>
      </div>
      <CDBSidebarHeader className='hengrown-sidebar-toggle' prefix={
        <Icon icon="heroicons-outline:menu-alt-1" width="18" height="18" hFlip={true} />
      }>
        <div className='hengrown-sidebar-drawer-background'/>
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem className='hengrown-sidebar-item' icon="th-large">Dashboard</CDBSidebarMenuItem>
          <CDBSidebarMenuItem className='hengrown-sidebar-item' icon="sticky-note">Components</CDBSidebarMenuItem>
          <CDBSidebarMenuItem className='hengrown-sidebar-item' icon="chart-line" iconType="solid">
            metrics
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default Sidebar;