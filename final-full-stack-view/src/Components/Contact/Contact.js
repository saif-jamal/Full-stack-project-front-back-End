import React ,{useEffect,useState} from 'react';
import './Contact.css'
// import Email from 'smtpjs';
import emailjs from 'emailjs-com';

// sweatalert2 import 
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Contact() {
const [userInfo,setUserinfo]=useState({});
const [check_log,setCHek_log]=useState(false);
const [nameERRor,setnameERROR]=useState('');
const [emailERRor,setemailERROR]=useState('');
const [phoneERRor,setphoneERROR]=useState('');
const [subjectERRor,setsubjectERROR]=useState('');
const [messageERRor,setmessageERROR]=useState('');


    const animateButton = (e)=>{

        // e.preventDefault();
        //reset animation
        e.target.classList.remove('animate');
        
        e.target.classList.add('animate');
        setTimeout(function(){
          e.target.classList.remove('animate');
        },700);
      };



    useEffect(()=>{
          if(localStorage.getItem('userdata')=='true'){
            setUserinfo(JSON.parse(localStorage.getItem('userInfo')))
            setCHek_log(true);
          }
          else{
            setCHek_log(false);
          }
    },[])

    useEffect(() => {
    
          
          var bubblyButtons = document.getElementsByClassName("bubbly-button");
          
          for (var i = 0; i < bubblyButtons.length; i++) {
            bubblyButtons[i].addEventListener('click', animateButton, false);
          }
    },[])


    function sentEmail(e){
         e.preventDefault();
         const name=document.getElementById('Contactname').value;
         const email=document.getElementById('Contactemail').value;
         const phone=document.getElementById('Contactphone').value;
         const subject__=document.getElementById('Contactsubject').value;
         const message__=document.getElementById('Contactmessage').value;

         if(check_log){
             if(name && email && phone && subject__ && message__){
                 setnameERROR('');
                 setemailERROR('');
                 setphoneERROR('');
                 setsubjectERROR('');
                 setmessageERROR('');

                 emailjs.sendForm(
                     'service_sv08o4o',
                     'template_2kh18sc',
                     e.target,
                     'user_xPRqgLIioBEBIpeYoKF26'
                     ).then(res=>{
                        let MySwal = withReactContent(Swal)

                         MySwal.fire({
                            position:'top',
                            title: <strong>Work Done!</strong>,
                            html: <i>Your message has ben send successfully</i>,
                            icon: 'success',
                            showConfirmButton: false,
                            timer:3500
                        })
                     }).catch(err=>{
                        let MySwal = withReactContent(Swal)
                         MySwal.fire({
                            position:'top',
                            title: <strong>Oops...!</strong>,
                            html: <i>{err}</i>,
                            icon: 'error',
                            showConfirmButton: false,
                            timer:2500
                          })
                     });
                     e.target.reset();
             }else{
                  if(name==''){
                      setnameERROR('Name is required *');
                  }
                  if(email==''){
                    setemailERROR('Email is required *');
                  }
                  if(phone==''){
                      setphoneERROR('Phone is required *');
                  }
                  if(subject__==''){
                    setsubjectERROR('Subject is required *');
                   }
                   if(message__==''){
                    setmessageERROR('Message is required *');
                }

             }
        
         }else{
            let MySwal = withReactContent(Swal)
             MySwal.fire({
                position:'top',
                title: <strong>Oops...!</strong>,
                html: <i className='text-danger fa-1x'>Must you Login frist</i>,
                icon: 'error',
                showConfirmButton: false,
                timer:2500
              })
         }
    

      
    };
  

    return (
        <div className='Contact animate__animated  animate__fadeIn'>

            {/*Contact header*/}
            <div className="contact_header text-center text-white pt-5" >

                {/*blur effect*/}
                <div className="blur-effect " style={{ backgroundImage: 'URL("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80")' }}></div>

                <h1 className='fa-3x pt-5 effect font-text-contact'>Contact</h1>
                <div className="hr___ mt-2 mb-3 effect"></div>
                <h5 className='text-width mt-5 effect'>In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</h5>
            </div>

            {/*Contact section1*/}
            <div className="contact_section1">
                <div className="container px-lg-5">
                    <div className="row text-center">
                        <p className='section3_header'>Our Teams</p>
                        <h1 className='section3_text'>MEET WITH PROFESSIONALS</h1>
                        <div className="hr__section3"></div>
                    </div>


                    <div class="row px-lg-5 m-auto mt-5 text-center">

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                            <div className="box-service">
                                <i className='fas fa-map-marked-alt text-warning fa-4x text-center ms-2'></i>
                                <br />
                                <span className='contact_text text-center ms-2'>Address</span>
                                <p className='text-left text-muted'>Iraq,Baghdad</p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                            <div className="box-service">
                                <i className='fas fa-headset text-warning fa-4x text-center ms-2'></i>
                                <br />
                                <span className='contact_text text-center ms-2'>PHONE</span>
                                <p className='text-left text-muted cursor-pointer'>(+964) 07830056217</p>
                                <p className='text-left text-muted'>(+964) 07830456216</p>

                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                            <div className="box-service">
                                <i className='fas fa-envelope-open-text text-warning fa-4x text-center ms-2'></i>
                                <br />
                                <span className='contact_text text-center ms-2'>EMAIL</span>
                                <p className='text-left text-muted'>saif.jamal6173@gmail.com</p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                            <div className="box-service">
                                <i className='fas fa-mug-hot text-warning fa-4x text-center ms-2'></i>

                                <br />
                                <span className='container contact_text text-center ms-2'>FOLLOW US</span>
                                <div className="row">

                                    <div className="col-3 col-md-3">
                                        <div className="contact_socil">
                                            <i class="fab fa-facebook social"></i>
                                        </div>
                                    </div>

                                    <div className="col-3  col-md-3">
                                        <div className="contact_socil">
                                            <i class="fab fa-twitter social"></i>
                                        </div>

                                    </div>

                                    <div className=" col-3 col-md-3">
                                        <div className="contact_socil">
                                            <i class="fab fa-instagram social"></i>
                                        </div>
                                    </div>

                                    <div className="col-3  col-md-3">
                                        <div className="contact_socil">
                                            <i class="fab fa-linkedin social"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>



            </div>

            {/*Contact section2 map*/}
            <div className="contact_map my-5">
                <div className="container ">
                    <div className="row px-lg-5">
                        <div className="col-md-12">
                            <iframe className='contact_map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53490.6079432466!2d44.388906635229475!3d33.078496170835464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1639780660967!5m2!1sar!2siq"
                                style={{ border: '0;' }} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/*Contact section2 form*/}
            <div className='contact_form'>
                <form method='post' onSubmit={sentEmail}>
                    <div className="container px-lg-5">
                        <div className="row px-lg-5 text-center">
                            <div className="col-md-6 my-3">
                                <input className='input_style_contact' type="text" name="Contactname" id="Contactname" required placeholder='Name...' />
                                <p className='text-danger'>{nameERRor}</p>
                            </div>

                            <div className="col-md-6 my-3">
                                <input className='input_style_contact' type="email" name="Contactemail" id="Contactemail" required placeholder='Email...' />
                                <p className='text-danger'>{emailERRor}</p>
                            </div>

                            <div className="col-md-6 my-3">
                                <input className='input_style_contact' type="text" name="Contactphone" id="Contactphone" required placeholder='Phone...' />
                                <p className='text-danger'>{phoneERRor}</p>
                            </div>

                            <div className="col-md-6 my-3">
                                <input className='input_style_contact' type="text" name="Contactsubject" id="Contactsubject" placeholder='Subject...' />
                                <p className='text-danger'>{subjectERRor}</p>
                            </div>

                            <div className="col-md-12 my-3">
                                <p className='text-danger'>{messageERRor}</p>
                                <textarea className='input_style_contact message_contact text-left' type="text" name="Contactmessage" id="Contactmessage" placeholder='Your Message...' ></textarea>
                      
                            </div>

                            <div className="col-md-12 my-4 mb-5">
                                <button className="bubbly-button " type='submit' >SENT MESSAGE</button>
                                
                            </div>


                        </div>
                    </div>
                </form>


            </div>


        </div>
    );
}

export default Contact;
