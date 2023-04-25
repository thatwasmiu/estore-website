import Carousel from 'react-bootstrap/Carousel';
import { CartItem } from '../cart-item/CartItem';
import StoreItem from '../store-item/StoreItem';
import storeItems from "../../data/items.json"
import Slider from '../slider/Slider.component';

const CarouselSlide = ({ items }) => {
    
    return (
        <Carousel>
            {storeItems.map(item => {
                return (
                    <Carousel.Item key={item.id} interval={1500}>
                        <Slider {...item} />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default CarouselSlide;