import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Dropdown, Form, InputGroup, Row } from "react-bootstrap";
import "./SearchBar.style.css"
import { useAppDataContext } from "../../../../context/AppDataContext";



const SearchBar = ({ getSearchKeyword, getTypeProduct }) => {
    const keywordRef = useRef("");
    const selectDisplayRef = useRef("Category");
    const { categories } = useAppDataContext();

    const onSearchBtnClick = () => {
        getSearchKeyword(keywordRef.current.value);
    }

    const onSelectElement = (e) => {
        const word = e.target.textContent;
        if (word === "All") {
            selectDisplayRef.current.textContent = "Category";
            getTypeProduct(word);
            return;
        }
        selectDisplayRef.current.textContent = word;
        getTypeProduct(selectDisplayRef.current.textContent);
    }

    return (
        <Container className="mt-4 p-2 bg-info text-white m-1" >
            <Row className="text-nowrap">
                <Col className="m-s-10">
                <Dropdown>
                    <Dropdown.Toggle variant="white" className="border border-dark searchbar-combobox" id="dropdown-basic" ref={selectDisplayRef} >
                    Catgory
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={onSelectElement}>All</Dropdown.Item>
                        {categories.map(item => (
                            <Dropdown.Item key={item.id} onClick={onSelectElement}>{item.type.toUpperCase()}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                </Col>

                <Col sm={4}>
                    <Form className="d-flex">
                        <Form.Control
                        ref={keywordRef}
                        type="search"
                        placeholder="Product Name"
                        className="me-2"
                        aria-label="Search"
                        onChange={onSearchBtnClick}
                        />
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar;