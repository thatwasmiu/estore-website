import React, { useContext } from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
    CDBIcon
  } from 'cdbreact';
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { UserLoginContext } from '../../../../context/UserLoginContext';

const Sidebar = () => {
    const {logout } = useContext(UserLoginContext);
    
    return (
        <>
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', margin: 0 }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                <a href="/admin" className="text-decoration-none" style={{ color: 'inherit' }}>
                    Dashboard
                </a>
                </CDBSidebarHeader>
                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <CDBSidebarMenuItem icon="th-large">
                            <NavLink to="/admin">Dashboard</NavLink>
                            </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="sticky-note">
                            <NavLink to="/admin/product">Product</NavLink>
                            </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="sticky-note" iconType="solid">
                            <NavLink to="/admin/voucher">Voucher</NavLink>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="sticky-note" iconType="solid">
                            <NavLink to="/admin/order">Order</NavLink>
                        </CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div className="sidebar-btn-wrapper" style={{ padding: '20px 5px',}}>
                    <Button variant='secondary' size='lg' onClick={logout}>Logout</Button>
                </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
        </>
    )
}

export default Sidebar;