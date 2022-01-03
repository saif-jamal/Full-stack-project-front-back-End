import React ,{useEffect,useState} from 'react';
import './Shope.css';
import Categories from './Includes/Categories';
import Tags from './Includes/Tags';
import Shope_Contents from './Includes/Shope_Contents';
import {Link} from 'react-router-dom';



function Shope() {
const [categorYname,setcategoryname]=useState('');
const [Tagname,setTagname]=useState('');


useEffect(()=>{
   setInterval(()=>{

      setTagname(localStorage.getItem('sortTags'));

      setcategoryname(localStorage.getItem('sortCategor'));

    

   },500);
 
},[]);


  return (
    <div className='Shope'>
           <div className="container-lg container-fluid">

               <div className="row">

                {/*header of shope page*/}
                   <div className="col-12 col-sm-12 col-md-12 d-flex justify-content-between">

                      <div className="left_header_shope">
                         <p className='text_left_header_shope'><Link to="/Home" className='link_to_home'>Home</Link> / Shope</p>
                      </div>

                      <div className="right_header_shope">
                         <p className='text_header_shope'>
                           {
                              categorYname?categorYname:Tagname?Tagname:'Shope'
                           }
                         </p>
                      </div>

                   </div>

               </div>


                {/*body content of shope page*/}
                <div className="row">
                
                    {/*Left side of body content of shope page*/}
                    <div className="col-md-3 d-none d-lg-block">
                        <Categories/>
                        <Tags/>
                    </div>

                    {/*Right side of body content of shope page*/}
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                       <Shope_Contents/>
                    </div>
                   

                </div>
                

           </div>





    </div>
  );
}

export default Shope;
