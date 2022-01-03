import React, { useEffect,useState } from 'react';
import './Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


//   global variables 

function Categories() {
    // import all data from api by redux 
    const Products = useSelector((state) => state.Allapidata.Products);
    const ProductsImage = useSelector((state) => state.Allapidata.ProductImage);
    const ProductsTags = useSelector((state) => state.Allapidata.ProductTags);
    const Categories = useSelector((state) => state.Allapidata.Categories);
    const Users = useSelector((state) => state.Allapidata.Users);
    const [check_cate,setCate]=useState(false);
    const navigate = useNavigate();

    var che__1=false;
    var keyLength=0;


    //  category collapse change icon 
   const change__icon=(e)=>{
    
        
                // open
                if(e.target.classList.contains("fa-plus")){

                    e.target.classList.add('fa-minus');
                    e.target.classList.remove('fa-plus');
                   
                }
                // close
                else if(e.target.classList.contains("fa-minus")){
                    e.target.classList.remove('fa-minus');
                    e.target.classList.add('fa-plus');
                }

   }
      


const checkchange2=()=>{
      setCate(true);
  }
const checkchange1=()=>{
    setCate(false);
}
const incr=()=>{
    keyLength++;
    return keyLength;
}

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



    return (
        <div className='Categories'>
            {/*header of Category shope*/}
            <p className='text_top_category_shop'>Shop By Category</p>
            <hr className="hr__shop_category" />

            
            {/*box of all Category ..........................*/}

            {
                Categories.map(data=>{
               
                    return(
                        data.categoryparientID==0?
                        <div className="box_categor_shop " key={data.id*2} >
                            <p className='d-flex justify-content-between'>
                                <p className='text_category_list' onClick={sortProductAccourdingToCategory.bind(this,data.categoryname_en,data.id)}>{data.categoryname_en}</p>
                                {      
                                    Categories.map(data2=>{
                                        return(
                                            (data.id==data2.categoryparientID && data2.categorysection_en=='subsection' && !che__1 )?
                                            <a className="mai_icon_collaps" data-bs-toggle="collapse" href={"#category_"+data.id} role="button" aria-expanded="false" aria-controls="collapseExample" onLoadCapture={checkchange2} key={data2.id*40}>
                                             <i className="fas fa-plus icon_category icon1" onClick={change__icon}></i>
                                            {che__1=true}
                                            
                                        </a>
                                        :
                                        <a className="d-none" key={data2.id*50}></a>
                                        )
                                    })
                                }
                            
                            </p>
                            <div className="collapse fit_content_width py-0 " id={"category_"+data.id} onLoadCapture={checkchange1}>
                                {
                                    Categories.map(data3=>{
                                        return(
                                            (data.id==data3.categoryparientID && data3.categorysection_en=='subsection')?
                                            <p className='text_category_list ms-3 py-0 ' key={data3.id*100}  onClick={sortProductAccourdingToCategory.bind(this,data3.categoryname_en,data3.id)} > {data3.categoryname_en}{che__1=false}</p>
                                            :<p className='d-none py-0 my-0' key={data3.id*90}></p>
                                        )
                                    })
                                }
                                
                            </div>
                    </div>
                    :
                      <p className='d-none' key={data.id*200}></p>
                    )
                })
            }
        
           
   



        </div>
    );
}

export default Categories;
