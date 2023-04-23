import Carousel from 'react-bootstrap/Carousel';
import { CartItem } from '../cart-item/CartItem';
import StoreItem from '../store-item/StoreItem';
import storeItems from "../../data/items.json"

const CarouselSlide = ({ items }) => {
    console.log(storeItems);
    return (
        <Carousel>
            {storeItems.map(item => {
                return (
                <Carousel.Item>
                    <StoreItem {...item} />
                </Carousel.Item>
                )
                
            })}
        </Carousel>
    );
}

export default CarouselSlide;