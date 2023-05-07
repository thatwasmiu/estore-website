import { Route, Routes } from "react-router-dom"
import { Home } from "../../home/page/home/Home";
import { Navbar } from "../../../components/navbar/Navbar";
import { useContext, useState } from "react";
import Sidebar from "../component/sidebar/SideBar.component";
import AppFrame from "../component/app-frame/AppFrame.component";
import { Button, Col, Container, Row } from "react-bootstrap";
import TableData from "../component/table-data/ProductTable.component";
import { UserLoginContext } from "../../../context/UserLoginContext";

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
                    </Routes>
                    
                </Col>
            </Row>
        </div>        
    )
}

export default AdminDashboard;