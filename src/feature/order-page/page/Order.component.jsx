import { useContext, useEffect, useRef, useState } from "react";
import { UserLoginContext } from "../../../context/UserLoginContext";
import { Button, Card, Col, Row } from "react-bootstrap";
import { formatCurrency } from "../../../utilities/formatCurrency";
import { useAppDataContext } from "../../../context/AppDataContext";
import "./Order.style.css"
import ChangeBtn from "../component/change-btn/ChangeBtn.component";

const Order = () => {
    const [orders, setOrderData] = useState([]);
    const { vouchers } = useAppDataContext();
    const {authUser} = useContext(UserLoginContext);
    
    useEffect(() => {
        fetch('order.json')
        .then((res) => res.json())
        .then((d) => {
        setOrderData(d);
        });
    }, [])
    console.log(orders)
    const handleClickBtn = (e) => {
        console.log(e.currentTarget.value);
        const order = orders.find(o => o.id == e.currentTarget.value);
        console.log(order);
        for (const order of orders) {
            if (order.id == e.currentTarget.value) 
                order.status = "REJECTED";
        }

        setOrderData([...orders])
        // const object = {
        //     method: 'GET',
        //     headers: {
        //       'Authorization': `Bearer ` + authUser.token.value, // notice the Bearer before your token
        //     }
        //   }
      
        // fetch('http://localhost:8080/api/v1/orders', object)
        // .then((res) => res.json())
        // .then((d) => {});


    }
    

    return (
        <>
            <h1>Your Orders</h1>
            <Row>
            {
                orders.map((o) => (
                    <Col className="m-1" key={o.id}>
                        <Card style={{ width: '18rem' }} bg={o.status == "PENDING" ? 'info' : 'secondary'}>
                            <ChangeBtn status={o.status} handleClickBtn={handleClickBtn} id={o.id}/>
                            <Card.Body>
                                <Card.Text>
                                    {"Products: "}{o.purchaseDate}
                                </Card.Text>
                                <Card.Text>
                                    {"Products: "}{o.productPurchases.map((p) => <span key={p.productId}>{p.productId}</span>)}{", "}
                                </Card.Text>
                                <Card.Text>
                                    {"Total quantity: "}{o.productPurchases.reduce((total, num) => total + Number(num.quantity), 0)}
                                </Card.Text>
                                <Card.Text>
                                    {"Voucher: "}{setVoucherName(vouchers.find((v) => v.id === o.voucherId))}
                                </Card.Text>
                                <Card.Text>{"Price: "}{formatCurrency(o.orderPrice)}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))          
            }
            </Row>
        </>
    )
}

export default Order;

const setVoucherName = (voucher) => {
    return voucher == null ? "" : voucher.name;
}