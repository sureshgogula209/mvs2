import React from 'react';
import aboutus from '../images/aboutus.png';

export default function about() {
  return (
    <section id="about" className="about pt-100 pb-100" tabindex="-1">
    <div className="container">
        <div className="row">
            <div className="col-md-6 mb-20">
                <h6 className="small-title">About Us</h6>
                <h4 className="title">About TOGO</h4>
                <p>Quisque urna nisi, congue sit amet lorem sit amet, sodales pretium risus. Nulla porta eget augue a consequat. Suspendisse auctor faucibus tortor quis malesuada. Pellentesque eget nisl non orci finibus tincidunt at eu nisl.</p>
                <p>Nulla porta eget augue a consequat. Suspendisse auctor faucibus tortor quis the drana. Pellentesque eget nisl non orci finibus tincidunt at eu nisl.</p>
                <p>Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi.</p>
            </div>
            <div className="col-md-6 mb-20 image">
                <div className="img"> <img src={aboutus} alt="" className='img-fluid'/>
                    {/* <a className="vid" href="https://www.youtube.com/watch?v=UrkXWG9WgC8">
                        <span className="vid-togo-button"><i className="ti-control-play"></i></span>
                    </a> */}
                </div>
            </div>
            <div className="col-md-12">
                <div className="yearimg">
                    <div className="numb">10</div>
                </div>
                <div className="year">
                <h6 className="small-title">IN ARCHITECTURE DESING</h6>
                <h4 className="title">Years of Experience</h4>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
