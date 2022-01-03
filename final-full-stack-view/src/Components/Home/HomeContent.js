import React, { useEffect, useState } from 'react';
import './HomeContent.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from 'react-redux';
import { DirectionsLink } from '../Store/AllActions';
import { useNavigate } from 'react-router-dom';
import { getapiProducts, getapiProductsImage, getapiProductsTags, getapiCategories, getapiUsers, wishlist_data, ShoppingBasket } from '../Store/AllActions';


// import $ from 'jquery';
import axios from 'axios';

// sweatalert2 import 
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


// import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/core';
import { data } from 'jquery';
import ShopeCard from '../ShopeCard/ShopeCard';

SwiperCore.use([Autoplay, EffectCoverflow, Pagination, Navigation]);



function HomeContent() {
  const [userInfo, setUserinfo] = useState([]);


  // import all data from api by redux 
  const Products = useSelector((state) => state.Allapidata.Products);
  const ProductsImage = useSelector((state) => state.Allapidata.ProductImage);
  const ProductsTags = useSelector((state) => state.Allapidata.ProductTags);
  const Categories = useSelector((state) => state.Allapidata.Categories);
  const Users = useSelector((state) => state.Allapidata.Users);
  const wishlist_data_view = useSelector((state) => state.Allapidata.wishlist_data);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  var check_hov = 0;
  var get_box;

function refreshCartshope(){
    // import all shoppingbasket with info  from api 
    axios.get('http://127.0.0.1:8000/api/product/showallshoppingbasket')
    .then(res => {
      dispatch(ShoppingBasket(res.data.data));
    });
}

  useEffect(() => {

    if (localStorage.getItem('userdata') && localStorage.getItem('userdata') == 'true') {
      var nowdate = new Date();
      if (localStorage.getItem('timer') <= nowdate) {
        localStorage.removeItem('userdata');
        localStorage.removeItem('timer');
        localStorage.removeItem('userInfo');
        navigate('/Login')
      }
      var user_info = localStorage.getItem('userInfo')
      setUserinfo(JSON.parse(user_info));
      // Retrieve the object from storage


    } else {
      setUserinfo([]);
    }


  }, []);


  useEffect(() => {
    const box_home_ = document.querySelectorAll('.box_home_header');
    const text_header = document.querySelectorAll('.home_header_text');
    const text_big_header = document.querySelectorAll('.home_header_big_text');
    const button_header = document.querySelectorAll('.button_header');
    window.addEventListener('DOMContentLoaded', () => {
      box_home_.forEach(ele => {
        if (ele.classList.contains('animate__delay-1s')) {

          text_header.forEach(ele1 => {

            ele1.classList.add('marginup');
            setTimeout(() => {
              ele1.classList.remove('marginup');

            }, 1000);

          });


          button_header.forEach(ele1 => {

            ele1.classList.add('marginup');
            setTimeout(() => {
              ele1.classList.remove('marginup');

            }, 1000);

          });


        }
      });

    });






    // text_big_header.forEach(ele=>{
    //   if(ele.getAttribute('class','animate__fadeIn')){

    //   }else{

    //   }
    // });


    // button_header.forEach(ele=>{
    //   if(ele.classList.contains('class','animate__slideInUp')){
    //     ele.classList.remove('margindown');
    //   }else{
    //     ele.classList.add('margindown');

    //   }
    // });



  })

  /*
.
.
. 
*/

  // hover on box of section 5
  useEffect(() => {
    const box_sec5 = document.querySelectorAll('.box_section5__top');
    const img1_sec5 = document.querySelectorAll('.img1');


    // moues enter 
    box_sec5[0].addEventListener('mouseover', () => {
      img1_sec5[0].classList.add('animate__heartBeat');
    });

    box_sec5[1].addEventListener('mouseover', () => {
      img1_sec5[1].classList.add('animate__heartBeat');
    });

    box_sec5[2].addEventListener('mouseover', () => {
      img1_sec5[2].classList.add('animate__heartBeat');
    });
    box_sec5[3].addEventListener('mouseover', () => {
      img1_sec5[3].classList.add('animate__heartBeat');
    });

    // mouse out 
    box_sec5[0].addEventListener('mouseout', () => {
      img1_sec5[0].classList.remove('animate__heartBeat');
    });

    box_sec5[1].addEventListener('mouseout', () => {
      img1_sec5[1].classList.remove('animate__heartBeat');
    });

    box_sec5[2].addEventListener('mouseout', () => {
      img1_sec5[2].classList.remove('animate__heartBeat');
    });
    box_sec5[3].addEventListener('mouseout', () => {
      img1_sec5[3].classList.remove('animate__heartBeat');
    });


  })

  /*
.
.
. 
*/

  // section2 hover 
  useEffect(() => {


    // const box_section2_effect_=document.quer 
    const box_section2_home = document.querySelectorAll('.box_all_card_section2');

    box_section2_home.forEach(hov_ele => {

      hov_ele.addEventListener('mouseenter', () => {
        hov_ele.querySelector('.box_effect_section2_home').classList.add('d-flex');
        hov_ele.querySelector('.box_effect_section2_home').classList.remove('animate__fadeOutUp');
        hov_ele.querySelector('.box_effect_section2_home').classList.add('animate__fadeInDown');
        hov_ele.querySelector('.img_section2_home').style.transform = 'scaleX(-1)';
        hov_ele.querySelector('.img_section2_home').classList.remove('animate__pulse');
        hov_ele.querySelector('.img_section2_home').classList.add('animate__fadeIn');
        check_hov = 1;

      });

      hov_ele.addEventListener('mouseleave', () => {

        hov_ele.querySelector('.img_section2_home').style.transform = 'scaleX(1)';
        hov_ele.querySelector('.img_section2_home').classList.remove('animate__fadeIn');
        hov_ele.querySelector('.img_section2_home').classList.add('animate__pulse');
        hov_ele.querySelector('.box_effect_section2_home').classList.remove('animate__fadeInDown');
        hov_ele.querySelector('.box_effect_section2_home').classList.add('animate__fadeOutUp');
        setTimeout(() => {
          hov_ele.querySelector('.box_effect_section2_home').classList.remove('d-flex');
        }, 300);
        check_hov = 0;
      });

      if (check_hov == 1) {
        hov_ele.querySelector('.box_effect_section2_home').classList.add('d-flex');
      } else {
        hov_ele.querySelector('.box_effect_section2_home').classList.remove('d-flex');
      }

    });






  });

  /*
  .
  .
  . 
  */

  // home header section /////////////////////////////
  var check_img = 0;
  var check_prod = 0;

  var products_header = [];
  for (let i = 0; i < 5; i++) {
    check_prod = 0;
    for (let j = 0; j < ProductsImage.length; j++) {

      if (Products[i].id == ProductsImage[j].product_id) {


        if (check_prod == 0) {
          if (check_img == 0) {
            products_header.push({
              active: true,
              id: Products[i].id,
              productname_en: Products[i].productname_en,
              product_img: ProductsImage[j].imageProductName
            });
            check_img = 1;
            check_prod = 1;
          }

          else {
            products_header.push({
              active: false,
              id: Products[i].id,
              productname_en: Products[i].productname_en,
              product_img: ProductsImage[j].imageProductName
            });
            check_prod = 1;
          }
        }


      }

    }

  }
  // end home part ////////////////////////////////

  /*
  .
  .
  . 
  */

  //Home section 2...................
  var check_section2_home = 0;
  var product_length = 0;
  var products_section2_home = Array();

  for (var i = (Products.length - 1); i >= 0; i--) {
    check_section2_home = 0;
    for (let j = (ProductsImage.length - 1); j >= 0; j--) {

      if (Products[i].id == ProductsImage[j].product_id) {



        if (check_section2_home == 0 && product_length < 8) {
          products_section2_home.push({
            id: Products[i].id,
            productname_en: Products[i].productname_en,
            productname_ar: Products[i].productname_ar,
            productDesc_en: Products[i].descriptions_en,
            productDesc_ar: Products[i].descriptions_ar,


            price: Products[i].price,
            discountprice: Products[i].discountprice,
            dayfordiscount: Products[i].dayfordiscount,
            product_img: ProductsImage[j].imageProductName,
            user_id: Products[i].user_id,
            category_id: Products[i].category_id
          })
          product_length++;
          check_section2_home = 1;
        }


      }

    }

  }

  // end hoem section 2..............



  /*
  .
  .
  . 
  */

  //Home section 4...................
  var check_section4_home = 0;
  var product_length_4 = 0;
  var products_section4_home = Array();

  for (var i = 0; i < Products.length; i++) {
    check_section4_home = 0;
    for (let j = 0; j < ProductsImage.length; j++) {

      if (Products[i].id == ProductsImage[j].product_id) {



        if (check_section4_home == 0 && product_length_4 < 8) {
          products_section4_home.push({
            id: Products[i].id,
            productname_en: Products[i].productname_en,
            productname_ar: Products[i].productname_ar,
            productDesc_en: Products[i].descriptions_en,
            productDesc_ar: Products[i].descriptions_ar,
            price: Products[i].price,
            discountprice: Products[i].discountprice,
            dayfordiscount: Products[i].dayfordiscount,
            product_img: ProductsImage[j].imageProductName,
            user_id: Products[i].user_id,
            category_id: Products[i].category_id
          })
          product_length_4++;
          check_section4_home = 1;
        }


      }

    }

  }

  // end hoem section 2..............


  // direction for product ........................................................
  const goToDirection = (id) => {

    localStorage.setItem('product_id', id);
    navigate(('/shope/ProductView' + id));

  }

  // end 


  // go to shope page 
  const sortProductAccourdingToCategory = (category, category_id) => {
    localStorage.setItem('sortCategor', category);
    localStorage.setItem('Categor_id', category_id);

    localStorage.setItem('sortTags', '');
    localStorage.setItem('Tags_product_id', '');

    navigate('/shope');

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  // end 

  // add product to ShopeCard but check first login
  const addToCartshope_check_loginAlso = (id, number_of_quantity = 1, product_image) => {
    if (localStorage.getItem('userdata') == 'true') {


      if (id > 0 && number_of_quantity > 0) {

        var data_add_cart = {
          user_id: userInfo.User_id,
          product_id: id,
          product_quantity: number_of_quantity
        }

        axios({
          method: 'post',
          url: 'http://localhost:8000/api/product/addToCartShope',
          data: data_add_cart,
          headers: { 'Content-Type': 'application/json' }
        })
          .then(function (response) {
            if (response.data.status == 200) {

              if (localStorage.getItem('notivication_number') !== null) {
                localStorage.setItem('notivication_number', (parseInt(localStorage.getItem('notivication_number')) + 1));
              } else {
                localStorage.setItem('notivication_number', 1);
              }

              let MySwal = withReactContent(Swal);
              Swal.fire({
                title: 'success!',
                text: 'Product add to Cart Shope.',
                imageUrl: product_image,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'product image',
              });
              refreshCartshope();

            }
          })
          .catch(function (error) {
            let MySwal = withReactContent(Swal);
            MySwal.fire({
              position: 'top-end',
              icon: 'error',
              title: error,
              showConfirmButton: false,
              timer: 3500
            });
          });
      }

    } else {
      let MySwal = withReactContent(Swal)

      MySwal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Must Login first',
        showConfirmButton: false,
        timer: 1500
      })

    }

  }

  // end 

  // add product to wishlist 
  const addproduct_to_wishlist = (product_id, prod_name_en, pro_name_ar, description_en, description_ar, product_image, pro_price, prod_discountprice) => {



    if (localStorage.getItem('userdata') == 'true') {

      let check_wislist = 0;
      for (let i = 0; i < wishlist_data_view.length; i++) {
        if (wishlist_data_view[i].product_id === product_id) {
          check_wislist = 1;
        }
      }

      if (check_wislist == 0) {

        var data_add_cart = {
          product_id: product_id,
          user_id: userInfo.User_id,
          product_name_en: prod_name_en,
          product_name_ar: pro_name_ar,
          product_descri_en: description_en,
          product_descri_ar: description_ar,
          product_img: product_image,
          product_price: pro_price,
          product_discountprice: prod_discountprice
        }

        axios({
          method: 'post',
          url: 'http://localhost:8000/api/product/Wishlist/insert',
          data: data_add_cart,
          headers: { 'Content-Type': 'application/json' }
        })
          .then(function (response) {
            if (response.data.status == 200) {

              if (localStorage.getItem('whishlist_number') !== null) {
                localStorage.setItem('whishlist_number', (parseInt(localStorage.getItem('whishlist_number')) + 1));
              } else {
                localStorage.setItem('whishlist_number', 1);
              }

              let MySwal = withReactContent(Swal);
              Swal.fire({
                title: 'success!',
                text: 'Product add to WishList.',
                imageUrl: product_image,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'product image',
              });

              axios.get('http://127.0.0.1:8000/api/product/Wishlist/show')
                .then(res => {
                  dispatch(wishlist_data(res.data.data));

                });

            } else if (response.data.status == 404) {
              let MySwal = withReactContent(Swal);
              MySwal.fire({
                position: 'top-end',
                icon: 'info',
                title: 'Product exists in wishlist',
                showConfirmButton: false,
                timer: 3500
              });
            }
          })
          .catch(function (error) {
            let MySwal = withReactContent(Swal);
            MySwal.fire({
              position: 'top-end',
              icon: 'error',
              title: error,
              showConfirmButton: false,
              timer: 3500
            });
          });
      } else {
        let MySwal = withReactContent(Swal)

        Swal.fire({
          position: 'top-end',
          icon: 'info',
          title: 'Product exists in wishlist',
          showConfirmButton: false,
          timer: 3500
        })
      }

    } else {
      let MySwal = withReactContent(Swal)

      MySwal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Must Login first',
        showConfirmButton: false,
        timer: 1500
      })

    }

  }


  // end 

