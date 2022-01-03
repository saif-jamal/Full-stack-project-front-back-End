import React, { useEffect, useState } from 'react';
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
    const [check_cate, setCate] = useState(false);
    const navigate = useNavigate();

    var che__1 = false;
    var keyLength = 0;

    const gotoproductinfo=(id)=>{
        localStorage.setItem('product_id',id);
        navigate( ('/shope/ProductView'+id));
    }

  
    



    return (
        <div className='Categories'>
            {/*header of Category shope*/}
            <p className='text_top_category_shop'>Recent Posts Product</p>
            <hr className="hr__shop_category" />


            {/*box of all Category ..........................*/}

            
               

                    {
                        Products ?
                            Products.slice(0,7).map(data => {
                                return (
                                    <div className="box_categor_shop py-0" key={data.id * 2} >
                                        <p className='d-flex justify-content-start py-0 my-0'>
                                            <p className='text_category_list_wishlist' onClick={gotoproductinfo.bind(this,data.id)}>{data.productname_en}</p>
                                        </p>
                                    </div>
                                )
                            })

                            :
                            <p className='d-none'></p>
                    
              
                     }






        </div>
    );
}

export default Categories;
