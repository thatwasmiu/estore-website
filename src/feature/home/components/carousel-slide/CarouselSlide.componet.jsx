import Carousel from 'react-bootstrap/Carousel';

import Slider from '../slider/Slider.component.jsx';
import { useAppDataContext } from '../../../../context/AppDataContext.jsx';

const CarouselSlide = ({ items }) => {
    const { products } = useAppDataContext();

    const featureProducts = products.sort(() => .5 - Math.random()).slice(0,4)
    return (
        <Carousel>
            {featureProducts.map(item => {
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