const gotoShope=(e)=>{
  navigate('/Shope');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

  return (
    <div className='HomeContent animate__animated animate__fadeIn'>

      {/*header of home*/}
      <div className="header_home my-5" >
        <div className="container home_container">
          <div className="row">
            <div className="col-md-12">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">


                  {
                    products_header.map(del => {
                      return (
                        del.active ?
                          <div className="carousel-item active  position-relative" key={del.id}>
                            <div className="p-5 box_home_header text-center animate__animated animate__zoomIn animate__delay-1s ">
                              <p className=' home_header_text  animate__animated animate__slideInDown animate__delay-1s'>up to 27% Discount</p>
                              <h1 className='home_header_big_text animate__animated animate__fadeIn animate__delay-1s'>{del.productname_en}</h1>
                              <button className='mt-3  button_header animate__animated animate__slideInUp animate__delay-1s' onClick={goToDirection.bind(this, del.id)}>Shope Now</button>
                            </div>
                            <img src={del.product_img} className="d-block  img_home_header" alt="..." />
                          </div>
                          :
                          <div className="carousel-item   position-relative" key={del.id}>
                            <div className="p-5 box_home_header text-center animate__animated animate__zoomIn animate__delay-1s ">
                              <p className=' home_header_text  animate__animated animate__slideInDown animate__delay-1s'>up to 27% Discount</p>
                              <h1 className='home_header_big_text animate__animated animate__fadeIn animate__delay-1s'>{del.productname_en}</h1>
                              <button className='mt-3  button_header animate__animated animate__slideInUp animate__delay-1s' onClick={goToDirection.bind(this, del.id)}>Shope Now</button>
                            </div>
                            <img src={del.product_img} className="d-block  img_home_header" alt="..." />
                          </div>
                      )
                    })
                  }




                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/*thumb of home header*/}
      <div className="thumb_home_header my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 px-5 over">
              <Swiper
                slidesPerView={1} spaceBetween={0} freeMode={true}
                // init: false,
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }
                }
                loop={true}
                navigation={true}
                breakpoints={{
                  369: {
                    slidesPerView: 2,
                    spaceBetween: -5,
                  },
                  439: {
                    slidesPerView: 2,
                    spaceBetween: -40,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: -40,
                  },
                  666: {
                    slidesPerView: 2,
                    spaceBetween: -50,
                  },

                  768: {
                    slidesPerView: 3,
                    spaceBetween: -10,
                  },
                  956: {
                    slidesPerView: 3,
                    spaceBetween: -10,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: -60,
                  },
                  1407: {
                    slidesPerView: 4,
                    spaceBetween: -360,
                  }
                }}
                autoplay={{
                  "delay": 2500,
                  "disableOnInteraction": true
                }}

                className="mySwiper px-5"
              >
                {
                  Categories.map(cat => {
                    return (
                      <SwiperSlide key={cat.id}>
                        <div className="box_thumb_home text-center position-relative" >
                          <img src={cat.categoryimage} alt="team member" className="img-fluid img-responsive" />
                          <p className=' text_thumb_home'>{cat.categoryname_en}</p>
                          <a className='Shope_category ' onClick={sortProductAccourdingToCategory.bind(this, cat.categoryname_en, cat.id)}>Shop Now >></a>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }


              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/*home section 1*/}
      <div className="home_section1">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div className='Container_for_img my-2 mx-2'>
                <img className='img_section1_home img-fluid ' src="https://images.unsplash.com/photo-1560671563-7a75c5838af3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
              </div>

              <div className='Container_for_img my-2 mx-2'>
                <img className='img_section1_home img-fluid ' src="https://images.unsplash.com/photo-1632633173522-47456de71b76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
              </div>

            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div className='Container_for_img my-2 mx-2'>
                <img className='img_section1_home img-fluid' src="https://images.samsung.com/eg/smartphones/galaxy-note20/models/images/galaxy-note20_models_kv_end_m.jpg" alt="" />
              </div>

              <div className='Container_for_img my-2 mx-2'>
                <img className='img_section1_home img-fluid' src="https://unboxinggeeks.com/wp-content/uploads/2021/01/%D9%87%D9%88%D8%A7%D9%88%D9%8A-%D9%85%D9%8A%D8%AA-40-pro.jpg" alt="" />
              </div>
            </div>


            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div className="box_home_section1 ms-4 mt-5 ps-4">
                <p className='text_section1_home'>Our Little Story!!</p>
                <h1 className='text_big_home_section1'>WELCOME TO STORE!</h1>
                <div className="hr__home_section1"></div>
                <p className='p_section1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className='text-muted'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard…</p>
                <button className='button_home_section1'>Read More</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/*home section2*/}
      <div className="home_section2" >
        <div className="container">
          <div className="row d-flex justify-content-center justify-content-lg-start  align-items-center  section2__cards">

            <div className="col-md-12">
              <div className="row my-5">

                <div className="col-12 col-sm-12 col-md-4 col-lg-3 my-2">
                  <span className='latest_product_section2 ms-4 ms-md-0'>Latest Products</span>
                </div>

                <div className="col-12 col-sm-12 col-md-8 col-lg-9 ms-auto-md ">
                  <ul className='ms-auto-md list_section3 d-flex text-left text-right-lg justify-content-md-end'>
                    <li>FeaturedNew</li>
                    <li>ArrivalBest </li>
                    <li>Sellers</li>
                  </ul>
                </div>


              </div>
            </div>
            <Link to="/ProductView" className='text-decoration-none d-none' id='link_change' ></Link>
            {
              products_section2_home.map(data => {
                return (
                  <div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3 my-3 box_all_card_section2" key={data.id}>
                    <div className="box_section2_product card">

                      <img src={data.product_img} onClick={goToDirection.bind(this, data.id)} alt="" className="animate__animated img_section2_home card-img-top" />

                      <div className="box_text p-2">

                        <div className="box_stars d-flex my-2">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>

                        <p className='text_section2_product' onClick={goToDirection.bind(this, data.id)}>{data.productname_en}</p>

                        {
                          data.discountprice == 0 ?
                            <div className="d-flex">
                              <span className='text_section2_discount'>${data.discountprice}</span>
                              <span className='text_section2_price'>${data.price}</span>

                            </div>
                            :
                            <div className="d-flex">
                              <span className='text_section2_discount'>${data.price}</span>
                              <span className='text_section2_price'>${data.discountprice}</span>
                            </div>
                        }

                        <div className="box_effect_section2_home animate__animated ">

                          <div className="div_section2_home d-flex justify-content-center align-items-center" onClick={addproduct_to_wishlist.bind(this, data.id, data.productname_en, data.productname_ar, data.productDesc_en, data.productDesc_ar, data.product_img, data.price, data.discountprice)}>
                            <i className='fas fa-heart icon_section2_home' title='Add To WishList'></i>
                          </div>

                          <div className="div_section2_home d-flex justify-content-center align-items-center" onClick={goToDirection.bind(this,data.id)}>
                            <i className='fas fa-eye icon_section2_home' title='Show Product'></i>
                          </div>

                          <div className="div_section2_home d-flex justify-content-center align-items-center" onClick={addToCartshope_check_loginAlso.bind(this, data.id, 1, data.product_img)}>
                            <i className='fas fa-shopping-cart icon_section2_home' title='Add To Card'></i>
                          </div>

                        </div>


                      </div>



                    </div>
                    {
                      data.dayfordiscount ?
                        <div className="box">
                          <div className="ribbon ribbon-top-left">
                            <span>Black Friday</span>
                          </div>
                        </div> :
                        <div className="box">

                        </div>
                    }

                  </div>
                )
              })
            }
            <div className="col-md-12 d-flex justify-content-center">
              <button className='mt-3  button_header_more ' onClick={gotoShope.bind(this)}>See More</button>

            </div>



          </div>
        </div>
      </div>

      {/*home section 3*/}
      <div className="home_section3" style={{ backgroundImage: 'url(https://capricathemes.com/wordpress/WCM02/WCM020041/wp-content/uploads/2020/08/Lindsey-Holland-aka-Ropes.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="p-5 box_section3_home text-center  ">
                <div className="box_friday m-auto">
                  <div id="demotext">  EVERY FRIDAY </div>
                  <p className=' home_section3_text pt-4'>Up To 27% Discount</p>
                  <button className='mt-3  button_header bt--friady'>Shope Now</button>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>


      {/*home section4*/}
      <div className="home_section2" >
        <div className="container">
          <div className="row d-flex justify-content-center justify-content-lg-start align-items-center section2__cards">

            <div className="col-md-12">
              <div className="row my-5">

                <div className="col-12 col-sm-12 col-md-4 col-lg-3 my-2">
                  <span className='latest_product_section2 ms-4 ms-md-0'>Recent Arrival</span>
                </div>

                <div className="col-12 col-sm-12 col-md-8 col-lg-9 ms-auto-md ">
                  <ul className='ms-auto-md list_section3 d-flex text-left text-right-lg justify-content-md-end'>
                    <li>KeyBoards</li>
                    <li>Cases </li>
                    <li>Whatch</li>
                  </ul>
                </div>


              </div>
            </div>

            {
              products_section4_home.map(data => {
                return (
                  <div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3 my-3 box_all_card_section2" key={data.id}>
                    <div className="box_section2_product card">
                      <img src={data.product_img} onClick={goToDirection.bind(this, data.id)} alt="" className="animate__animated img_section2_home card-img-top" />
                      <div className="box_text p-2">

                        <div className="box_stars d-flex my-2">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>

                        <p className='text_section2_product' onClick={goToDirection.bind(this, data.id)}>{data.productname_en}</p>

                        {
                          data.discountprice == 0 ?
                            <div className="d-flex">
                              <span className='text_section2_discount'>${data.discountprice}</span>
                              <span className='text_section2_price'>${data.price}</span>

                            </div>
                            :
                            <div className="d-flex">
                              <span className='text_section2_discount'>${data.price}</span>
                              <span className='text_section2_price'>${data.discountprice}</span>
                            </div>
                        }
                        <div className="box_effect_section2_home animate__animated ">

                          <div className="div_section2_home d-flex justify-content-center align-items-center" onClick={addproduct_to_wishlist.bind(this, data.id, data.productname_en, data.productname_ar, data.productDesc_en, data.productDesc_ar, data.product_img, data.price, data.discountprice)}>
                            <i className='fas fa-heart icon_section2_home' title='Add To Favorite List'></i>
                          </div>

                          <div className="div_section2_home d-flex justify-content-center align-items-center" onClick={goToDirection.bind(this,data.id)}>
                            <i className='fas fa-eye icon_section2_home' title='Show Product'></i>
                          </div>

                          <div className="div_section2_home d-flex justify-content-center align-items-center" onClick={addToCartshope_check_loginAlso.bind(this, data.id, 1, data.product_img)}>
                            <i className='fas fa-shopping-cart icon_section2_home' title='Add To Card'></i>
                          </div>

                        </div>


                      </div>



                    </div>
                    {
                      data.dayfordiscount ?
                        <div className="box">
                          <div className="ribbon ribbon-top-left">
                            <span>Black Friday</span>
                          </div>
                        </div> :
                        <div className="box">

                        </div>
                    }

                  </div>
                )
              })
            }
            <div className="col-md-12 d-flex justify-content-center">
              <button className='mt-3  button_header_more ' onClick={gotoShope.bind(this)}>See More</button>
            </div>
          </div>
        </div>
      </div>



      {/*home section5*/}
      <div className="home_section5 my-5">
        <div className="container">
          <div className="row">

            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 border-sm-0 ">
              <div className="box_section5__top d-flex justify-content-center align-items-center">
                <img src="/img/shoping.png" alt="" className='animate__animated  img_section5 img1' />

                <div className="box_section5 ms-3 mt-4">
                  <p className='text_section5'>Free Shipping Worldwide</p>
                  <p className='text-muted text_mut_section5'> UK Orders Only</p>
                </div>
                <div className="hr_section5 ms-4"></div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 border-sm-0">
              <div className="box_section5__top d-flex justify-content-center align-items-center">
                <img src="/img/call.png" alt="" className='animate__animated  img_section5 img1' />


                <div className="box_section5 ms-3 mt-4">
                  <p className='text_section5'>Free Shipping Worldwide</p>
                  <p className='text-muted text_mut_section5'> UK Orders Only</p>
                </div>
                <div className="hr_section5 ms-4"></div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 border-sm-0 ">
              <div className="box_section5__top d-flex justify-content-center align-items-center">
                <img src="/img/back.png" alt="" className='animate__animated  img_section5 img1' />


                <div className="box_section5 ms-3 mt-4">
                  <p className='text_section5'>Free Shipping Worldwide</p>
                  <p className='text-muted text_mut_section5'> UK Orders Only</p>
                </div>
                <div className="hr_section5 ms-4"></div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 border-sm-0 ">
              <div className="box_section5__top d-flex justify-content-center align-items-center">
                <img src="/img/win.png" alt="" className='animate__animated  img_section5 img1' />


                <div className="box_section5 ms-3 mt-4">
                  <p className='text_section5'>Free Shipping Worldwide</p>
                  <p className='text-muted text_mut_section5'> UK Orders Only</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/*home section7*/}
      <div className="home_section7">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center" >

            {
              Users.slice(0, 4).map(data => {
                return (
                  <div className="col-9 col-sm-8 col-md-7 col-lg-4 col-xl-3 my-3" key={data.user_id}>
                    <div id="card" style={{ backgroundImage: `url(${data.wallpaper ? data.wallpaper : ''})` }} >
                      <div id="avatar" style={{ backgroundImage: `url(${data.userimage ? data.userimage : ''})` }}></div>
                      <div id="profile">
                        <h1 className='text_section7 my-2'>{data.name}</h1>
                        <h3 className=' my-1'>
                          <div className="row">

                            <div className="col-6 col-sm-4 col-md-3">
                              <a href={data.facebookprofile ? data.facebookprofile : ''}><i className='fab fa-facebook text-primary fa-2x'></i></a>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3">
                              <a href={data.instgramprofile ? data.instgramprofile : ''}><i className='fab fa-instagram text-danger fa-2x'></i></a>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3">
                              <a href={data.twitterprofile ? data.twitterprofile : ''}><i className='fab fa-twitter text-info fa-2x'></i></a>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3">
                              <a href={data.githubprofile ? data.githubprofile : ''}><i className='fab fa-github text-dark fa-2x'></i></a>
                            </div>

                          </div>
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              })
            }









          </div>
        </div>
      </div>

      {/*home section6*/}
      <div className="thumb_home_header  home_section6">
        <div className="container">
          <div className="row">
            <div className="col-md-12  over ">
              <Swiper
                slidesPerView={1} spaceBetween={0} freeMode={true}
                // init: false,
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }
                }
                autoplay={{
                  "delay": 2000,
                  "disableOnInteraction": true
                }}
                navigation={true}
                breakpoints={{
                  369: {
                    slidesPerView: 2,
                    spaceBetween: -5,
                  },
                  439: {
                    slidesPerView: 2,
                    spaceBetween: -40,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: -40,
                  },
                  666: {
                    slidesPerView: 2,
                    spaceBetween: -50,
                  },

                  768: {
                    slidesPerView: 3,
                    spaceBetween: -10,
                  },
                  956: {
                    slidesPerView: 3,
                    spaceBetween: -10,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: -60,
                  },
                  1407: {
                    slidesPerView: 4,
                    spaceBetween: -360,
                  }
                }}

                className="mySwiper px-5"
              >
                <SwiperSlide>
                  <div className="box_thumb_home text-center position-relative">
                    <img src="https://capricathemes.com/wordpress/WCM02/WCM020041/wp-content/uploads/2018/09/br3-2.png" alt="team member" className="img-fluid img-responsive" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box_thumb_home text-center position-relative">
                    <img src="https://capricathemes.com/wordpress/WCM02/WCM020041/wp-content/uploads/2018/09/br3-2.png" alt="team member" className="img-fluid img-responsive" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box_thumb_home text-center position-relative">
                    <img src="https://capricathemes.com/wordpress/WCM02/WCM020041/wp-content/uploads/2018/09/br3-2.png" alt="team member" className="img-fluid img-responsive" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box_thumb_home text-center position-relative">
                    <img src="https://capricathemes.com/wordpress/WCM02/WCM020041/wp-content/uploads/2018/09/br3-2.png" alt="team member" className="img-fluid img-responsive" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box_thumb_home text-center position-relative">
                    <img src="https://capricathemes.com/wordpress/WCM02/WCM020041/wp-content/uploads/2018/09/br3-2.png" alt="team member" className="img-fluid img-responsive" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box_thumb_home text-center position-relative">
                    <img src="https://capricathemes.com/wordpress/WCM02/WCM020041/wp-content/uploads/2018/09/br3-2.png" alt="team member" className="img-fluid img-responsive" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box_thumb_home text-center position-relative">
                    <img src="https://capricathemes.com/wordpress/WCM02/WCM020041/wp-content/uploads/2018/09/br3-2.png" alt="team member" className="img-fluid img-responsive" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box_thumb_home text-center position-relative">
                    <img src="https://capricathemes.com/wordpress/WCM02/WCM020041/wp-content/uploads/2018/09/br3-2.png" alt="team member" className="img-fluid img-responsive" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box_thumb_home text-center position-relative">
                    <img src="https://capricathemes.com/wordpress/WCM02/WCM020041/wp-content/uploads/2018/09/br3-2.png" alt="team member" className="img-fluid img-responsive" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box_thumb_home text-center position-relative">
                    <img src="https://capricathemes.com/wordpress/WCM02/WCM020041/wp-content/uploads/2018/09/br3-2.png" alt="team member" className="img-fluid img-responsive" />
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default HomeContent
