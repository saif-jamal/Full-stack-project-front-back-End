import React, { useEffect } from 'react';
import './About.css';
import $ from "jquery";
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function About() {

    const Products = useSelector((state) => state.Allapidata.Products);
    const ProductsImage = useSelector((state) => state.Allapidata.ProductImage);
    const ProductsTags = useSelector((state) => state.Allapidata.ProductTags);
    const Categories = useSelector((state) => state.Allapidata.Categories);
    const Users = useSelector((state) => state.Allapidata.Users);

    useEffect(() => {
        function slider(flag, numSlides) {
            let centerSlide = (flag % numSlides) + 1;
            let middleOfSlider = numSlides / 2;
            let xCoef = 300 * ((middleOfSlider - centerSlide) / middleOfSlider);

            if ($(window).width() <= 450) {
                xCoef = 0;
            }

            $(".slide-indicator").removeClass("active");
            $(".indicator-" + centerSlide).addClass("active");
            $(".slide.card").removeClass("active");
            $("#side-" + centerSlide).addClass("active");

            $("#side-" + centerSlide).css("z-index", "999");
            centerSlide <= numSlides / 2
                ? $("#side-" + centerSlide).css(
                    "transform",
                    `translateX(${xCoef - 100}%) scale(1.5)`
                )
                : $("#side-" + centerSlide).css(
                    "transform",
                    `translateX(${xCoef - 100}%) scale(1.5)`
                );

            for (let i = 1; i <= numSlides; i++) {
                if (i == centerSlide) {
                    continue;
                }
                $("#side-" + i).css("z-index", "9");
                if (i < centerSlide) {
                    $("#side-" + i).css("transform", `translateX(${xCoef}%) scale(1)`);
                    continue;
                }
                $("#side-" + i).css("transform", `translateX(${xCoef}%) scale(1)`);
            }
        }

        $(document).ready(function () {
            // get the nu,ber of slides
            let slideNum = $(".slide").length;
            let flag = 0;

            // Append the slide-indicators
            for (let i = 1; i <= slideNum; i++) {
                $(".slide-indicator-container").append(
                    `<div id="indicator-${i}" className="slide-indicator indicator-${i}"></div>`
                );
            }

            // first slide active by default
            $(".indicator-1").addClass("active");

            // add event listeners to switch to the slide selected when clicking the slide or clicking the slide-indicator
            let addListeners = [
                ".slide-indicator-container",
                "#main-slider",
            ];

            addListeners.forEach((item) => {
                $(item).click((e) => {
                    if (e.currentTarget.id == "main-slider") {
                        flag = e.target.parentElement.id.split("-")[1] - 1;
                    } else {
                        flag = e.target.id.split("-")[1] - 1;
                    }
                    slider(flag, slideNum);
                });
            });

            // Add functionality to next and previous buttons
            $("#nex").click(function () {
                flag = (flag + 1) % slideNum;
                slider(flag, slideNum);
            });
            $("#pre").click(function () {
                flag = Math.abs(flag - 1 + slideNum) % slideNum;
                slider(flag, slideNum);
            });
        });
    });



    return (
        <div className='About animate__animated  animate__fadeIn'>
            {/*about header*/}
            <div className="about_header text-center text-white pt-5" >

                {/*blur effect*/}
                <div className="blur-effect " style={{ backgroundImage: 'URL("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80")' }}></div>

                <h1 className='fa-3x pt-5 effect font-text-about'>We Are Here</h1>
                <div className="hr___ mt-2 mb-3 effect"></div>
                <h5 className='text-width mt-5 effect'>Lorem ipsum dolor sit odi incidunt officiis consequuntur exercitationem, magni ad laudantium quia perferendis tempore iste!</h5>
            </div>

            {/*about section1*/}
            <div className="about-section1 pt-lg-5 px-5">
                <div className="container">
                    <div className="row p-lg-5 d-flex justify-content-center ">

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 px-lg-5">
                            <p className='about_us'>About us</p>
                            <h1 className='font-text-section1'>We love excellence</h1>
                            <div className="hr___section1"></div>
                            <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor aspernatur, explicabo natus sapiente ab totam sed perferendis nihil nemo rem.</p>
                        </div>

                        <div className="col-12 col-sm-12 col-md-11 col-lg-6 fffont-text">
                            <p>Lorem ipsum dolor sit amet non odio,   ratione non iure animi iusto sint voluptatem eligendi. Ex, eaque laborum consequatur unde temporibus itaque odio accusantium alias beatae, dolorem sint rerum quidem, dolore sit eos officia quo ab. Voluptatibus sit velit nobis mollitia id?</p>
                            <p>Lorem ipsum dolor sit amet non odio,   ratione non iure animi iusto sint voluptatem eligendi. Ex, eaque laborum consequatur unde temporibus itaque odio accusantium alias beatae, dolorem sint rerum quidem, dolore sit eos officia quo ab. Voluptatibus sit velit nobis mollitia id?</p>
                        </div>

                    </div>
                </div>
            </div>
            {/*about section2*/}
            <div className="section2-slider p-5">
                <div className="container">
                    <div className="row">
                        {
                            Users.slice(0, 8).map(data => {
                                return (
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" key={data.user_id}>
                                        <div className="profile-container">
                                            <div className="info-user">
                                                <img className="profile-photo" src={data.userimage} />
                                                <div className="name-user">
                                                    <span className="name">{data.name}</span>
                                                    <span className="descrip">Web developer</span>
                                                </div>
                                            </div>
                                            <div className="bio-user">
                                                <p className="bio-info">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="buttons-options">
                                                    <div className="row">
                                                        <div className="col-12 ">
                                                            <a href={'mailto:' + data.email}><button className="btn btn-warning btn-sm"><i className="fa fa-envelope"></i> </button></a>
                                                            <a href={data.facebookprofile}><button className="btn btn-primary btn-sm"><i className="fab fa-facebook-square"></i> </button></a>
                                                            <a href={data.githubprofile}><button className="btn btn-dark btn-sm"><i className="fab fa-github"></i> </button></a>
                                                            <a href={data.instgramprofile}><button className="btn btn-light btn-sm"><i className="fab fa-instagram"></i> </button></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>

            </div>

            {/*about section3*/}
            <div className="container about_section3 my-5">
                <div className="row text-center">
                    <p className='section3_header'>Our Teams</p>
                    <h1 className='section3_text'>MEET WITH PROFESSIONALS</h1>
                    <div className="hr__section3"></div>
                </div>

                <div className="row mt-5 pt-4">

                    <Swiper
                        slidesPerView={1} spaceBetween={30} freeMode={true} centeredSlides={true}
                        // init: false,
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                        }
                        }
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: -220,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: -410,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: -420,
                            },
                        }}

                        className="mySwiper"
                    >
                        {
                            Users.slice(0,10).map(data => {
                                return (
                                    <SwiperSlide key={data.user_id}>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="our-team">
                                                <div className="pic">
                                                    <img src={data.userimage} alt="team member" className="img-responsive" />
                                                </div>
                                                <div className="content">
                                                    <h3 className="title text-white">{data.name}</h3>
                                                    <span className="post">{data.email}</span>
                                                    <ul className="social">
                                                        <li><a href={data.facebookprofile} className="fab fa-facebook"></a></li>
                                                        <li><a href={data.twitterprofile} className="fab fa-twitter"></a></li>
                                                        <li><a href={data.linkedlnprofile} className="fab fa-linkedin"></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }



                    </Swiper>

                </div>
            </div>




        </div>
    )
}

export default About
