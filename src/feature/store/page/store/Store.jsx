import { Col, Container, Row } from "react-bootstrap"
import StoreItem from "../../components/store-item/StoreItem.jsx"
import { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useAppDataContext } from "../../../../context/AppDataContext.jsx";
import SearchBar from "../../components/search-bar/SearchBar.component.jsx";
import Footer from "../../../../components/footer/Footer.component.jsx";
import PaginationComponent from "../../components/Pagination/Pagination.component.jsx";
// import storeItems from "../data/items.json"

export function Store() {

  const [filterKeyword, setFilterKeyword] = useState("");
  const [page, setPage] = useState(1);
  const { products } = useAppDataContext();
  
  let productList = products.filter(
    item => 
    item.name.toLocaleLowerCase().includes(filterKeyword.toLocaleLowerCase() )
  ); 
  
  const getSearchKeyword = (keyword) => {
    
    setFilterKeyword(keyword);
    setPage(1);
  }

  const maxEnd = Math.round(productList.length/6 + 0.4);
  const end = getEndPage(page, maxEnd, productList.length);
  

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
      setPage(Math.round(productList.length/6 + 0.5));
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
  
  return (
    <>
      <Outlet/>
      <h1>Store</h1>
      <SearchBar getSearchKeyword={getSearchKeyword}/>
      <Row md={2} xs={1} lg={3} className="g-3">
        {productList.slice((page - 1)*6, end).map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
      <PaginationComponent page={page} changePage={changePage}/>
      
    </>
  )
}

function getEndPage(page, maxEnd, size) {
  if (page < maxEnd)
    return (page - 1)*6 + 6;
  return size;
}
