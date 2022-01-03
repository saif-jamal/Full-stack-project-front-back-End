import React, { useEffect, useState } from 'react';
import './ProductView.css';
import { Link } from 'react-router-dom';
import { getapiProducts, getapiProductsImage, getapiProductsTags, getapiCategories,getapiUsers,wishlist_data,ShoppingBasket } from '../Store/AllActions';

import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import axios from 'axios';

// sweatalert2 import 
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import SwiperCore, { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/core';
import { data } from 'jquery';
import { Container } from 'react-bootstrap';

SwiperCore.use([Autoplay, EffectCoverflow, Pagination, Navigation]);





function ProductView() {
    const [userInfo, setUserinfo] = useState([]);
    const [product_info, setproduct_info] = useState({});
    const [check_if_found_product, setcheck_if_found_product] = useState(false);
    const [check_img_one, setcheck_img_one] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const wishlist_data_view = useSelector((state) => state.Allapidata.wishlist_data);

    // import all data from api by redux 
    const Products = useSelector((state) => state.Allapidata.Products);
    const ProductsImage = useSelector((state) => state.Allapidata.ProductImage);
    const ProductsTags = useSelector((state) => state.Allapidata.ProductTags);
    const Categories = useSelector((state) => state.Allapidata.Categories);
    const Users = useSelector((state) => state.Allapidata.Users);
    const Directions = useSelector((state) => state.Allapidata.directions);

    const [mainImage, setMainImage] = useState('');
    const [description, setdescrption] = useState(true);
    const [howtoused, sethowtoused] = useState(false);
    const [quantityValue,setquantityvalue]=useState(1);

    useEffect(()=>{
        
    if (localStorage.getItem('userdata') && localStorage.getItem('userdata')=='true') {
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
    },[]);

    // change image from thumbns
    const setmainimage_show = (e) => {
        setcheck_img_one(true);
        setMainImage(e.target.src);
    }



    // description functions to jumb from box to another box for descriptions of the product and how to used 
    const showDescription = () => {
        setdescrption(true);
        sethowtoused(false);
    }
    const showHowToUsed = () => {
        setdescrption(false);
        sethowtoused(true);
    }

    const showreviews = () => {
        setdescrption(false);
        sethowtoused(false);
    }
    // end ....................................................


    // show product info Headers ......................................................................
    useEffect(() => {
        window.addEventListener('load', () => {
            setcheck_img_one(false);
        });

        for (let i = 0; i < Products.length; i++) {

            if (Products[i].id == parseInt(localStorage.getItem('product_id'))) {
                setproduct_info(Products[i]);
                setcheck_if_found_product(true);
            }

        }


        for (let j = 0; j < ProductsImage.length; j++) {

            if (ProductsImage[j].product_id == parseInt(localStorage.getItem('product_id')) && !check_img_one) {
                setMainImage(ProductsImage[j].imageProductName);
            }


        }



        if (localStorage.getItem('product_id')) {
            setcheck_if_found_product(true);
        }

    });


    // end 


      /*
.
.
. 
*/

  // section2 hover 
  var check_hov = 0;
  useEffect(() => {


    // const box_section2_effect_=document.quer 
    const box_section2_home = document.querySelectorAll('.box_all_card_section2');

    box_section2_home.forEach(hov_ele => {

      hov_ele.addEventListener('mouseenter', () => {
        hov_ele.querySelector('.box_effect_section2_home').classList.add('d-flex');
        hov_ele.querySelector('.box_effect_section2_home').classList.remove('animate__fadeOutUp');
        hov_ele.querySelector('.box_effect_section2_home').classList.add('animate__fadeInDown');
        hov_ele.querySelector('.img_section2_home').style.transform='scaleX(-1)';
        hov_ele.querySelector('.img_section2_home').classList.remove('animate__pulse');
        hov_ele.querySelector('.img_section2_home').classList.add('animate__fadeIn');
        check_hov = 1;

      });

      hov_ele.addEventListener('mouseleave', () => {

        hov_ele.querySelector('.img_section2_home').style.transform='scaleX(1)';
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

      /*
  .
  .
  . 
  */

  //Home section 4...................
  
//   category related 
 var product_push=[];
 for(let i=0;i<Categories.length;i++){
     if(product_info.category_id == Categories[i].id){
         for(let j=0;j<Categories.length;j++){

            if(Categories[j].id == Categories[i].categoryparientID){
                    for(let k=0;k<Categories.length;k++){
                        if(Categories[k].categoryparientID == Categories[j].id){
                            for(let s=0;s<Products.length;s++){
                                if(Products[s].category_id==Categories[k].id){
                                    for(let x=0;x<ProductsImage.length;x++){
                                        if(ProductsImage[x].product_id== Products[s].id){
                                            product_push.push({
                                                id: Products[s].id,
                                                productname_en: Products[s].productname_en,
                                                productname_ar: Products[s].productname_ar,
                                                productDesc_en:Products[s].descriptions_en,
                                                productDesc_ar:Products[s].descriptions_ar,
                                                price: Products[s].price,
                                                discountprice: Products[s].discountprice,
                                                dayfordiscount: Products[s].dayfordiscount,
                                                product_img: ProductsImage[x].imageProductName,
                                                user_id: Products[s].user_id,
                                                category_id: Products[s].category_id
                                            });
                                            break ;
                                        }
                                    }
                                    
                                }
                            }
                        }
                    }
            }
             
         }
     }
 } 

// tags related 
  var tagsName_push=[];
  for(let i=0;i<ProductsTags.length;i++){
      if(ProductsTags[i].product_id==product_info.id){
        tagsName_push.push(ProductsTags[i].tagname);
      }
  }

  var product_id_push=[];
  var check_id_repeat=0;
  var check_id_repeat2=0;

  for(let i=0;i<ProductsTags.length;i++){
      for(let j=0;j<tagsName_push.length;j++){
        if(ProductsTags[i].tagname==tagsName_push[j]){
            check_id_repeat=0;
           for(let k=0;k<product_id_push.length;k++){
               if(product_id_push[k]==ProductsTags[i].product_id){
                 check_id_repeat=1;
                break;
               }
           }
           if(check_id_repeat==0){
               check_id_repeat2=0;
               for(let d=0;d<product_push.length;d++){

                   if(product_push[d].id==ProductsTags[i].product_id){
                    check_id_repeat2=1;
                   }
                   
               }
                if(check_id_repeat2==0){
                        for(let y=0;y<Products.length;y++){
                            for(let z=0;z<product_id_push.length;z++){
                                if(Products[y].id== product_id_push[z]){
                                    for(let x=0;x<ProductsImage.length;x++){
                                        if(ProductsImage[x].product_id== Products[y].id){
                                            product_push.push({
                                            id: Products[y].id,
                                            productname_en: Products[y].productname_en,
                                            productname_ar: Products[y].productname_ar,
                                            productDesc_en:Products[y].descriptions_en,
                                            productDesc_ar:Products[y].descriptions_ar,
                                            price: Products[y].price,
                                            discountprice: Products[y].discountprice,
                                            dayfordiscount: Products[y].dayfordiscount,
                                            product_img: ProductsImage[x].imageProductName,
                                            user_id: Products[y].user_id,
                                            category_id: Products[y].category_id
                                            });
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    check_id_repeat=0;
                    break;
                }

             break;
           }


        }
      }
     
  }


   

  // end hoem section 2..............



  
// direction for product ........................................................

    const goToDirection =(id)=>{

       localStorage.setItem('product_id',id);
       navigate( ('/shope/ProductView'+id));
       window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
  }

// end 

const setQuabtity_forproduct=(e)=>{
    setquantityvalue(e.target.value);
}

function refreshCartshope(){
    // import all shoppingbasket with info  from api 
    axios.get('http://127.0.0.1:8000/api/product/showallshoppingbasket')
    .then(res => {
      dispatch(ShoppingBasket(res.data.data));
    });
}

// add product to ShopeCard but check first login
   const addToCartshope_check_loginAlso=(id,number_of_quantity=1,product_image)=>{
    if(localStorage.getItem('userdata')=='true'){
         
  
         if(id>0 && number_of_quantity>0){
               var data_add_cart = {
               user_id:userInfo.User_id,
               product_id:id,
               product_quantity:number_of_quantity
             }
  
             axios({
                 method: 'post',
                 url: 'http://localhost:8000/api/product/addToCartShope',
                 data: data_add_cart,
                 headers: { 'Content-Type': 'application/json' }
             })
                 .then(function (response) {
                     if (response.data.status == 200) {

                        if(localStorage.getItem('notivication_number') !== null){
                            localStorage.setItem('notivication_number',(parseInt(localStorage.getItem('notivication_number'))+1) );
                        }else{
                          localStorage.setItem('notivication_number',1);
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
         }else{
            let MySwal = withReactContent(Swal);
            MySwal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Quantity must be Grate from <span className="text-danger fa-1x"> 0</span>',
                showConfirmButton: false,
                timer: 3500
            });
         }
    
    }else{
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



const sortProductAccourdingToCategory=(category,category_id)=>{
    localStorage.setItem('sortCategor',category);
    localStorage.setItem('Categor_id',category_id);

    localStorage.setItem('sortTags','');
    localStorage.setItem('Tags_product_id','');

    navigate('/shope');

    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
}

const sortAccordingToTags=(Tags,product_id)=>{
    localStorage.setItem('sortTags',Tags);
    localStorage.setItem('Tags_product_id',product_id);

    localStorage.setItem('sortCategor','');
    localStorage.setItem('Categor_id','');
    
    navigate('/shope');

    window.scroll({
     top: 0, 
     left: 0, 
     behavior: 'smooth' 
    });
 }



// add product to wishlist 
const addproduct_to_wishlist=(product_id,prod_name_en,pro_name_ar,description_en,description_ar,product_image,pro_price,prod_discountprice)=>{

   

    if(localStorage.getItem('userdata')=='true'){
  
         let check_wislist=0;
         for(let i=0;i<wishlist_data_view.length;i++){
             if(wishlist_data_view[i].product_id===product_id){
              check_wislist=1;
             }
         }
  
         if(check_wislist==0  ){
                 
               var data_add_cart = {
                  product_id:product_id,
                  user_id:userInfo.User_id,
                  product_name_en:prod_name_en,
                  product_name_ar:pro_name_ar,
                  product_descri_en:description_en,
                  product_descri_ar:description_ar,
                  product_img:product_image,
                  product_price:pro_price,
                  product_discountprice:prod_discountprice
                 }
  
             axios({
                 method: 'post',
                 url: 'http://localhost:8000/api/product/Wishlist/insert',
                 data: data_add_cart,
                 headers: { 'Content-Type': 'application/json' }
             })
                 .then(function (response) {
                     if (response.data.status == 200) {
                    
                      if(localStorage.getItem('whishlist_number') !== null){
                         localStorage.setItem('whishlist_number',(parseInt(localStorage.getItem('whishlist_number'))+1) );
                      }else{
                       localStorage.setItem('whishlist_number',1);
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
                     .then(res=>{
                       dispatch(wishlist_data(res.data.data));
                   
                     });
                     
                     }else if(response.data.status == 404){
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
         }else{
            let MySwal = withReactContent(Swal)
            
            Swal.fire({
              position: 'top-end',
              icon: 'info',
              title: 'Product exists in wishlist',
              showConfirmButton: false,
              timer: 3500
            })
         }
    
    }else{
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
  




    return (
        <div className='ProductView pb-5'>
            {
                check_if_found_product ?
                    <div className="container-fluid container-lg">

                        <div className="row px-0 py-5">
                            <div className="col-md-12 px-0">
                                <p className=' ms-3 header_product_text'> <Link to='/Home' className='linke_to_home'>Home</Link> / <Link to="/Shope" className='link_to_shope'>Shope /</Link> <span>{product_info.productname_en}</span> </p>
                            </div>
                        </div>

                        {/* header images and thumbns*/}
                        <div className="row px-0 my-1">
                            {/* left side of header images and thumbns*/}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-7  px-0 mx-0">
                                <div className="row px-0 d-flex justify-content-start">

                                    {/*thumbns slide images*/}
                                    <div className="col-4 col-sm-3 col-md-4 col-lg-3 py-5 px-0">
                                        <Swiper
                                            direction='vertical'
                                            slidesPerView={4} spaceBetween={60}
                                            navigation={true}
                                            loop={true}
                                            pagination={{
                                                el: '.swiper-pagination',
                                                clickable: true,
                                            }
                                            }

                                            className="mySwiper  header_thumbns_product"
                                        >
                                            <div className="box_shad py-5  bg-white overflow-hidden">
                                                {
                                                    ProductsImage.map(dataImage => {
                                                        if (dataImage.product_id == product_info.id) {
                                                            return (
                                                                <SwiperSlide>
                                                                    <div className="box_product_thumbns">
                                                                        <img onClick={setmainimage_show} className="img_thumbns" id='first_thumbns_img' src={dataImage.imageProductName} />
                                                                    </div>
                                                                </SwiperSlide>
                                                            )
                                                        }

                                                    })
                                                }





                                            </div>


                                        </Swiper>

                                    </div>

                                    {/*image show*/}
                                    <div className="col-8 col-sm-9 col-md-8 col-lg-9 px-0 ">
                                        <div className='box_main_image' style={{ backgroundImage: `url(${mainImage})` }}>

                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/*right  side of header images and thumbns*/}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-5 px-0-lg">

                                {/*product name*/}
                                <h3 className='name_header_product'>{product_info.productname_en}</h3>

                                {/*product review*/}
                                <div className="box_stars d-flex my-3">
                                    <i className="fas fa-star mt-1 pt-1"></i>
                                    <i className="fas fa-star mt-1 pt-1"></i>
                                    <i className="fas fa-star mt-1 pt-1"></i>
                                    <i className="fas fa-star mt-1 pt-1"></i>
                                    <i className="fas fa-star mt-1 pt-1"></i>
                                    <span className='text_dashed_'>(1 customer review)</span>
                                </div>

                                {/*product price and discount price*/}
                                {
                                    product_info.discountprice ?
                                        <div className='d-flex my-4'>
                                            <span className='old_price'>${product_info.price}</span> <span className='discount_price ms-2'>${product_info.discountprice}</span>
                                        </div>
                                        :
                                        <div className='d-flex my-4'>
                                            <span className='old_price'>${product_info.discountprice}</span> <span className='discount_price ms-2'>${product_info.price}</span>
                                        </div>
                                }


                                {/*product descriptions*/}
                                <div className="descriptions_product text-wrap my-2 ">
                                    {product_info.descriptions_en}
                                </div>

                                {/*product in stock*/}
                                <p className='product_in_stock ms-4'>999 in stock</p>

                                {/*product guantitiy and add to card*/}
                                <div className="d-flex">
                                    <span className='QTY_name mt-2 pt-1'>Qty:</span>
                                    <input type="number" id='number_to_sell_product' onChange={setQuabtity_forproduct.bind(this)} step="1" min="1" max="999" name="quantity" defaultValue={1} title="Qty" class="mx-2" size="4" pattern="[0-9]*" inputMode="numeric" aria-labelledby="Auis Nostrum Ullamb quantity"></input>
                                    <button className='mx-2 cart_shop_product' onClick={addToCartshope_check_loginAlso.bind(this,product_info.id,quantityValue,mainImage)}>Add TO Cart</button>
                                </div>

                                <div className="d-flex my-4 hover_box_wishlist" onClick={addproduct_to_wishlist.bind(this,product_info.id,product_info.productname_en,product_info.productname_ar,product_info.descriptions_en,product_info.descriptions_ar,mainImage,product_info.price,product_info.discountprice)}>
                                    <i className='fas fa-heart wishlist_add mt-1 me-2 ' title='add to wishlist'></i>

                                    {/* if added product to wishlist will be this active oh right*/}
                                    <i class="fas fa-share d-none" ></i>

                                    <p className='text__add_wish pt-1'> Add To Wishlist</p>
                                </div>

                                <div className="d-flex">
                                    <span className='text-bold'>SKU: </span> <span className=' ms-1 text_unbolded'> NHFL5</span>
                                </div>

                                 {/*categories here*/}
                                <div className='d-flex  my-3 categ_tag'>
                                    <span className='categories_text m-1'>Categories:</span>
                                    {
                                        Categories.map(dataCategory => {
                                            if (dataCategory.id == product_info.category_id) {
                                                return (
                                                    <span onClick={sortProductAccourdingToCategory.bind(this,dataCategory.categoryname_en,dataCategory.id )} className='text_unbolded m-1'>{dataCategory.categoryname_en} <span className='single_quote mt-1 '>,</span></span>
                                                )
                                            }

                                        })
                                    }

                                </div>

                                {/*Tags here*/}
                                <div className='d-flex  my-3 categ_tag'>
                                    <span className='categories_text m-1'>Tags:</span>

                                    {
                                        ProductsTags.map(dataTags => {
                                            if (dataTags.product_id == product_info.id) {
                                                return (
                                                    <span onClick={sortAccordingToTags.bind(this,dataTags.tagname,dataTags.product_id)} className='text_unbolded m-1'>{dataTags.tagname} <span className='single_quote mt-1 '>,</span></span>
                                                )
                                            }

                                        })
                                    }
                                </div>

                            </div>


                        </div>

                        {/*descriptions of product*/}
                        <div className="row px-0 my-5">

                            <div className="col-12 col-sm-12 col-md-12">
                                <div className="row px-0 d-flex justify-content-center ">
                                    <div className="col-12 col-sm-12 col-md-2 text-center my-2   text_Description_header" onClick={showDescription}>Descriptions</div>
                                    <div className="col-12 col-sm-12 col-md-2 text-center my-2   text_Description_header" onClick={showHowToUsed}>How To Used</div>
                                    <div className="col-12 col-sm-12 col-md-2 text-center my-2   text_Description_header" onClick={showreviews}>Reviews(1)</div>
                                </div>
                            </div>
                            {
                                description ?
                                    <div className="col-12 col-sm-12 col-md-12 my-3 ">
                                        <div className="box_descriptions_">
                                            <h6>Descriptions</h6>
                                            <p className='text-descr my-3'>{product_info.descriptions_en}</p>
                                            <h6 className='my-3'>{product_info.productname_en}  features and benefits</h6>
                                            <ul className="text-descr">
                                                {product_info.productfeature_en}
                                            </ul>


                                            <p className="text-descr">
                                                for More Information you can Vist the Original website <span className='text-info visit'> here </span>
                                            </p>


                                        </div>
                                    </div>
                                    : howtoused ?
                                        <div className="col-12 col-sm-12 col-md-12 my-3">
                                            <div className="box_descriptions_">
                                                <h6>How To Used</h6>
                                                <h6 className="my-3 ">{product_info.productname_en} How to used?</h6>
                                                <p className='text-descr'>{product_info.producthowused_en}</p>


                                                <p className="text-descr">
                                                    for More Information you can Vist the Original website <span className='text-info visit'> here </span>
                                                </p>


                                            </div>
                                        </div>
                                        :
                                        <div className="col-12 col-sm-12 col-md-12 my-3">
                                            <div className="box_descriptions_">
                                                <h6>1 Review For Auis Nostrum Ullamb</h6>
                                                <div className="box_review">
                                                    <img className='mt-1' src="https://secure.gravatar.com/avatar/9bf8e30390499ac27be44b3611e5106b?s=60&d=mm&r=g" alt="" />
                                                    <div className="box_review_descriptions mx-3 p-0">

                                                        <div className="box_stars d-flex mb-2">
                                                            <i className="fas fa-star mt-1 pt-1"></i>
                                                            <i className="fas fa-star mt-1 pt-1"></i>
                                                            <i className="fas fa-star mt-1 pt-1"></i>
                                                            <i className="fas fa-star mt-1 pt-1"></i>
                                                            <i className="fas fa-star mt-1 pt-1"></i>
                                                            <span className='box_starts_admin'>addmin--</span>
                                                            <span className='text_dashed_'>{product_info.created_at}</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            }




                        </div>

                        <div className="row my-5">
                            {/*related product*/}
                            <div className="home_section2 px-0" >
                                <div className="container-fluid px-0">
                                    <div className="row d-flex justify-content-center justify-content-lg-start align-items-center section2__cards">

                                        <div className="col-md-12">
                                            <div className="row my-5">

                                                <div className="col-12 col-sm-12 col-md-4 col-lg-3 my-2">
                                                    <span className='latest_product_section2 ms-4 ms-md-0'>Related Products </span>
                                                </div>


                                            </div>
                                        </div>

                                        {
                                            product_push.map(data => {
                                                
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

                                                                    <div className="div_section2_home d-flex justify-content-center align-items-center" onClick={addproduct_to_wishlist.bind(this,data.id,data.productname_en,data.productname_ar,data.productDesc_en,data.productDesc_ar,data.product_img,data.price,data.discountprice)}>
                                                                        <i className='fas fa-heart icon_section2_home' title='Add To Favorite List'></i>
                                                                    </div>

                                                                    <div className="div_section2_home d-flex justify-content-center align-items-center" onClick={goToDirection.bind(this, data.id)}>
                                                                        <i className='fas fa-eye icon_section2_home' title='Show Product'></i>
                                                                    </div>

                                                                    <div className="div_section2_home d-flex justify-content-center align-items-center" onClick={addToCartshope_check_loginAlso.bind(this,data.id,1,data.product_img)}>
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

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    : <div className='container py-3'>
                        <div className="row d-felx justify-content-center">
                            <div className="col-md-10  text-white">Product not found</div>
                        </div>
                    </div>
            }



        </div>
    );
}

export default ProductView;

