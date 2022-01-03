import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='Footer'>
            <footer className="footer-section">
           
                <div className="container">

                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>128 Baghdad, sw 54321, Iraq</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>(+964) 7500123129</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>mail@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-content pt-5 pb-5">
                        <div className="row">

                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">

                                    <div className="footer-logo">
                                        <Link to="/"><img src="/img/logo.png" className="img-fluid" alt="logo" /></Link>
                                    </div>

                                    <div className="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                    </div>

                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                                    </div>

                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link to="/Home">Home</Link></li>
                                        <li><Link to="/About">about</Link></li>
                                        <li><Link to="/Shope">Shope</Link></li>
                                        <li><Link to="/Myaccount">portfolio</Link></li>
                                        <li><Link to="/Contact">Contact</Link></li>
                                        <li><Link to="/Top Rated Product">Top Rated Product</Link></li>
                                        <li><Link to="/Product Categories">Products Gategories</Link></li>
                                        <li><Link to="/Media">Media</Link></li>

                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i className="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="hr__" ></div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-4 col-lg-4 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2021, All Right Reserved <a href="#">Saif Jamal</a></p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 d-none d-lg-block text-center">
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link to="/Home">Home</Link></li>
                                        <li><Link to="/Terms">Terms</Link></li>
                                        <li><Link to="/Privacy">Privacy</Link></li>
                                        <li><Link to="/Policy">Policy</Link></li>
                                        <li><Link to="/Contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 text-right">
                                <div className="row align-center justify-content-center">
                                    <div className="col-md-12">
                                        <ul className="card-support d-flex ">
                                            <li className='list-style-none'>
                                                <img src="https://upload.wikimedia.org//wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png" height="30" alt="Visa" media-simple="true" />
                                            </li>
                                            <li className='list-style-none'>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png" height="30" alt="Master Card" media-simple="true" />
                                            </li>
                                            <li className='list-style-none'>
                                                <img src="https://storyv.com/wp-content/uploads/2020/04/am_amex_06.jpg" height="30" alt="American Express" media-simple="true" />
                                            </li>
                                            <li className='list-style-none'>
                                                <img src="https://pbs.twimg.com/profile_images/1440303464391737346/cLVCdOYu_400x400.png" height="30" alt="PayPal" media-simple="true" />
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
