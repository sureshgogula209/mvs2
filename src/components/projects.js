import React, { useState } from 'react';
import './projectstyle.scss';

export default function Projects() {
  const [projects,setProjects]=useState([
    {"id":'1','img':'' }
  ]);
  return (
    <div className='container-fluid'>
      <div className="row mt-3">
        <div className="col-md-12 mb-20 text-center">
          <h6 className="small-title">Portfolio</h6>
          <h4 className="title">Our Projects</h4>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12 p-2'>
        <div className="container-box">
          <div className="content">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
              <div className="content-overlay"></div>
              <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">This is a title</h3>
                <p className="content-text">This is a short description</p>
              </div>
            </a>
          </div>
        </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 p-2'>
        <div className="container-box">
          <div className="content">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
              <div className="content-overlay"></div>
              <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">This is a title</h3>
                <p className="content-text">This is a short description</p>
              </div>
            </a>
          </div>
        </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 p-2'>
        <div className="container-box">
          <div className="content">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
              <div className="content-overlay"></div>
              <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">This is a title</h3>
                <p className="content-text">This is a short description</p>
              </div>
            </a>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}
