import React from 'react'

export default function contactus() {
  return (
    <section id="contact" className="contact pt-100 pb-100" tabindex="-1">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 mb-20">
                        <h6 className="small-title">Get In Touch</h6>
                        <h4 className="title">Contact Us</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="item bg-4">
                            <div className="con">
                                <h5>LONDON</h5>
                                <p><i className="ti-home" ></i> 15 Crow Pl, Kensington, London, UK</p>
                                <p><i className="ti-mobile" ></i> +44 20 1234 4444</p>
                                <p><i className="ti-envelope" ></i> london@togo.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item bg-4">
                            <div className="con">
                                <h5>PARIS</h5>
                                <p><i className="ti-home" ></i> 5 Rue Saint-Roch, 75001 Paris, France</p>
                                <p><i className="ti-mobile" ></i> +33 1 1234 4444</p>
                                <p><i className="ti-envelope" ></i> paris@togo.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item bg-4">
                            <div className="con">
                                <h5>NEW YORK</h5>
                                <p><i className="ti-home"></i> 363 W 16th St, NY 10011, USA</p>
                                <p><i className="ti-mobile" ></i> +1 212 12 4444</p>
                                <p><i className="ti-envelope" ></i> newyork@togo.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-100">
                    <div className="col-md-4 offset-md-4">
                        <form className="contact__form">
                          
                            {/* <div className="row">
                                <div className="col-12">
                                    <div className="alert alert-success contact__msg" style="display: none" role="alert">
                                        Your message was sent successfully.
                                    </div>
                                </div>
                            </div> */}
                            
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <input name="name" type="text" placeholder="Your Name *" required=""/> 
                                </div>
                                <div className="col-md-12 form-group">
                                    <input name="email" type="email" placeholder="Your Email *" required=""/> 
                                </div>
                                <div className="col-md-12 form-group">
                                    <input name="phone" type="text" placeholder="Your Number *" required=""/> 
                                </div>
                                <div className="col-md-12 form-group">
                                    <input name="subject" type="text" placeholder="Subject *" required=""/> 
                                </div>
                                <div className="col-md-12 form-group">
                                    <textarea name="message" id="message" cols="30" rows="4" placeholder="Message *" required=""></textarea>
                                </div>
                                <div className="col-md-12">
                                    <input name="submit" type="submit" value="Send Message"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}
