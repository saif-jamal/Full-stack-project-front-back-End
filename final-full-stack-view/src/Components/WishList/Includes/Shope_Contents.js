import React, { useEffect,useState } from 'react';
import './Shope_Contents.css'
import GridViewIcon from '@mui/icons-material/GridView';
import { useDispatch, useSelector } from 'react-redux';
import { DirectionsLink } from '../../Store/AllActions';
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { debounce } from '@mui/material';
import { getapiProducts, getapiProductsImage, getapiProductsTags, getapiCategories,getapiUsers,wishlist_data,ShoppingBasket } from '../../Store/AllActions';

import axios from 'axios';

// sweatalert2 import 
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Shope_Contents() {
  const [userInfo, setUserinfo] = useState([]);
  // import all data from api by redux 
  const Products = useSelector((state) => state.Allapidata.Products);
  const ProductsImage = useSelector((state) => state.Allapidata.ProductImage);
  const ProductsTags = useSelector((state) => state.Allapidata.ProductTags);
  const Categories = useSelector((state) => state.Allapidata.Categories);
  const Users = useSelector((state) => state.Allapidata.Users);
  const wishlist_data_view = useSelector((state) => state.Allapidata.wishlist_data);

  const [category_id,setCategory_id]=useState(0);
  const [tag_product_id,setTagProduct_id]=useState(0);

  const [tag_name,setTagname]=useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();


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



    var check_hov = 0;
    var get_box;
    var products_section2_shope = [];

      // section2 hover 
  useEffect(() => {

    if(products_section2_shope.length >0 ){
      // const box_section2_effect_=document.quer 
      const box_section2_home = document.querySelectorAll('.box_all_card_section2');

      box_section2_home.forEach(hov_ele => {

        hov_ele.addEventListener('mouseenter', () => {
          hov_ele.querySelector('.box_effect_section2_home').classList.add('d-flex');
          hov_ele.querySelector('.box_effect_section2_home').classList.remove('animate__fadeOutUp');
          hov_ele.querySelector('.box_effect_section2_home').classList.add('animate__fadeInDown');
          hov_ele.querySelector('.img_section2_home').style.transform='scaleX(-1)';
          // hov_ele.querySelector('.img_section2_home').classList.remove('animate__pulse');
          hov_ele.querySelector('.img_section2_home').classList.add('animate__fadeIn');
          check_hov = 1;

        });

        hov_ele.addEventListener('mouseleave', () => {

          hov_ele.querySelector('.img_section2_home').style.transform='scaleX(1)';
          hov_ele.querySelector('.img_section2_home').classList.remove('animate__fadeIn');
          // hov_ele.querySelector('.img_section2_home').classList.add('animate__pulse');
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
    }

  });

  /*
  .
  .
  . 
  */

    //Home section 2...................
    var check_section2_shope = 0;
    var product_length_shope = 0;
   
  if(category_id>0){

    products_section2_shope=new Array();

     for(let k=0;k<Categories.length;k++){
       if(category_id==Categories[k].id || category_id== Categories[k].categoryparientID){

              for (let i = (Products.length - 1); i >= 0; i--) {
                if(Categories[k].id==Products[i].category_id){
                  check_section2_shope = 0;
                    for (let j = (ProductsImage.length - 1); j >= 0; j--) {
                
                      if (Products[i].id == ProductsImage[j].product_id) {
                
                
                
                        if (check_section2_shope == 0 && product_length_shope < 8) {
                          products_section2_shope.push({
                            id: Products[i].id,
                            productname_en: Products[i].productname_en,
                            productname_ar: Products[i].productname_ar,
                            productDesc_en:Products[i].descriptions_en,
                            productDesc_ar:Products[i].descriptions_ar,
                            price: Products[i].price,
                            discountprice: Products[i].discountprice,
                            dayfordiscount: Products[i].dayfordiscount,
                            product_img: ProductsImage[j].imageProductName,
                            user_id: Products[i].user_id,
                            category_id: Products[i].category_id
                          })
                          product_length_shope++;
                          check_section2_shope = 1;
                        }
                
                
                      }
                
                    }
                }
             
          
            }
       }

     }

  }else if(tag_product_id && tag_name ){
    products_section2_shope=new Array();
    let check______tag=0;
    for( let f=0 ; f<ProductsTags.length;f++){
      check______tag=0;
      if(tag_name==ProductsTags[f].tagname){

            for (let i = (Products.length - 1); i >= 0; i--) {


              if(ProductsTags[f].product_id==Products[i].id){

                  // check if exists product befor 
                  for(let g=0;g<products_section2_shope.length;g++){
                       if(Products[i].id==products_section2_shope[g].id){
                        check______tag=1;
                        break;
                       }
                  }


                  check_section2_shope = 0;
                  for (let j = (ProductsImage.length - 1); j >= 0; j--) {
            
                    if (Products[i].id == ProductsImage[j].product_id) {
            
            
            
                      if (check_section2_shope == 0 && check______tag==0) {
                        products_section2_shope.push({
                          id: Products[i].id,
                          productname_en: Products[i].productname_en,
                          productname_ar: Products[i].productname_ar,
                          productDesc_en:Products[i].descriptions_en,
                          productDesc_ar:Products[i].descriptions_ar,
                          price: Products[i].price,
                          discountprice: Products[i].discountprice,
                          dayfordiscount: Products[i].dayfordiscount,
                          product_img: ProductsImage[j].imageProductName,
                          user_id: Products[i].user_id,
                          category_id: Products[i].category_id
                        })
                        product_length_shope++;
                        check_section2_shope = 1;
                        break;
                      }


            
            
                    }
            
                  }
              }
              
      
            }
      }
    }

  }else{
        products_section2_shope=new Array();
      for (var i = (Products.length - 1); i >= 0; i--) {
        check_section2_shope = 0;
      for (let j = (ProductsImage.length - 1); j >= 0; j--) {

        if (Products[i].id == ProductsImage[j].product_id) {



          if (check_section2_shope == 0 ) {
            products_section2_shope.push({
              id: Products[i].id,
              productname_en: Products[i].productname_en,
              productname_ar: Products[i].productname_ar,
              productDesc_en:Products[i].descriptions_en,
              productDesc_ar:Products[i].descriptions_ar,
              price: Products[i].price,
              discountprice: Products[i].discountprice,
              dayfordiscount: Products[i].dayfordiscount,
              product_img: ProductsImage[j].imageProductName,
              user_id: Products[i].user_id,
              category_id: Products[i].category_id
            })
            product_length_shope++;
            check_section2_shope = 1;
          }


        }

      }

    }
  }

  
    // end hoem section 2..............
  


    // direction for product ........................................................
  

      const goToDirection =(id)=>{

          localStorage.setItem('product_id',id);
          navigate( ('/shope/ProductView'+id));
          
      }

    

    // end 


    useEffect(()=>{
      window.addEventListener('load',()=>{
        localStorage.setItem('sortCategor','');
        localStorage.setItem('Categor_id','');
    
        localStorage.setItem('sortTags','');
        localStorage.setItem('Tags_product_id','');
      });

      setInterval(()=>{
         setCategory_id(parseInt(localStorage.getItem('Categor_id')));
         setTagProduct_id(parseInt(localStorage.getItem('Tags_product_id')));
         setTagname(localStorage.getItem('sortTags'));
      },100);
    
   },[]);

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
                   })

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

// add product to wishlist 
const addproduct_to_wishlist=(product_id,prod_name_en,pro_name_ar,description_en,description_ar,product_image,pro_price,prod_discountprice)=>{
  if(localStorage.getItem('userdata')=='true'){
       let check_wislist=0;
       for(let i=0;i<wishlist_data_view.length;i++){
           if(wishlist_data_view[i].product_id===product_id){
            check_wislist=1;
           }
       }
       if(check_wislist==0){
             
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

                   }else if(response.data.status==500){
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
        <div className='Shope_Contents'>
            <div className="container-fluid">

                {/*header of conetent of shope*/}
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between ">

                        <GridViewIcon className="icon_content_shop" />

                        <select name="filter_select" id="filter_select">
                            <option value="0" selected>Default sorting</option>
                            <option value="1" >Sort by price: low to high</option>
                            <option value="2" >Sort by price: high to low</option>
                            <option value="4" >Sort by latest</option>
                            <option value="5">Black Friday</option>
                        </select>

                    </div>
                </div>

                {/* conetent of shope*/}
                <div className="row d-flex justify-content-center justify-content-lg-start shope_content">


                {
                  (products_section2_shope.length  && products_section2_shope )?
                    products_section2_shope.map(data => {
                      
                        return (
                          <div className="col-8 col-sm-4 col-md-4 col-lg-5 col-xl-4 col-xxl-3 my-3 box_all_card_section2" key={data.id}>
                            <div className="box_section2_product card" >

                            
                              <img src={data.product_img} onClick={goToDirection.bind(this,data.id)}  alt="" className="animate__animated img_section2_home card-img-top" />
                          
                            
                              <div className="box_text p-2">
        
                                <div className="box_stars d-flex my-2">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                
                                <p className='text_section2_product' onClick={goToDirection.bind(this,data.id)}>{data.productname_en}</p>
                              
        
                                {
                                  data.discountprice==0?
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
        
                                  <div className="div_section2_home d-flex justify-content-center align-items-center">
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
                    :
                    <div className='col-12 col-sm-12 col-md-12   my-3 box_all_card_section2'>
                       <div className="div_box_message d-flex justify-content-start">
                           <p className=''>No Product Found</p>
                       </div>
                    </div>
                  }
                      

               
                </div>


            </div>
        </div>
    );
}

export default Shope_Contents;
