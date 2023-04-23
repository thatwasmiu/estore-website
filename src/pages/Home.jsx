import { useEffect } from "react"
import CarouselSlide from "../components/carousel-slide/CarouselSlide.componet";
import Carousel from 'react-bootstrap/Carousel';

export function Home() {
  const object = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY4MjMyMTg2Nn0.oyu-eXIxqcivJGchDWs_uZxuhKXnRGVYAGdLeMvbXfU`, // notice the Bearer before your token
    },
  }
  // useEffect(() => {
  //   fetch('http://localhost:8080/api/v1/products', object)
  //   .then((res) => res.json())
  //   .then((d) => console.log(d));
  // }, []);


  return <CarouselSlide />
}
