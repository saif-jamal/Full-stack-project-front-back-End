import React from 'react'
import './Home.css'

// Navbar import 
import NavBar from '../Includes/NavBar';
import Footer from '../Includes/Footer';
import HomeContent from './HomeContent';
import { useDispatch, useSelector } from 'react-redux';


function Home() {
  const Products = useSelector((state) => state.Allapidata.Products);
  return (
    <div className='Home animate__animated  animate__fadeIn'>
       
       <HomeContent/>
    </div>
  )
}

export default Home
