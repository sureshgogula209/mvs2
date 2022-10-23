import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image  from '../images/image1.jpg';
import image2  from '../images/img1.jpeg';
import image3  from '../images/cr2.jpeg';
import image4  from '../images/cr3.jpeg';
import image5  from '../images/cr4.jpeg';
import image6  from '../images/cr5.jpeg';
import image7  from '../images/cr6.jpeg';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className='conatiner '>
            <div className='image-container'>

            <Carousel  axis="vertical"   >
        <div>
            <img alt="" src={image}  className="img-fluid"/>
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img alt="" src={image3} className="img-fluid"/>
            <p className="legend">Legend 2</p>
        </div>
        {/* <div>
            <img alt="" src={image2} className="img-fluid" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img alt="" src={image2} className="img-fluid"/>
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img alt="" src={image2} className="img-fluid"/>
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img alt="" src={image2} className="img-fluid" />
            <p className="legend">Legend 5</p>
        </div>
        <div>
            <img alt="" src={image2} className="img-fluid" />
            <p className="legend">Legend 6</p>
        </div> */}
    </Carousel>
    </div>
    </div>


        );
    }
}

export default Home;
