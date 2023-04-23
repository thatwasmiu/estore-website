import { Col, Row } from "react-bootstrap"
import StoreItem from "../components/store-item/StoreItem"
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
// import storeItems from "../data/items.json"

export function Store() {

  // const { isLoading, error, data } = useQuery('CartItemKey', () =>
  //   fetch('./items.json').then(res => {
  //     console.log('test')
  //     return res.json()
  //   }
      
  //   )
  // );

  // console.log(data);

  // if (isLoading) return 'Loading.................';

  const [storeItems, setCategories] = useState([]);
  useEffect(() => {
    fetch('./items.json')
    .then((res) => res.json())
    .then((d) => setCategories(d));
  }, []);

  // const storeItems = data;
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}


