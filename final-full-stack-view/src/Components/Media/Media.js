import React, { useEffect, useState } from 'react';
import './Media.css';
import { useDispatch, useSelector } from 'react-redux';


function Media() {
  // import all data from api by redux 
  const Products = useSelector((state) => state.Allapidata.Products);
  const ProductsImage = useSelector((state) => state.Allapidata.ProductImage);
  const ProductsTags = useSelector((state) => state.Allapidata.ProductTags);
  const Categories = useSelector((state) => state.Allapidata.Categories);
  const Users = useSelector((state) => state.Allapidata.Users);


  var numberSelect = [4, 6, 12];
  var number_incre = 1;
  var number_key = 1;


  useEffect(() => {
    const imgContent = document.querySelectorAll('.img-content-hover');

    function showImgContent(e) {
      for (var i = 0; i < imgContent.length; i++) {
        var x = e.pageX;
        var y = e.pageY;
        imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    document.addEventListener('mousemove', showImgContent);
  }, [])

  function getrandomenumber() {
    if (number_incre <= 3) {
      number_incre++;
      number_key++;
      return `column-xs-12 column-md-4`;
    }
    else if (number_incre == 4 || number_incre == 5) {
      number_incre++;
      number_key++
      return `column-xs-12 column-md-6`;
    } else {
      number_incre = 1;
      number_key++
      return `column-xs-12 column-md-12`;
    }
    // var num= Math.floor( (Math.random() * numberSelect.length ) + 0 );
  }

  //media  section ...................
  var check_section_media = 0;
  var product_media_length = 0;
  var products_media_section = Array();

  for (var i = (Products.length - 1); i >= 0; i--) {
    for (let j = (ProductsImage.length - 1); j >= 0; j--) {

      if (Products[i].id == ProductsImage[j].product_id) {

        products_media_section.push({
          id: Products[i].id,
          productname_en: Products[i].productname_en,
          product_img: ProductsImage[j].imageProductName,
        })

      }

    }

  }



  // pagination 
  const [loading, setloading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [ProductPerPage, setProductPerPage] = useState(8);

  const indexOfLastProduct = currentPage * ProductPerPage;
  const indexOfFirstProduct = indexOfLastProduct - ProductPerPage;
  const cureentProduct = products_media_section.slice(indexOfFirstProduct, indexOfLastProduct);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(products_media_section.length / ProductPerPage); i++) {
    pageNumber.push(i);
  }


  const pagination = (num) => {
    setcurrentPage(num);
    const pag_item__ = document.querySelectorAll('.media_herer');

    for (let j = 1; j <= pageNumber.length; j++) {
      if (j == num) {
        pag_item__[(j - 1)].classList.add('pagination_color');
      } else {
        pag_item__[(j - 1)].classList.remove('pagination_color');
      }
    }
  }












  return (
    <div className='Media animate__animated  animate__fadeIn py-5'>

      <section className="gallery">
        <div className="container">
          <div className="grid">

            {
              cureentProduct.map(data => {
                return (
                  <div className={getrandomenumber()} key={number_key}>
                    <figure className="img-container">
                      <img src={data.product_img} className='img_media' />
                      <figcaption className="img-content">
                        <h2 className="title">{data.productname_en}</h2>
                        <h3 className="category">Showcase</h3>
                      </figcaption>
                      <span className="img-content-hover">
                        <h2 className="title">{data.productname_en}</h2>
                        <h3 className="category">Showcase</h3>
                      </span>
                    </figure>
                  </div>
                )
              })
            }


          </div>
        </div>
      </section>

      <div className="row ms-2">
      <div className="container-lg container-fluid">
          <nav aria-label="...">
            <ul class="pagination pagination-lg">
              {
                pageNumber.map(number => (
                  <li class="page-item " aria-current="page" key={number}>
                    <span class="   media_herer" onClick={pagination.bind(this, number)}>{number}</span>
                  </li>
                ))
              }

            </ul>
          </nav>
        </div>
      </div>

    </div>
  );
}

export default Media;
