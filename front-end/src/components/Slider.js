import { Carousel } from 'react-bootstrap';
import './Slider.css'
import image1 from '../assets/imgs/slider-01.jpg';
import image2 from '../assets/imgs/slider-02.jpg';
import image3 from '../assets/imgs/slider-01.jpg';

const Slider = () => {
  return (
    <div className='slider-container'>
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="col-md-12">
						  	<h1 className="m-b-20"><strong>Welcome To <br/>A.N.Y Book Library</strong></h1>
						</div>  
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="col-md-12">
						  	<h1 className="m-b-20"><strong>Welcome To <br/>A.N.Y Book Library</strong></h1>
						</div>  
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
            <div className="col-md-12">
						  	<h1 className="m-b-20"><strong>Welcome To <br/>A.N.Y Book Library</strong></h1>
						</div>  
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider;