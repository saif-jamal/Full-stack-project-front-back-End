// import all actions for dispatched with reducer
import { getapiProducts, getapiProductsImage, getapiProductsTags, getapiCategories,getapiUsers,wishlist_data,ShoppingBasket } from './Components/Store/AllActions';

import React,{ useEffect,useState,Suspense,lazy} from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import NavBar from './Components/Includes/NavBar';
import Footer from './Components/Includes/Footer';
import Contact from './Components/Contact/Contact';
import Media from './Components/Media/Media';
import Profile from './Components/Profile/Profile';
import Shope from './Components/Shope/Shope';
import ShopeCard from './Components/ShopeCard/ShopeCard';
import Login from './Components/Login/Login';
import WishList from './Components/WishList/WishList';
// import ProductView from './Components/ProductView/ProductView';
const ProductView = lazy(() => import('./Components/ProductView/ProductView'));



function App() {
  
  // import all data from api by redux 
  const Products = useSelector((state) => state.Allapidata.Products);
  const ProductsImage = useSelector((state) => state.Allapidata.ProductImage);
  const ProductsTags = useSelector((state) => state.Allapidata.ProductTags);
  const Categories = useSelector((state) => state.Allapidata.Categories);
  const Users = useSelector((state) => state.Allapidata.Users);
  const Directions = useSelector((state) => state.Allapidata.directions);
  const wishlist_data__data = useSelector((state) => state.Allapidata.wishlist_data);


  const [countWish,setCountwis]=useState(0);
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
      setCountwis(wishlist_data__data.length);
  } else {
    setCountwis(0);
  }




  },[]);
  
  useEffect(()=>{
    

    if (localStorage.getItem('userdata') && localStorage.getItem('userdata')=='true') {
      var nowdate = new Date();
      if (localStorage.getItem('timer') <= nowdate) {
          localStorage.removeItem('userdata');
          localStorage.removeItem('timer');
          localStorage.removeItem('userInfo');
          navigate('/Login')
      }
      setCountwis(wishlist_data__data.length);
  } else {
    setCountwis(0);
  }




  },[wishlist_data__data]);

  
  const dispatch = useDispatch();

    useEffect(() => {
        // import all products from api 
        axios.get('http://127.0.0.1:8000/api/product/show')
          .then(res => {
            dispatch(getapiProducts(res.data.data));
          });

        // import all productsImage from api 
        axios.get('http://127.0.0.1:8000/api/product/show/images')
          .then(res => {
            dispatch(getapiProductsImage(res.data.data));
          });

        // import all productsTags from api 
        axios.get('http://127.0.0.1:8000/api/product/show/Tags')
          .then(res => {
            dispatch(getapiProductsTags(res.data.data));
          });

        // import all Categories from api 
        axios.get('http://127.0.0.1:8000/api/Categories/show')
          .then(res => {
            dispatch(getapiCategories(res.data.data));
          });

          // import all users with info  from api 
        axios.get('http://127.0.0.1:8000/api/Users/show')
        .then(res => {
          dispatch(getapiUsers(res.data.data));
        });

          // import all shoppingbasket with info  from api 
          axios.get('http://127.0.0.1:8000/api/product/showallshoppingbasket')
          .then(res => {
            dispatch(ShoppingBasket(res.data.data));
          });

          // wishlist data 
          axios.get('http://127.0.0.1:8000/api/product/Wishlist/show')
          .then(res=>{
            dispatch(wishlist_data(res.data.data));

          });
    

    


      let mybutton = document.getElementById("btn-back-to-top");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 500 ||
          document.documentElement.scrollTop > 500
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
      // When the user clicks on the button, scroll to the top of the document
      mybutton.addEventListener("click", backToTop);

      function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }




    },[]);
 





     
  return (

    <div className="app">

      <div className="box_wis_show ">
          <div className="container  ">
            <div className="row mx-0 ">
                <div className="col-md-12 d-flex justify-content-between mt-2 flex-column flex-lg-row">
                    <p className='text'>1st Time Buyer? Use ONE promocode to instantly get 10% OFF!</p>
                    <div className="box_wis_and_help d-flex ">
                        <Link to='/wishlist' className='text-decoration-none wish_text' ><p className='wish_text mx-2'>WishList({countWish})</p></Link>
                        <p className='wish_text'>Need Help ?</p>
                    </div>
                </div>
            </div>
          </div>
      </div>

      <NavBar />
      <div className="div_line_opserv" id='div_line_opserv'></div>
     
      <button type="button" class="btn  btn-floating btn-lg" id="btn-back-to-top">
           <i class="fas fa-arrow-up"></i>
      </button>

      <Suspense fallback={<div>Loading...</div>}>
         
        <Routes>
          <Route path='/' element={<Home/>} exact ></Route>
          <Route path='/Home' element={<Home />} exact></Route>
          <Route path='/About' element={<About />} exact ></Route>
          <Route path='/Contact' element={<Contact />} exact ></Route>
          <Route path='/Media' element={<Media />}  exact></Route>
          <Route path='/Myaccount' element={<Profile />} exact></Route>
          <Route path='/Shope' element={<Shope />}  exact></Route>
          <Route path='/ShopeCard' element={<ShopeCard />}  exact></Route>
          <Route path='/Login' element={<Login />} exact></Route>
          <Route path='/wishlist' element={<WishList/>} exact></Route>
          {
            Products.map(data=>{
              return(
                <Route path={'/shope/ProductView'+data.id} element={<ProductView />} exact key={data.id*3}></Route>
              )
            })
          }
        </Routes>

      </Suspense>
   
      <Footer />
    </div>


  )
}

export default App;
