import React, { useEffect,useState } from 'react'
import './NavBar.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ShoppingBasket } from '../Store/AllActions';

// animation style library
import 'animate.css';

// bootstrap imports 
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

// global varaible
var check_show=0;

function NavBar() {
    const ShoppingBasket_data = useSelector((state) => state.Allapidata.ShoppingBasket);
    const[notivicationNumber,setnotivicationNumber]=useState(0);
    const [countWish,setCountwis]=useState(0);
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
          setCountwis(ShoppingBasket_data.length);
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
          setCountwis(ShoppingBasket_data.length);
      } else {
        setCountwis(0);
      }
    
    
    
    
      },[ShoppingBasket_data]);

    useEffect(() => {
            
            const slide_up_menu=document.querySelector('.show_drop');
            const box_show_menu=document.querySelector('.dro-down__menu');
            const closedropmenu=document.querySelector('.closedropdown');

            const button_search= document.querySelector('.button-search');
            const button_searchclose= document.querySelector('.button-searchclose');

            const search_feild=document.querySelector('.div_search');

            slide_up_menu.addEventListener('click',()=>{

                box_show_menu.classList.add('d-block');
                box_show_menu.classList.remove('animate__zoomOut');
                box_show_menu.classList.add('animate__slideInUp');
                
            });
            
            closedropmenu.addEventListener('click',()=>{

                box_show_menu.classList.remove('animate__slideInUp');
                box_show_menu.classList.add('animate__zoomOut');
               
                setTimeout(() => {
                    box_show_menu.classList.remove('d-block');
                }, 100);
            });

         
  
            button_search.addEventListener('click',()=>{
                search_feild.classList.add('d-flex');
                search_feild.classList.remove('animate__zoomOut');
                search_feild.classList.add('animate__zoomIn');
                button_searchclose.classList.remove('d-none');
                button_search.classList.add('d-none');
            });

            button_searchclose.addEventListener('click',()=>{
                search_feild.classList.remove('animate__zoomIn');
                search_feild.classList.add('animate__zoomOut');
                setTimeout(() => {
                    search_feild.classList.remove('d-flex');
                    button_searchclose.classList.add('d-none');
                    button_search.classList.remove('d-none'); 
                }, 300);
               
            });

    });

    // obser 
    useEffect(() => {
      
        const checkpoint = document.getElementById('div_line_opserv');
        const navbar__=document.getElementById('NavBar');

        const sectionoptions={
            rootMargin:"-70px 0px 0px 0px"
        };
        
        const sectionOneAbserver = new IntersectionObserver(function (entries,sectionOneAbserver){
            entries.forEach(entry=>{
               if(!entry.isIntersecting){
                navbar__.classList.remove('nav__color_scr');
                navbar__.classList.add('nav_fixed_onscroll');
                navbar__.classList.add('animate__slideInDown');

               
               }else {
                navbar__.classList.add('nav__color_scr');
                navbar__.classList.remove('nav_fixed_onscroll');
                navbar__.classList.remove('animate__slideInDown');
               }
            });
        },sectionoptions);
        sectionOneAbserver.observe(checkpoint);

    });


    const setSortshope=()=>{
        localStorage.setItem('sortTags','');
        localStorage.setItem('Tags_product_id','');
   
        localStorage.setItem('sortCategor','');
        localStorage.setItem('Categor_id','');
        
        // navigate('/shope');
   
        window.scroll({
         top: 0, 
         left: 0, 
         behavior: 'smooth' 
        });
     }

     useEffect(()=>{

     
            setInterval(()=>{
                setnotivicationNumber(parseInt(localStorage.getItem('notivication_number')));
            },2700);
      
     
     },[]);

    
      
     

    return (
        <Navbar expand="lg" className='NavBar' id='NavBar'>
            <Container >
               

                <Link to="/" className='navbar-brand d-flex'><img src="/img/logo.png" className='logo' alt="" /> <span className='fa-2x mt-2 font-logo'> Ele.Store</span></Link>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 mt-5 pt-4 my-lg-0 "
                        
                        navbarScroll
                    >
                         <Link to="/Home" className='link_style nav-link font_nav_item mx-3 mt-2'>
                             Home
                         </Link>

                        <Nav.Link  className='font_nav_item mx-3 show_drop position-relative'>
                        
                            <span className=''>Shope</span> 
                            <div className="dro-down__menu animate__animated " >
                                <i class="fas fa-times closedropdown" ></i>
                                <Link to="/Shope" className='link_style nav-link  m-2' onClick={setSortshope}>Shope</Link>
                                <a  className='d-flex link_style nav-link  m-2'><span className='flex-1'>Top Rated Product</span> <span className=' ms-2 text-white bg-danger px-2 rounded-2'>Sale</span> </a>
                                <a  className='link_style nav-link  m-2'>Product Categories</a>
                            </div>

                        </Nav.Link>

                        <Link to="/Media" className='link_style nav-link font_nav_item mx-3 mt-2'>
                             Media
                         </Link>

                       
                        <Link to="/About" className='link_style nav-link font_nav_item mx-3 mt-2'>
                           About
                        </Link>
                        
                        <Link to="/Contact" className='link_style nav-link font_nav_item mx-3 mt-2'>
                            Contact
                        </Link>
                        
                          {/* search field............*/}
                         <Nav.Link className='font_nav_item mx-2  ms-3 ' >
                             <Form >
                                <div className="div_search animate__animated  ">
                                    <input type="search" className='search-feild' placeholder='Search...'/>
                                    <i class="fas fa-search my-1 pt-2 ms-1 pe-3 ps-2 fa-1x search-icon"></i>
                                </div>
                               
                                 <button className='bg-transparent border-0 button-search font-icon_'><i class="fas fa-search"></i></button>
                                 <button className='bg-transparent border-0 button-search  button-searchclose font-icon_ d-none'><i class="fas fa-times"></i></button>
                             </Form>
                         </Nav.Link>

                         {/* muprofile field............*/}
                        <Link to="/Myaccount" className='link_style nav-link font_nav_item mx-2 ms-4 mt-2'>
                           <i className="far fa-user font-icon_"></i>
                        </Link>

                        {/* shope card............*/}
                       <Link to="/ShopeCard" className='link_style nav-link font_nav_item mx-2 ms-4 mt-2 position-relative' >
                           <i class="fas fa-cart-plus font-icon_ position-relative">
                             {
                                 <span className='shope_card_number text-center'>{countWish}</span>
                             }
                           </i>
                           
                       </Link>

                    </Nav>

               


                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
