import React, { useEffect, useState } from 'react';
import "./WishList.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Categories from './Includes/Categories';
import Tags from './Includes/Tags';
import { useNavigate } from 'react-router-dom';
import { wishlist_data } from '../Store/AllActions';
// sweatalert2 import 
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



function WishList() {
    const [userInfo, setUserinfo] = useState([]);

    // import all data from api by redux 
    const Products = useSelector((state) => state.Allapidata.Products);
    const ProductsImage = useSelector((state) => state.Allapidata.ProductImage);
    const ProductsTags = useSelector((state) => state.Allapidata.ProductTags);
    const Categories_data = useSelector((state) => state.Allapidata.Categories);
    const Users = useSelector((state) => state.Allapidata.Users);
    const wishlist_data__data = useSelector((state) => state.Allapidata.wishlist_data);
    const navigate = useNavigate();
    const dispatch = useDispatch();



    useEffect(() => {

        if (localStorage.getItem('userdata') && localStorage.getItem('userdata') == 'true') {
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



    }, []);

    const gotoproductinfo = (id) => {
        localStorage.setItem('product_id', id);
        navigate(('/shope/ProductView' + id));
    }

    const sortProductAccourdingToCategory = (category, category_id) => {
        localStorage.setItem('sortCategor', category);
        localStorage.setItem('Categor_id', category_id);

        localStorage.setItem('sortTags', '');
        localStorage.setItem('Tags_product_id', '');

        navigate('/shope');

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    const signinhere = () => {
        navigate('/Login');
    }

    function refershapidata() {
        // wishlist data 
        axios.get('http://127.0.0.1:8000/api/product/Wishlist/show')
            .then(res => {
                dispatch(wishlist_data(res.data.data));
            });

    }

    const deleteProductfromCart = (id_data) => {
        var check_deleted = false;

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {

                var data_add_cart = {
                    id: id_data,
                }

                axios({
                    method: 'post',
                    url: 'http://localhost:8000/api/product/Wishlist/delete',
                    data: data_add_cart,
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(function (response) {
                        if (response.data.status == 200) {

                            //  let MySwal = withReactContent(Swal);
                            Swal.fire(
                                'Remove!',
                                'Your product has been removet.',
                                'success'
                            );
                            refershapidata();

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
        });


    }


    // pagination 
    const [loading, setloading] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [ProductPerPage, setProductPerPage] = useState(8);

    const indexOfLastProduct = currentPage * ProductPerPage;
    const indexOfFirstProduct = indexOfLastProduct - ProductPerPage;
    const cureentProduct = wishlist_data__data.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(wishlist_data__data.length / ProductPerPage); i++) {
        pageNumber.push(i);
    }


    const pagination = (num) => {
        setcurrentPage(num);
        const pag_item__ = document.querySelectorAll('.wishlist_here_paginate');

        for (let j = 1; j <= pageNumber.length; j++) {
            if (j == num) {
                pag_item__[(j - 1)].classList.add('pagination_color');
            } else {
                pag_item__[(j - 1)].classList.remove('pagination_color');
            }
        }
    }



    return (
        <div className='WishList'>

            <div className="container-lg container-fluid">

                <div className="row">

                    {/*header of shope page*/}
                    <div className="col-12 col-sm-12 col-md-12 d-flex justify-content-between">

                        <div className="box_search_wishlist my-5 d-none d-lg-block">
                            <input type="text" className='seaarch_box_wishlist' placeholder='Search...' />
                            <button className='btn_search' >search</button>
                        </div>

                        <div className="right_header_shope my-5">
                            <p className='text_header_Wishlist'>
                                WishList
                            </p>
                        </div>

                    </div>

                </div>


                {/*body content of shope page*/}
                <div className="row">

                    {/*Left side of body content of shope page*/}
                    <div className="col-md-3 d-none d-lg-block pb-5">
                        <Categories />
                        <Tags />

                        <div className='Categories'>
                            <p className='text_top_category_shop'>Categories</p>
                            <hr className="hr__shop_category" />
                            {
                                Categories_data ?
                                    Categories_data.slice(0, 7).map(data => {
                                        return (
                                            <div className="box_categor_shop py-0" key={data.id * 2} >
                                                <p className='d-flex justify-content-start py-0 my-0'>
                                                    <p className='text_category_list_wishlist' onClick={sortProductAccourdingToCategory.bind(this, data.categoryname_en, data.id)}>{data.categoryname_en}</p>
                                                </p>
                                            </div>
                                        )
                                    })

                                    :
                                    <p className='d-none'></p>


                            }
                        </div>


                    </div>

                    {/*Right side of body content of shope page*/}
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9 my-3 my-lg-0">
                        <div className="container-lg container-fluid p-0 m-0">
                            <div className="row p-0 m-0">
                                <div className="box_right_wishlist p-0 ">
                                    {
                                        (localStorage.getItem('userdata') == 'true') ?
                                            <table className='w-100 m-0 p-0'>
                                                <thead className='header_table_wishlist'>
                                                    <th className='thumbns_img'>
                                                        <div style={{ backgroundImage: `url(https://static.thenounproject.com/png/1381335-200.png)` }} ></div>
                                                    </th>
                                                    <th className='product_name text-center'>Products name</th>
                                                </thead>

                                                <tbody>
                                                    {
                                                        (wishlist_data__data && wishlist_data__data.length > 0) ?
                                                            cureentProduct.map(data => {
                                                                return (
                                                                    <tr className='tr_table_wish'>
                                                                        <td className='thumbns_img d-flex justify-content-center align-items-center '>
                                                                            <div style={{ backgroundImage: `url(${data.product_img})` }} onClick={gotoproductinfo.bind(this, data.product_id)}></div>
                                                                        </td>
                                                                        <td className='text-center product_name '>
                                                                            <span className='point_to_productview' onClick={gotoproductinfo.bind(this, data.product_id)}> {data.product_name_en}</span>
                                                                            <span className='point_to_productview wis_remove' onClick={deleteProductfromCart.bind(this, data.id)}> remove</span>
                                                                        </td>



                                                                    </tr>
                                                                )
                                                            })
                                                            :
                                                            <tr className='tr_table_wish'>
                                                                <td className='thumbns_img d-flex justify-content-center align-items-center '>
                                                                    <div className='noproduct' style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn28d_lDQxuPKtnaUXwFNfGFG6ur-rCBKLFJXj5_Oxzj6GiSaWYg_LAuvCPZoCy1fCBNA&usqp=CAU)` }}></div>
                                                                </td>
                                                                <td className='text-center product_name'>No product in wishlist...</td>
                                                            </tr>

                                                    }

                                                </tbody>
                                            </table>
                                            :
                                            <div className='col-12 col-md-12 d-flex justify-content-center my-5'>
                                                <p className='text-muted pt-2'>You Muste Signin To show Our cart product</p>
                                                <button className='btn btn-info text-white rounded-3 ms-3' onClick={signinhere}>Signin</button>
                                            </div>
                                    }
                                </div>
                            </div>

                            <div className="row ms-2 my-5">

                                <nav aria-label="...">
                                    <ul class="pagination pagination-lg">
                                        {
                                            pageNumber.map(number => (
                                                <li class="page-item " aria-current="page" key={number}>
                                                    <span class="wishlist_here_paginate" onClick={pagination.bind(this, number)}>{number}</span>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </nav>

                            </div>

                        </div>
                    </div>





                </div>


            </div>

        </div>
    );
}

export default WishList;
