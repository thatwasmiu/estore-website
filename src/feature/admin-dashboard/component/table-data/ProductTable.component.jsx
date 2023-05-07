import { Button, ButtonGroup, Col, Container, InputGroup, Modal, Row, Table } from "react-bootstrap"
import "./TableData.style.css"
import { useAppDataContext } from "../../../../context/AppDataContext"
import { useContext, useEffect, useState } from "react"
import { UserLoginContext } from "../../../../context/UserLoginContext"
import TablePagination from "../pagination-table/TablePagination.component"

const ProductTable = ({ data}) => {
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
    }, [])

    const { authUser } = useContext(UserLoginContext);
    const { products, setProductContext } = useAppDataContext();

    // Pagination logic
    const [page, setPage] = useState(1); 
    const maxEnd = Math.round(products.length/6 + 0.4);
    const end = getEndPage(page, maxEnd, products.length);
    

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
          setPage(Math.round(products.length/6 + 0.5));
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
      
      var removeIndex = products.map(item => item.id).indexOf(Number(e.currentTarget.value));
      products.splice(removeIndex, 1);
      (removeIndex >= 0) && setProductContext([...products]);
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
                  <label  htmlFor="1" className="mt-1 pl">Product Name </label>
                  <br/>
                  <label  htmlFor="2" className="mt-1">Category </label>
                  <br/>
                  <label  htmlFor="3" className="mt-1">Description </label>
                  <br/>
                  <label  htmlFor="4" className="mt-1">Price </label>
                  <br/>
                  <label  htmlFor="5" className="mt-1">Image Url </label>
                </Col>
                <Col >
                  <input type="text" id="1" required />  
                  <br/>
                  <input type="text" id="2" required/>
                  <br/>
                  <input type="text" id="3" required/>
                  <br/>
                  <input type="text" id="4" required/>
                  <br/>
                  <input type="text" id="5" required/>
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

            <TablePagination page={page} changePage={changePage}/>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image Url</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.slice((page - 1)*6, end).map(p =>(
                        <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>{p.categoryId}</td>
                        <td>{p.description}</td>
                        <td>{p.price}</td>
                        <td>{p.imgUrl}</td>
                        <td>
                          <ButtonGroup>
                            <Button size="sm" variant="danger" value={p.id} onClick={handleDeleteButton}>X</Button>
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
export default ProductTable;

function getEndPage(page, maxEnd, size) {
    if (page < maxEnd)
      return (page - 1)*6 + 6;
    return size;
}