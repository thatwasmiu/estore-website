import { Button, ButtonGroup, Col, Container, InputGroup, Modal, Row, Table } from "react-bootstrap"
import "./TableData.style.css"
import { useAppDataContext } from "../../../../context/AppDataContext"
import { useContext, useEffect, useState } from "react"
import { UserLoginContext } from "../../../../context/UserLoginContext"
import TablePagination from "../pagination-table/TablePagination.component"

const VoucherTable = () => {
    const { vouchers } = useAppDataContext();
    const [page, setPage] = useState(1);
    const maxEnd = Math.round(vouchers.length / 6 + 0.4);
    const end = getEndPage(page, maxEnd, vouchers.length);


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
            setPage(Math.round(vouchers.length / 6 + 0.5));
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
    const handleDeleteButton = (e) => {

        var removeIndex = vouchers.map(item => item.id).indexOf(Number(e.currentTarget.value));
        vouchers.splice(removeIndex, 1);
        (removeIndex >= 0) && setVoucherContext([...vouchers]);
    }

    return (
        <Container className="table-middle">
          <Modal show={show} onHide={handleClose} mt-2>
            <Modal.Header closeButton>
              <Modal.Title>Input Product Detail!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row> 
                <Col md="auto">
                  <label  htmlFor="1" className="mt-1 pl">{"1.  "}Id </label>
                  <br/>
                  <label  htmlFor="2" className="mt-1">{"2.  "}Voucher Name</label>
                  <br/>
                  <label  htmlFor="3" className="mt-1">{"3.  "}Discount Percentage </label>
                </Col>
                <Col >
                  <input type="text" id="1" required />  
                  <br/>
                  <input type="text" id="2" required/>
                  <br/>
                  <input type="text" id="3" required/>
                </Col>
              </Row>              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

            <TablePagination page={page} changePage={changePage} />
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Voucher Name</th>
                        <th>Discount Percentage</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {vouchers.slice((page - 1) * 6, end).map(v => (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.discountPercent}{"%"}</td>
                            <td>
                                <ButtonGroup>
                                    <Button size="sm" variant="danger" value={v.id} onClick={handleDeleteButton}>X</Button>
                                    <Button size="sm" variant="warning" onClick={handleShow}>E</Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>

    )
}


function getEndPage(page, maxEnd, size) {
    if (page < maxEnd)
      return (page - 1)*6 + 6;
    return size;
}
export default VoucherTable