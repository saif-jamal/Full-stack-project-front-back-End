import React from 'react';
import './Tags.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Tags() {
    // import all data from api by redux 
    const Products = useSelector((state) => state.Allapidata.Products);
    const ProductsImage = useSelector((state) => state.Allapidata.ProductImage);
    const ProductsTags = useSelector((state) => state.Allapidata.ProductTags);
    const Categories = useSelector((state) => state.Allapidata.Categories);
    const Users = useSelector((state) => state.Allapidata.Users);
    const navigate = useNavigate();

  



  return (
    <div className='Tags my-5'>
         {/*header of Category shope*/}
         <p className='text_top_category_shop'>Recent Comments</p>
         <hr className="hr__shop_category" />

         
         {/*box of all Category ..........................*/}
         <div className="box_tags_shop my-0">
              <span className='text_category_list_wishlist my-0' ><span className='bg-0 txt-bolder_'>admin</span> on Iquod maxime placeat</span>
         </div>


    </div>
  );
}

export default Tags;
