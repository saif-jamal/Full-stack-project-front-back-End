import React, { useState, useEffect } from 'react';
import './ShopeCard.css';
import { useDispatch, useSelector } from 'react-redux';
// import { ShoppingBasket } from '../Store/SubReducer/ApiData';
import { ShoppingBasket } from '../Store/AllActions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// sweatalert2 import 
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function ShopeCard() {
    const [userInfo, setUserinfo] = useState([]);
    // import all data from api by redux 
    const Products = useSelector((state) => state.Allapidata.Products);
    const ProductsImage = useSelector((state) => state.Allapidata.ProductImage);
    const ProductsTags = useSelector((state) => state.Allapidata.ProductTags);
    const Categories = useSelector((state) => state.Allapidata.Categories);
    const Users = useSelector((state) => state.Allapidata.Users);
    const Directions = useSelector((state) => state.Allapidata.directions);
    const ShoppingBasket_data = useSelector((state) => state.Allapidata.ShoppingBasket);

    const [check__is, setCHeck_is] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {


        // notivication value  
        setInterval(() => {
            if (window.innerWidth <= '700') {
                setCHeck_is(false);
            } else {
                setCHeck_is(true);

            }
        }, 300);



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

    useEffect(() => {
        // import all shoppingbasket with info  from api 
        axios.get('http://127.0.0.1:8000/api/product/showallshoppingbasket')
            .then(res => {
                dispatch(ShoppingBasket(res.data.data));
            });

    }, []);

    function refershapidata() {
        // import all shoppingbasket with info  from api 
        axios.get('http://127.0.0.1:8000/api/product/showallshoppingbasket')
            .then(res => {
                dispatch(ShoppingBasket(res.data.data));
            });
    }

    //Home section 2...................
    var check_shoppingbasket = 0;
    //   var product_length = 0;
    var shoppingbasket_d = Array();


    for (let i = 0; i < ShoppingBasket_data.length; i++) {
        if (ShoppingBasket_data[i].user_id === userInfo.User_id) {
            for (let j = 0; j < Products.length; j++) {
                if (ShoppingBasket_data[i].product_id === Products[j].id) {
                    for (let s = 0; s < ProductsImage.length; s++) {
                        if (ProductsImage[s].product_id === Products[j].id) {
                            shoppingbasket_d.push({
                                id: Products[j].id,
                                shopcart_id: ShoppingBasket_data[i].id,
                                shoppingbasket_id: ShoppingBasket_data[i].id,
                                productname_en: Products[j].productname_en,
                                price: Products[j].price,
                                discountprice: Products[j].discountprice,
                                dayfordiscount: Products[j].dayfordiscount,
                                product_img: ProductsImage[s].imageProductName,
                                user_id: Products[j].user_id,
                                category_id: Products[j].category_id,
                                product_quantity: ShoppingBasket_data[i].product_quantity,
                                TotalPrice_for_oneProduct: ShoppingBasket_data[i].TotalPrice_for_oneProduct,
                                MainTotalPrice_allProduct: ShoppingBasket_data[i].MainTotalPrice_allProduct
                            });
                            break;
                        }
                    }
                }
            }
        }

    }

    // end hoem section 2..............

    // increament .................
    const increamentproductquantity = (id_basket, product_id_data) => {

        var data_add_cart = {
            id: id_basket,
            product_id: product_id_data,
        }

        axios({
            method: 'post',
            url: 'http://localhost:8000/api/Product/increament',
            data: data_add_cart,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                if (response.data.status == 200) {

                    let MySwal = withReactContent(Swal);
                    Swal.fire({
                        icon: 'success',
                        position: 'top-end',
                        title: 'success!',
                        text: 'Product increament quantity',
                        timer: 2500
                    });
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
                    timer: 2500
                });
            });


    }
    // decreament ........................
    const deccreamentproductquantity = (id___, product_id___, product_quantity) => {
        if (product_quantity > 1) {
            var data_add_cart = {
                id: id___,
                product_id: product_id___,
            }

            axios({
                method: 'post',
                url: 'http://localhost:8000/api/Product/decreament',
                data: data_add_cart,
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    if (response.data.status == 200) {

                        let MySwal = withReactContent(Swal);
                        Swal.fire({
                            icon: 'success',
                            position: 'top-end',
                            title: 'success!',
                            text: 'Product quantity Deccreament ',
                            timer: 2500
                        });
                        refershapidata();

                    } else {
                        let MySwal = withReactContent(Swal);
                        Swal.fire({
                            icon: 'error',
                            position: 'top-end',
                            title: 'Ooops..!',
                            text: 'quantity must be grate from 1!',
                            timer: 2500
                        })
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
        } else {
            let MySwal = withReactContent(Swal);
            Swal.fire({
                icon: 'error',
                position: 'top-end',
                title: 'Ooops..!',
                html: '<i class="text-danger">quantity must be grate from 1</i>',
                timer: 2500
            })
        }

    }

    const signinhere = () => {
        navigate('/Login');
    }

    const gotoproductinfo = (id) => {
        localStorage.setItem('product_id', id);
        navigate(('/shope/ProductView' + id));
    }
    const deleteProductfromCart = (id_data) => {
        var check_deleted = false;

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                var data_add_cart = {
                    id: id_data,
                }

                axios({
                    method: 'post',
                    url: 'http://localhost:8000/api/Product/cartshope/delete',
                    data: data_add_cart,
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(function (response) {
                        if (response.data.status == 200) {

                            //  let MySwal = withReactContent(Swal);
                            Swal.fire(
                                'Deleted!',
                                'Your cart product has been deleted.',
                                'success'
                            );
                            refershapidata();
                            if (parseInt(localStorage.getItem('notivication_number')) > 0 && shoppingbasket_d.length > 0) {
                                localStorage.setItem('notivication_number', (parseInt(localStorage.getItem('notivication_number')) - 1));
                            } else {
                                localStorage.setItem('notivication_number', 0);
                            }

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
    const cureentProduct = shoppingbasket_d.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(shoppingbasket_d.length / ProductPerPage); i++) {
        pageNumber.push(i);
    }


    const pagination = (num) => {
        setcurrentPage(num);
        const pag_item__ = document.querySelectorAll('.cartshophere');

        for (let j = 1; j <= pageNumber.length; j++) {
            if (j == num) {
                pag_item__[(j - 1)].classList.add('pagination_color');
            } else {
                pag_item__[(j - 1)].classList.remove('pagination_color');
            }
        }
    }

    return (
        <div className='ShopeCard'>
            <div className="container-lg continer-fluid">
                <div className="row px-lg-5 ">

                    {/*header  of shopping card*/}
                    <div className="col-12 col-sm-12 col-md-12 px-lg-5 head_of_shopeCard">
                        <div className="row px-lg-5 header_card">

                            <div className="col-4 col-sm-4 col-md-4 d-flex justify-content-center">
                                <span>PRODUCT NAME</span>
                            </div>

                            <div className="col-2 col-sm-2 col-md-2 d-flex justify-content-center">
                                <span>PRICE</span>
                            </div>

                            <div className="col-2 col-sm-2 col-md-2 d-flex justify-content-center">
                                <span>DISCOUNT PRICE</span>
                            </div>

                            <div className="col-2 col-sm-2 col-md-2 d-flex justify-content-center">
                                <span>QUANTITY</span>
                            </div>


                            <div className="col-2 col-sm-2 col-md-2 d-flex justify-content-center">
                                <span>TOTAL</span>
                            </div>

                        </div>
                    </div>


                    {/*content  of shopping card*/}
                    {
                        (localStorage.getItem('userdata') == 'true') ?
                            <div className='col-12 col-md-12 p-0 m-0'>



                                {
                                    check__is ?
                                        <div className="col-12 col-sm-12 col-md-12 px-lg-5">

                                            {(shoppingbasket_d && shoppingbasket_d.length > 0) ?
                                                cureentProduct.map(data => {
                                                    return (
                                                        <div className='p-0 m-0' key={data.id}>
                                                            <div className="row px-lg-5 py-4">

                                                                <div className="col-4 col-sm-4 col-md-4 d-flex justify-content-left">
                                                                    <img className='img_shope_card' src={data.product_img} alt="" />
                                                                    <p className='my-4 ms-3 text_shope_card' onClick={gotoproductinfo.bind(this, data.id)}>{data.productname_en}</p>
                                                                </div>

                                                                <div className="col-2 col-sm-2 col-md-2 d-flex justify-content-center my-4">
                                                                    <span className='price_card'>${data.price}</span>
                                                                </div>

                                                                <div className="col-2 col-sm-2 col-md-2 d-flex justify-content-center my-4">
                                                                    <span className='price_card'>${data.discountprice}</span>
                                                                </div>

                                                                <div className="col-2 col-sm-2 col-md-2 d-flex justify-content-center my-2 ">
                                                                    <div className="quentity_card_product d-flex">
                                                                        <i class="fas fa-minus left_minus" onClick={deccreamentproductquantity.bind(this, data.shoppingbasket_id, data.id, data.product_quantity)}></i>
                                                                        <span>{data.product_quantity}</span>
                                                                        <i class="fas fa-plus  right_plus" onClick={increamentproductquantity.bind(this, data.shoppingbasket_id, data.id)}></i>
                                                                    </div>
                                                                </div>


                                                                <div className="col-2 col-sm-2 col-md-2 d-flex justify-content-center my-3 pt-1">

                                                                    <div className="box_total_price ms-4">
                                                                        <span className=''>${data.TotalPrice_for_oneProduct}</span>
                                                                        <i className='fas fa-times mt-1 d_p delete_product' title='delete from cart' onClick={deleteProductfromCart.bind(this, data.shopcart_id)}></i>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="hr__shopcard"></div>
                                                        </div>
                                                    )
                                                })
                                                :
                                                <div className='d-flex justify-content-center py-5'>
                                                    <p className='text-muted'>No product add to cart shope...</p>
                                                </div>

                                            }


                                        </div>

                                        :

                                        <div className="col-12 col-sm-12 col-md-12 px-lg-5">
                                            {
                                                (shoppingbasket_d && shoppingbasket_d.length > 0) ?
                                                    cureentProduct.map(data => {
                                                        return (
                                                            <div className='p-0 m-0' key={data.id}>
                                                                <div className="row px-lg-5 py-4">

                                                                    <div className="col-12 col-sm-12 col-md-6 d-flex flex-sm-row flex-column justify-content-center ">
                                                                        <img className='img_shope_card' src={data.product_img} alt="" />

                                                                        <div className='d-flex flex-column justify-content-center move_content'>
                                                                            <p className='my-4 ms-3 text_shope_card' onClick={gotoproductinfo.bind(this, data.id)}>{data.productname_en}</p>
                                                                            <div className='d-flex'>
                                                                                <span className='price_card'>${data.price}</span>
                                                                                <span className='price_card'>${data.discountprice}</span>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div className="col-12 col-sm-12 col-md-6 d-flex  my-4">

                                                                        <div className=''>
                                                                            <div className="quentity_card_product d-flex ">
                                                                                <i class="fas fa-minus left_minus" onClick={deccreamentproductquantity.bind(this, data.shoppingbasket_id, data.id, data.product_quantity)}></i>
                                                                                <span>{data.product_quantity}</span>
                                                                                <i class="fas fa-plus  right_plus" onClick={increamentproductquantity.bind(this, data.shoppingbasket_id, data.id)}></i>
                                                                            </div>

                                                                            <div className="box_total_price mt-3">
                                                                                <span className=''>ToTal: ${data.TotalPrice_for_oneProduct}</span>
                                                                                <i className='fas fa-times mt-1  ' title='delete product' onClick={deleteProductfromCart.bind(this, data.shopcart_id)}></i>
                                                                            </div>
                                                                        </div>



                                                                    </div>
                                                                </div>
                                                                <div className="hr__shopcard"></div>
                                                            </div>
                                                        )
                                                    })
                                                    :
                                                    <div className='d-flex justify-content-center py-5'>
                                                        <p className='text-muted'>No product add to cart shope...</p>
                                                    </div>
                                            }


                                        </div>

                                }
                                {
                                    (shoppingbasket_d && shoppingbasket_d.length > 0) ?
                                        shoppingbasket_d.slice(0, 1).map(data2 => {
                                            return (
                                                <div className="col-12 col-sm-12 col-md12 my-3 d-flex justify-content-end " key={data2.id}>
                                                    <button className='totalcheckout_Button '>Checkout</button>
                                                    <span className=' ms-4 me-5 totalcheckout rounded'>TOTAL PRICE : <span className='totalcheckout_text'><span className='text-success   text-bolder'> $</span>{data2.MainTotalPrice_allProduct}</span></span>
                                                </div>
                                            )
                                        })

                                        :
                                        <div className="col-12 col-sm-12 col-md12 my-3 d-flex justify-content-end ">
                                            <button className='totalcheckout_Button bg-gray'>Checkout</button>
                                            <span className=' ms-4 me-5 totalcheckout rounded'>TOTAL PRICE : <span className='totalcheckout_text'><span className='text-success '> $</span>0.0</span></span>
                                        </div>
                                }

                            </div>
                            :
                            <div className='col-12 col-md-12 d-flex justify-content-center mt-5'>
                                <p className='text-muted pt-2'>You Muste Signin To show Our cart product</p>
                                <button className='btn btn-info text-white rounded-3 ms-3' onClick={signinhere}>Signin</button>
                            </div>
                    }


                </div>

                <div className="row ms-5 ps-5">

                    <nav aria-label="..." className='ms-3'>
                        <ul class="pagination pagination-lg">
                            {
                                pageNumber.map(number => (
                                    <li class="page-item " aria-current="page" key={number}>
                                        <span class="  cartshophere" onClick={pagination.bind(this, number)}>{number}</span>
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

export default ShopeCard;
