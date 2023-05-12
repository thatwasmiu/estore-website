import { Route, Routes } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import Sidebar from "../component/sidebar/SideBar.component";
import { Button, Col, Container, Row } from "react-bootstrap";
import TableData from "../component/table-data/ProductTable.component";
import { UserLoginContext } from "../../../context/UserLoginContext";
import VoucherTable from "../component/table-data/VoucherTable.component";
import OrderTable from "../component/table-data/OrderTable.component";
import { useAppDataContext } from "../../../context/AppDataContext";

const AdminDashboard = () => {
      
    const {authUser} = useContext(UserLoginContext); 

    if (authUser.user === null ) {
        const url = "/login";
        window.location.replace(url);
        return
    }

    if (authUser.user.role !== "ADMIN") {
        const url = "/";
        window.location.replace(url);
        return
    }

    const { setProductContext, setVoucherContext } = useAppDataContext();
    useEffect(() => {
        const object = {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ` + authUser.token.value, // notice the Bearer before your token
            }
          }
      
        fetch('http://localhost:8080/api/v1/products', object)
        .then((res) => res.json())
        .then((d) => {
        setProductContext(d);
        });

        fetch('http://localhost:8080/api/v1/vouchers', object)
        .then((res) => res.json())
        .then((d) => {
        setVoucherContext(d);
        });
    }, [])

    const [toggle, setToggle] = useState(true)    
    const Toggle = () => {        
        setToggle(!toggle)    
    }

    return (    
        <div className="bg-secondary fixed-top">
            <Row>
                <Col md="auto">
                    <Sidebar />
                </Col>
                <Col>
                    <Routes>
                        <Route path="/product" element={<TableData />}></Route>
                        <Route path="/order" element={<OrderTable />}></Route>
                        <Route path="voucher" element={<VoucherTable />}></Route>
                    </Routes>
                    
                </Col>
            </Row>
        </div>        
    )
}

export default AdminDashboard;