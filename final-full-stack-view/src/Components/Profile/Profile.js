import React, { useEffect, useState } from 'react';
import './Profile.css';
import $ from 'jquery';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import FormData from 'form-data';






function Profile() {
    const [userInfo, setUserinfo] = useState([]);
    const [wallpaperSelected,setwallpaper]=useState(""); 
    const [imageSelected,setImage]=useState(""); 
    const [prodile_messageErorr,setpromessageerorr]=useState('');
    const [img_user,setimg_user]=useState('');
    const [wall_user,setwall_user]=useState('');
    const [check_user_img,set_che_img_user]=useState(false);
    const [check_user_wall,set_che_wall_user]=useState(false);




    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('userdata')) {
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
            navigate('/Login');
        }
    },[]);


    const logout_user = () => {
        localStorage.removeItem('userdata');
        localStorage.removeItem('timer');
        localStorage.removeItem('userInfo');
        navigate('/Login');
    };

    // change wallpaper and image for user
    useEffect(()=>{
        // wallpaper 
        document.querySelector('.edit_wallpaper_profile').addEventListener('click',()=>{
            let input_wallpaper_feild=document.querySelector('.wallpaper');
            input_wallpaper_feild.click();
           
        });
         
        // user image 
        document.querySelector('.edit_user_profile').addEventListener('click',()=>{
            let input_user_feild=document.querySelector('.userimage');
            input_user_feild.click();
           
        });


    },[]);

    const wallpaperchanged=()=>{
             let input_wallpaper_feild=document.querySelector('.wallpaper');
                setwallpaper(window.URL.createObjectURL(input_wallpaper_feild.files[0]));
                setwall_user(input_wallpaper_feild.files[0]);
                set_che_wall_user(true);
                
    };

    const userimagechange=()=>{
        let input_user_feild=document.querySelector('.userimage');
           setImage(window.URL.createObjectURL(input_user_feild.files[0]));
           console.log(input_user_feild.files[0]);
           setimg_user(input_user_feild.files[0]);
           set_che_img_user(true);

    };

    // upload updated info for user 
    const uploadInfo_profile=(e)=>{
        e.preventDefault();

        let userimage=document.getElementById('userimage');
        let userwallpaper=document.getElementById('wallpaper');
        let userName=document.getElementById('name').value;
        let userEmail=document.getElementById('email').value;
        let phone_number=document.getElementById('phone_number').value;
        let facebookLink=document.getElementById('facebookprofile').value;
        let instagramLink=document.getElementById('instgramprofile').value;
        let twitterLink=document.getElementById('twitterprofile').value;
        let linkedlnLink=document.getElementById('linkedlnprofile').value;
        let githublink=document.getElementById('githubprofile').value;
        let locationOnMap=document.getElementById('locationOnMAP').value;
        let gender=document.getElementById('gender').value;
        
        console.log(img_user);
        console.log(wall_user);
        if (userEmail != '' && userName != '') {
        
            
            // var profile_data = {
            //     user_id:userInfo.User_id,
            //     userimage:img_user,
            //     wallpaper:wall_user,
            //     name:userName,
            //     email:userEmail,
            //     phone_number:phone_number,
            //     facebookprofile:facebookLink,
            //     instgramprofile:instagramLink,
            //     twitterprofile:twitterLink,
            //     linkedlnprofile:linkedlnLink,
            //     githubprofile:githublink,
            //     locationOnMAP:locationOnMap,
            //     gender:gender
            // }

            const profile_format_data = new FormData();
                    // dict of all elements
                    if(check_user_img)
                    {
                        profile_format_data.append("userimage",img_user);
                    }

                    if(check_user_wall){
                       profile_format_data.append("wallpaper",wall_user);
                    }

                    profile_format_data.append("user_id",userInfo.User_id);
                    profile_format_data.append("name", userName);
                    profile_format_data.append("email", userEmail);
                    profile_format_data.append("phone_number", phone_number);
                    profile_format_data.append("facebookprofile", facebookLink );
                    profile_format_data.append("instgramprofile", instagramLink);
                    profile_format_data.append("twitterprofile", twitterLink );
                    profile_format_data.append("linkedlnprofile", linkedlnLink );
                    profile_format_data.append("githubprofile", githublink);
                    profile_format_data.append("locationOnMAP", locationOnMap);
                    profile_format_data.append("gender", gender);




            axios({     
                        method: 'post',
                        url:'http://localhost:8000/api/user/updateUserInfo',
                        headers: {
                                'Accept':'application/json',
                                'Content-Type': 'multipart/form-data'
                        },
                        data:profile_format_data

            }).then(function (response) {
                    if (response.data.status == 200) {
                        // ReactSession.set("userlogin", true);
                        localStorage.setItem('userdata', true);
                        var future = new Date();
                        future.setDate(future.getDate() + 30);
                        localStorage.setItem('timer', future);
                        localStorage.setItem('userInfo',JSON.stringify(response.data.data));
                        setpromessageerorr('update info success');
                        console.log(response.data.data);
                        set_che_img_user(false);
                        set_che_wall_user(false)
                    } else {
                        setpromessageerorr('There is erorr with server try again later');

                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else{
            setpromessageerorr('Must Enter Full Name and Email in form');
        }
        


      


         
    };



    return (
        <div className='Profile animate__animated  animate__fadeIn'>
            <div className="container-fluid container-lg rounded bg-transparent py-5 ">
            
              <form method='post' encType="multipart/form-data">
                    <div className="row">
                        <div className="col-md-12 border-right position-relative px-0 px-lg-3">
                            {
                                (userInfo.wallpaper && !wallpaperSelected)?
                                <div className="position-relative wallpaper_profile" style={{ backgroundImage: `url(${userInfo.wallpaper})` }}>
                                   <input type="file" name='wallpaper' id='wallpaper' className='d-none wallpaper' accept="image/x-png,image/gif,image/jpeg" onChange={wallpaperchanged}/>
                                    <i className='fas fa-pen edit_wallpaper_profile' title='change background'></i>
                                </div>
                                :
                                <div className="position-relative wallpaper_profile" style={{ backgroundImage: `url(${wallpaperSelected})` }}>
                                   <input type="file" name='wallpaper' id='wallpaper' className='d-none wallpaper' accept="image/x-png,image/gif,image/jpeg" onChange={wallpaperchanged}/>
                                   <i className='fas fa-pen edit_wallpaper_profile' title='change background'></i>
                                </div>
                            }

                            {
                                (userInfo.userimage && !imageSelected)?
                                <div className='image_profile'>
                                      <img className="box_userimage " src={userInfo.userimage} />
                                      <input type="file" name='userimage' id='userimage' className='d-none userimage' accept="image/x-png,image/gif,image/jpeg" onChange={userimagechange}/>
                                       <i className='fas fa-pen edit_user_profile' title='change profile image'></i>
                                </div>
                                :
                                <div className='image_profile'>
                                    <img className="box_userimage" src={imageSelected} />
                                    <input type="file" name='userimage' id='userimage' className='d-none userimage' accept="image/x-png,image/gif,image/jpeg" onChange={userimagechange}/>
                                    <i className='fas fa-pen edit_user_profile' title='change profile image'></i>
                                </div>
                            }
                            <div className="box_text_profile d-flex flex-column">
                                <span className="font-weight-bold"><span className='text-info'>Name: </span>{userInfo.name}</span>
                                <span className=""><span className='text-info'>Email: </span>{userInfo.email}</span><span> </span>
                                <button className='btn btn-info text-white logout_profile my-3 mx-auto' onClick={logout_user}>Logout</button>
                            </div>
                        </div>

                        <div className="col-md-8 col-md-12 col-lg-8 border-right my-sm-5 pt-5 content_profile">
                            <div className="p-3 py-5">

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Profile Settings</h4>
                                </div>

                                <div className="row mt-2">
                                     {
                                        prodile_messageErorr?
                                         <div className="alert alert-dark text-red">
                                            <p>{prodile_messageErorr}</p>
                                        </div>
                                        :
                                        <div className="alert alert-dark text-red d-none">
                                            <p>{prodile_messageErorr}</p>
                                        </div>
                                     }
                                    
                                    <div className="col-md-12"><label className="labels">Full Name</label><input type="text" id='name' className="form-control" defaultValue={userInfo.name} /></div>
                                    <div className="col-md-12"><label className="labels">Email</label><input type="email" id='email' className="form-control" defaultValue={userInfo.email} /></div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" id='phone_number' defaultValue={userInfo.phone_number} /></div>
                                    <div className="col-md-12"><label className="labels">Gender</label>
                                        {
                                            (userInfo.gender == "male") ?
                                                <select name="gender" id="gender">
                                                    <option value="male" selected>Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                                :
                                                <select name="gender" id="gender">
                                                    <option value="male" >Male</option>
                                                    <option value="female" selected>Female</option>
                                                </select>
                                        }


                                    </div>

                                    <div className="col-md-12"><label className="labels">Facebook profile Link</label><input type="text" className="form-control" id='facebookprofile' defaultValue={userInfo.facebookprofile} /></div>
                                    <div className="col-md-12"><label className="labels">Instagram profile Link</label><input type="text" className="form-control" id='instgramprofile' defaultValue={userInfo.instgramprofile} /></div>
                                    <div className="col-md-12"><label className="labels">Twitter profile Link</label><input type="text" className="form-control" id='twitterprofile' defaultValue={userInfo.twitterprofile} /></div>
                                    <div className="col-md-12"><label className="labels">Linedln profile Link</label><input type="text" className="form-control" id='linkedlnprofile' defaultValue={userInfo.linkedlnprofile} /></div>
                                    <div className="col-md-12"><label className="labels">Github profile Link</label><input type="text" className="form-control" id='githubprofile' defaultValue={userInfo.githubprofile} /></div>
                                    <div className="col-md-12"><label className="labels">Your Location on Map</label><input type="text" className="form-control" id='locationOnMAP' defaultValue={userInfo.locationOnMAP} /></div>

                                </div>
                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit" onClick={uploadInfo_profile}>Save Update</button></div>

                            </div>
                        </div>

                        <div className="col-md-4 col-md-12 col-lg-4 border-right  pt-5 content_profile social_profile ">
                            <div className="row mt-3 justify-content-center">

                                <div className="col-2 col-md-2">
                                {
                                    userInfo.facebookprofile? <a href={userInfo.facebookprofile}> <i className='fab fa-facebook text-primary fa-2x'></i></a>
                                    :
                                    <a href=""> <i className='fab fa-facebook text-primary fa-2x'></i></a>
                                }
                                
                                </div>

                                <div className="col-2  col-md-2">
                                {
                                    userInfo.instgramprofile?<a href={userInfo.instgramprofile}><i className='fab fa-instagram text-danger fa-2x' ></i></a>
                                    :
                                    <a href=""><i className='fab fa-instagram text-danger fa-2x' ></i></a>
                                } 
                                </div>

                                <div className="col-2  col-md-2">
                                {
                                    userInfo.twitterprofile?<a href={userInfo.twitterprofile}> <i className='fab fa-twitter text-info fa-2x'></i></a>
                                    :<a href=""> <i className='fab fa-twitter text-info fa-2x'></i></a>
                                }
                                    
                                </div>

                                <div className="col-2  col-md-2">
                                {
                                    userInfo.linkedlnprofile?<a href={userInfo.linkedlnprofile}> <i className='fab fa-linkedin text-primary fa-2x'></i></a>
                                    :<a href=""> <i className='fab fa-linkedin text-primary fa-2x'></i></a>
                                }
                                    
                                </div>

                                <div className="col-2  col-md-2">
                                {
                                    userInfo.githubprofile?<a href={userInfo.githubprofile}><i className='fab fa-github text-dark fa-2x'></i></a>
                                    :<a href=""><i className='fab fa-github text-dark fa-2x'></i></a>
                                }
                                    
                                </div>
                                <div className="col-md-12 my-5">
                                    {
                                        userInfo.locationOnMAP?
                                        <iframe src={userInfo.locationOnMAP} className='location_profile'  allowFullScreen="" loading="lazy"></iframe>
                                        :<p>no Maps Location</p>

                                    }
                                </div>

                            </div>
                        </div>



                    </div>
                </form>

            </div>
        </div>

    );
}

export default Profile;
