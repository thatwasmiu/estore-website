import { Card, Carousel } from "react-bootstrap"
import { formatCurrency } from "../../../../utilities/formatCurrency.js";
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
            <h5 className="fs-2 text-secondary">{name}</h5>
            <h6 className="ms-2 text-muted">{formatCurrency(price)}</h6>
        </Carousel.Caption>
    </div>
  )
}

export default Slider;