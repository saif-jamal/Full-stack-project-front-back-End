import React, { useState, useEffect } from 'react';
import './Login.css';
import $ from 'jquery';
import axios from 'axios';
import Profile from '../Profile/Profile';
import { useNavigate } from 'react-router-dom';



function Login() {
    const [login, setlogin] = useState(false);
    const navigate = useNavigate();

    // for login 
    const [messageerrorEmail, setEmailErorr] = useState('');
    const [messageerrorPASS, setPASSErorr] = useState('');

    // for register 
    const [RegerrorEmail,setRegEmailError]=useState('');
    const [RegerrorPass,setRegPASSError]=useState('');


    // login here 
    const logincheck = (e) => {
        const user_email = document.getElementById('logemail').value;
        const user_password = document.getElementById('logpass').value;
        // const submit_info = document.getElementById('submit_userlog');

        e.preventDefault();
        if (user_email != '' && user_password != '') {
            var body_data = {
                email: user_email,
                password: user_password
            }

            axios({
                method: 'post',
                url: 'http://localhost:8000/api/loginuser',
                data: body_data,
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    if (response.data.status == 200) {
                        // ReactSession.set("userlogin", true);
                        localStorage.setItem('userdata', true);
                        var future = new Date();
                        future.setDate(future.getDate() + 30);
                        localStorage.setItem('timer', future);
                        localStorage.setItem('userInfo',JSON.stringify(response.data.data));
                        setlogin(true);

                    } else {
                        localStorage.setItem('userdata', false);
                        setlogin(false);

                        if (response.data.message == 'email not found') {
                            setEmailErorr('Uncorrect Email Or not found');
                        } else {
                            setEmailErorr('');
                            setPASSErorr('Uncorrect Password or not found');
                        }


                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }




    }
     //register here 
    const registeration=(e)=>{

        e.preventDefault();
        const regname=document.getElementById('regname').value;
        const regemail=document.getElementById('regemail').value;
        const regpassword=document.getElementById('regpass').value;
        
        if (regemail!= '' && regpassword != '' && regname !='') {
            var reg_data = {
                name:regname,
                email: regemail,
                password: regpassword
            }

            axios({
                method: 'post',
                url: 'http://localhost:8000/api/user/registeruser',
                data: reg_data,
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    if (response.data.status == 200) {
                        localStorage.setItem('userdata', true);
                        var future = new Date();
                        future.setDate(future.getDate() + 30);
                        localStorage.setItem('timer', future);
                        localStorage.setItem('userInfo',JSON.stringify(response.data.data));
                        // console.log(response.data.data);
                        setlogin(true);

                    }else {
                        localStorage.setItem('userdata', false);
                        setlogin(false);
                        
                        if (response.data.message == 'this email is already exists') {
                            setRegEmailError('This email is already exists');
                        }else if(response.data.message=='The password must be at least 8 digit'){
                            setRegPASSError('The password must be at least 8 digit');
                        }
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }



   
    };

    if (localStorage.getItem('userdata') == 'true') {
        navigate('/Myaccount');
    }









    return (
        <div className='Login py-5 d-flex justify-content-center' style={{ backgroundImage: 'url(/img/wall.jpg)' }}>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-12">
                        <div className="section">
                            <div className="container">
                                <div className="row full-height justify-content-center">
                                    <div className="col-12 text-center align-self-center py-5">
                                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                            <h6 className="mb-0 pb-3"><span className='text-white '>Log In </span><span className='text-white'>Sign Up</span></h6>
                                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                            <label for="reg-log"></label>
                                            <div className="card-3d-wrap mx-auto">
                                                <div className="card-3d-wrapper">

                                                    {/*login field*/}
                                                    <div className="card-front">
                                                        <div className="center-wrap">
                                                            <div className="section text-center">
                                                                <h4 className="mb-4 pb-3 text-white">Log In</h4>
                                                                <form method='post'>
                                                                    <div className="form-group">
                                                                        <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" required />
                                                                        <i className="input-icon uil uil-at"></i>
                                                                    </div>
                                                                    <p className='text-danger'>{messageerrorEmail}</p>
                                                                    <div className="form-group mt-2">
                                                                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" required />
                                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                                    </div>
                                                                    <p className='text-danger'>{messageerrorPASS}</p>
                                                                    <button className="btn mt-4" id='submit_userlog' type='submit' onClick={logincheck}>Login</button>
                                                                    <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                                                                </form>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*Register field*/}
                                                    <div className="card-back">
                                                        <div className="center-wrap">
                                                            <div className="section text-center">

                                                                <h4 className="mb-4 pb-3 text-white">Sign Up</h4>
                                                                <form method='post'>
                                                                    <div className="form-group">
                                                                        <input type="text" name="regname" className="form-style" placeholder="Your Full Name" id="regname" autoComplete="off" required />
                                                                        <i className="input-icon uil uil-user"></i>
                                                                    </div>

                                                                    <div className="form-group mt-2">
                                                                        <input type="email" name="regemail" className="form-style" placeholder="Your Email" id="regemail" autoComplete="off" required />
                                                                        <i className="input-icon uil uil-at"></i>
                                                                    </div>
                                                                    <p className='text-danger'>{RegerrorEmail}</p>

                                                                    <div className="form-group mt-2">
                                                                        <input type="password" name="regpass" className="form-style" placeholder="Your Password" id="regpass" autoComplete="off" required />
                                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                                    </div>
                                                                    <p className='text-danger'>{RegerrorPass}</p>
                                                                    <button type='submit' className="btn mt-4" onClick={registeration}>Register</button>
                                                                </form>


                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
}

export default Login;
