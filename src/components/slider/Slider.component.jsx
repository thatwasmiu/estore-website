import { Card, Carousel } from "react-bootstrap"
import { formatCurrency } from "../../utilities/formatCurrency";
import "./Slider.style.css";


const Slider = ({ name, price, imgUrl }) => {
  return (
    <div className="slide-container">
        <div className="slide-card">
            <img
                className="slide-img" src={imgUrl} alt="slide"
            />
        </div>
        <Carousel.Caption className="slide-caption">
            <h3 className="fs-2">{name}</h3>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Carousel.Caption>
    </div>
  )
}

export default Slider;