import { Card } from "react-bootstrap";

const HardCard = ({imgUrl, text}) => {
    return (
        <Card className="bg-dark text-warning">
          <Card.Img src={imgUrl} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title><h2>{text}</h2></Card.Title>
            
          </Card.ImgOverlay>
        </Card>
      );
}

export default HardCard;