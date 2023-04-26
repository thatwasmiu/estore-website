 import Carousel from 'react-bootstrap/Carousel';
import { CartItem } from '../../../../components/cart-item/CartItem.jsx';
import StoreItem from '../../../store/components/store-item/StoreItem.jsx';
import storeItems from "../../../../data/items.json"
import Slider from '../slider/Slider.component.jsx';

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