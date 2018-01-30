import React from 'react';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import { Carousel } from 'react-bootstrap';

export class SimpleSlider extends React.Component {



  render() {
    return (
      <Carousel>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src={require("./pic1.jpg")} />
    <Carousel.Caption>
      <h3>Qlearning Algorithm</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src={require("./pic2.png")} />
    <Carousel.Caption>
      <h3>Qlearning results</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src={require("./pic3.png")} />
    <Carousel.Caption>
      <h3>social learning results</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
  }
}