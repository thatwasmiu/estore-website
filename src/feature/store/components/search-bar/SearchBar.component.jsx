import { useRef } from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";



const SearchBar = ({ getSearchKeyword }) => {
    const keywordRef = useRef("");

    const onSearchBtnClick = () => {
        getSearchKeyword(keywordRef.current.value);
        // console.log(keywordRef.current.value);
    }

    return (
        <Container className="mt-4 p-4">
            <Row>
                <Col sm={4}>
                <Form className="d-flex">
                    <Form.Control
                    ref={keywordRef}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button onClick={onSearchBtnClick}>
                    Search
                    </Button>
                </Form>
                </Col>

                <Col className="m-s-10">
                <Dropdown>
                    <Dropdown.Toggle variant="white" className="border border-dark me-2" id="dropdown-basic">
                        Catgory
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar;