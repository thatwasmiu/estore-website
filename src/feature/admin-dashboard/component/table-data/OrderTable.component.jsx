import { Button, ButtonGroup, Container, InputGroup, Modal, Table } from "react-bootstrap"
import "./TableData.style.css"
import { useAppDataContext } from "../../../../context/AppDataContext"
import { useContext, useEffect, useState } from "react"
import { UserLoginContext } from "../../../../context/UserLoginContext"
import TablePagination from "../pagination-table/TablePagination.component"

const OrderTable = () =>{
    const [orders, setOrderData] = useState([]);
    const { vouchers } = useAppDataContext();
    const { authUser } = useContext(UserLoginContext);
    console.log(orders);
    useEffect(() => {
      
        fetch('order.json')
        .then((res) => res.json())
        .then((d) => {
        setOrderData(d);
        });
    }, [])

    const [page, setPage] = useState(1);
    const maxEnd = Math.round(orders.length / 6 + 0.4);
    const end = getEndPage(page, maxEnd, orders.length);


    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const changePage = (n) => {
        if (maxEnd == 1) return;

        if (page == maxEnd) {

            if (n == "-1") {
                setPage(page => page - 1);
                return;
            }
            if (n == "-2") {
                setPage(1)
                return;
            }
            return;
        }
        if (page == 1) {

            if (n == 1) {
                setPage(page => page + 1);
                return;
            }
            if (n == 2) {
                setPage(maxEnd);
                return;
            }
            return;
        }

        if (n == 1) {
            setPage(page => page + 1);
            return;
        }
        if (n == 2) {
            setPage(Math.round(orders.length / 6 + 0.5));
            return;
        }
        if (n == "-1") {
            setPage(page => page - 1);
            return;
        }
        if (n == "-2") {
            setPage(1)
            return;
        }
    }

    const handleEditButton = (e) => {

    }

    // Action btn handle
    const handleDoneButton = (e) => {

        const order = orders.find(item => item.id == e.currentTarget.value);
        order.status = "ACCEPTED";
    
    }
    
    return (
        <Container className="table-middle">
            <TablePagination page={page} changePage={changePage} />
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Purchase Date</th>
                        <th>Product Purchases</th>
                        <td>Total Quantities</td>
                        <th>Voucher Name</th>
                        <th>Order Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.slice((page - 1) * 6, end).map(v => (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.purchaseDate}</td>
                            <td>{v.productPurchases.map((p) => <span key={p.productId}>{p.productId}{", "}</span>)}</td>
                            <td>{v.productPurchases.reduce((total, num) => total + Number(num.quantity), 0)}</td>
                            <td>{setVoucherName(vouchers.find((voucher) => voucher.id === v.voucherId))}</td>
                            <td>{v.orderPrice}</td>
                            <td>{v.status}</td>
                            <td> 
                                {v.status == "PENDING" && <Button size="sm" variant="info" value={v.id} onClick={handleDoneButton}>Done</Button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>

    )
}

export default OrderTable;

function getEndPage(page, maxEnd, size) {
    if (page < maxEnd)
      return (page - 1)*6 + 6;
    return size;
}

const setVoucherName = (voucher) => {
    console.log(voucher);
    return voucher == null ? "" : voucher.name;
}
