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

  var box_tags=[];
  let check_tag=0;
  ProductsTags.map(data=>{
    check_tag=0;
    for(let i=0;i< box_tags.length;i++){
        if(data.tagname==box_tags[i].tagname){
           check_tag++;
        }
    }
    if(check_tag==0){
      box_tags.push(data);
      check_tag=0;
    }
  });


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
  
  return (
    <div className='Tags my-5'>
         {/*header of Category shope*/}
         <p className='text_top_category_shop'>Products Tags</p>
         <hr className="hr__shop_category" />

         
         {/*box of all Category ..........................*/}
         <div className="box_tags_shop">
           {box_tags.map(data=>{
             return(
              <span className='Tags_name m-1' onClick={sortAccordingToTags.bind(this,data.tagname,data.product_id)} key={data.created_at}>{data.tagname}</span>
             )
           })}
         </div>


    </div>
  );
}

export default Tags;
