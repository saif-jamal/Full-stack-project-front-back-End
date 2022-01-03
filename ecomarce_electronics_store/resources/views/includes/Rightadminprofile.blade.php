{{--      right side --}}
<div class="right_side_nav ">
    <div class="container-fluid">
        <div class="row">

            {{-- nav here--}}
            @include('includes.Rightnav')

            <div class="col-md-12 ">

{{--                top --}}
                <div class="container-fluid bg-transparent">

                    <div class="page-header min-height-300 border-radius-xl mt-4"
                         @if(!empty($userinfo))
                             style="background-image: url('{{asset('img/users/'.$userinfo->wallpaper)}}'); background-position-y: 50%;"
                         @else
                             style="background-image: url('{{asset('img/curved-images/curved0.jpg')}}'); background-position-y: 50%;"
                         @endif

                    >
                        <span class="mask bg-gradient-primary opacity-6"></span>
                    </div>

                    <div class="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden bg__change border-0">
                        <div class="row gx-4">

                            <div class="col-auto">
                                <div class="avatar avatar-xl position-relative">
                                    @if(!empty($userinfo))
                                        <img src="{{asset('img/users/'.$userinfo->userimage)}}" alt="profile_image" class="w-100 border-radius-lg shadow-sm img-profile">
                                    @else
                                        <img src="{{asset('img/users/user-men.jpg')}}" alt="profile_image" class="w-100 border-radius-lg shadow-sm img-profile">
                                    @endif

                                </div>
                            </div>

                            <div class="col-auto my-auto">
                                <div class="h-100">
                                    <h5 class="mb-1 white___chang">
                                        {{$user->name}}
                                    </h5>
                                    <p class="mb-0 font-weight-bold text-sm white___chang text-center">

                                           {{$user->role}}
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                                <div class="nav-wrapper position-relative end-0">
                                    <ul class="nav nav-pills nav-fill p-1 bg-transparent" role="tablist">

                                        <li class="nav-item">
                                            <a class="nav-link mb-0 px-0 py-1 active " data-bs-toggle="tab" href="{{route('showProducts')}}" role="tab" aria-selected="true">
                                                <svg class="text-warning" width="16px" height="16px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g transform="translate(603.000000, 0.000000)">
                                                                    <path class="color-background" d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z">
                                                                    </path>
                                                                    <path class="color-background" d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z" opacity="0.7"></path>
                                                                    <path class="color-background" d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z" opacity="0.7"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span class="ms-1 white___chang">Products</span>
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="false">
                                                <svg class="text-danger" width="16px" height="16px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <title>document</title>
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g transform="translate(154.000000, 300.000000)">
                                                                    <path class="color-background" d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z" opacity="0.603585379"></path>
                                                                    <path class="color-background" d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z">
                                                                    </path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span class="ms-1 white___chang">Messages</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="false">
                                                <svg class="text-info" width="16px" height="16px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <title>settings</title>
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g transform="translate(304.000000, 151.000000)">
                                                                    <polygon class="color-background" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667">
                                                                    </polygon>
                                                                    <path class="color-background" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" opacity="0.596981957"></path>
                                                                    <path class="color-background" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z">
                                                                    </path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span class="ms-1 white___chang">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

{{--                bottom--}}
                <div class="container-fluid py-4">
                    <div class="row">

                        <div class="my-2 col-12 col-xl-4">
                            <div class="card h-100 bg__change">
                                <div class="card-header pb-0 p-3">
                                    <h6 class="mb-0 white___chang">Platform Settings</h6>
                                </div>
                                <div class="card-body p-3">
                                    <h6 class="text-uppercase text-body text-xs font-weight-bolder white___chang">Account</h6>
                                    <ul class="list-group">
                                        <li class="list-group-item border-0 px-0 bg-transparent">
                                            <div class="form-check form-switch ps-0 d-flex">
                                                <input class="form-check-input ms-auto scrolling-checkbox" type="checkbox" id="flexSwitchCheckDefault" checked>
                                                <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0  white___chang" for="flexSwitchCheckDefault">Email me when someone follows me</label>
                                            </div>
                                        </li>
                                        <li class="list-group-item border-0 px-0 bg-transparent">
                                            <div class="form-check form-switch ps-0 d-flex">
                                                <input class="form-check-input ms-auto scrolling-checkbox" type="checkbox" id="flexSwitchCheckDefault1">
                                                <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0  white___chang" for="flexSwitchCheckDefault1">Email me when someone answers on my post</label>
                                            </div>
                                        </li>
                                        <li class="list-group-item border-0 px-0 bg-transparent">
                                            <div class="form-check form-switch ps-0 d-flex">
                                                <input class="form-check-input ms-auto scrolling-checkbox" type="checkbox" id="flexSwitchCheckDefault2" checked>
                                                <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0  white___chang" for="flexSwitchCheckDefault2">Email me when someone mentions me</label>
                                            </div>
                                        </li>
                                    </ul>
                                    <h6 class="text-uppercase text-body text-xs font-weight-bolder mt-4">Application</h6>
                                    <ul class="list-group">
                                        <li class="list-group-item border-0 px-0  bg-transparent">
                                            <div class="form-check form-switch ps-0 d-flex ">
                                                <input class="form-check-input ms-auto scrolling-checkbox" type="checkbox" id="flexSwitchCheckDefault3">
                                                <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0 white___chang" for="flexSwitchCheckDefault3">New launches and projects</label>
                                            </div>
                                        </li>
                                        <li class="list-group-item border-0 px-0 bg-transparent">
                                            <div class="form-check form-switch ps-0 d-flex">
                                                <input class="form-check-input ms-auto scrolling-checkbox" type="checkbox" id="flexSwitchCheckDefault4" checked>
                                                <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0  white___chang" for="flexSwitchCheckDefault4">Monthly product updates</label>
                                            </div>
                                        </li>
                                        <li class="list-group-item border-0 px-0 pb-0 bg-transparent">
                                            <div class="form-check form-switch ps-0 d-flex">
                                                <input class="form-check-input ms-auto scrolling-checkbox" type="checkbox" id="flexSwitchCheckDefault5">
                                                <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0  white___chang" for="flexSwitchCheckDefault5">Subscribe to newsletter</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="my-2 col-12 col-xl-4">
                            <div class="card h-100 bg__change">
                                <div class="card-header pb-0 p-3">
                                    <div class="row">
                                        <div class="col-md-8 d-flex align-items-center">
                                            <h6 class="mb-0 white___chang">Profile Information</h6>
                                        </div>
                                        <div class="col-md-4 text-end">
                                            <a href="javascript:;">
                                                <i class="fas fa-user-edit text-secondary text-sm white___chang" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body p-3">
                                    <p class="text-sm white___chang">
                                        Hi, I’m {{$user->name}}, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                                    </p>
                                    <hr class="horizontal gray-light my-4">
                                    <ul class="list-group">
                                        <li class="list-group-item border-0 ps-0 pt-0 text-sm bg-transparent white___chang"><strong class="text-dark white___chang">Full Name:</strong> &nbsp;{{$user->name}}</li>
                                        <li class="list-group-item border-0 ps-0 text-sm bg-transparent white___chang"><strong class="text-dark white___chang">Mobile:</strong> &nbsp;@if(!empty($userinfo)) {{$userinfo->phone_number}}@endif</li>
                                        <li class="list-group-item border-0 ps-0 text-sm bg-transparent white___chang"><strong class="text-dark white___chang">Email:</strong> &nbsp; {{$user->email}}</li>
                                        <li class="list-group-item border-0 ps-0 text-sm bg-transparent white___chang"><strong class="text-dark white___chang">Location:</strong> @if(!empty($userinfo))
                                                <a href="{{$userinfo->locationOnMAP}}">  <span class="material-icons text-danger fa-2x" >location_on</span></a>@endif
                                        </li>
                                        <li class="list-group-item border-0 ps-0 pb-0 bg-transparent white___chang">
                                            <strong class="text-dark text-sm white___chang">Social:</strong> &nbsp;
                                            @if(!empty($userinfo))
                                                <a class="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="{{$userinfo->facebookprofile}}">
                                                    <i class="fab fa-facebook fa-lg"></i>
                                                </a>
                                                <a class="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="{{$userinfo->twitterprofile}}">
                                                    <i class="fab fa-twitter fa-lg"></i>
                                                </a>
                                                <a class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="{{$userinfo->instgramprofile}}">
                                                    <i class="fab fa-instagram fa-lg"></i>
                                                </a>
                                                <a class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="{{$userinfo->linkedlnprofile}}">
                                                    <i class="fab fa-linkedin fa-lg"></i>
                                                </a>
                                                <a class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="{{$userinfo->githubprofile}}">
                                                    <i class="fab fa-github fa-lg"></i>
                                                </a>
                                            @endif
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class=" my-2col-12 col-xl-4">
                            <div class="card h-100 bg__change">
                                <div class="card-header pb-0 p-3">
                                    <h6 class="mb-0 white___chang">Other Admins</h6>
                                </div>
                                <div class="card-body p-3">
                                    <ul class="list-group">
                                      @foreach(\App\User::all() as $user2)
                                          @if($user2->role=='admin')
                                              @foreach(\App\Models\UsersInfo::all() as $userinfo2)
                                                  @if($userinfo2->user_id==$user2->id)
                                                        <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2 bg-transparent">
                                                            <div class="avatar me-3">
                                                                <img src="{{asset('img/users/'.$userinfo2->userimage)}}" alt="kal" class="border-radius-lg shadow img-profile">
                                                            </div>
                                                            <div class="d-flex align-items-start flex-column justify-content-center">
                                                                <h6 class="mb-0 text-sm white___chang">{{$user->name}}</h6>
                                                                <p class="mb-0 text-xs white___chang ">{{$user2->email}}</p>
                                                            </div>
                                                            <a class="btn btn-link pe-3 ps-0 mb-0 ms-auto replay_style" href="javascript:;">connect</a>
                                                        </li>
                                                  @endif
                                                @endforeach
                                          @endif
                                        @endforeach


                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="my-2 col-12 mt-4">
                            <div class="card mb-4 bg__change">
                                <div class="card-header pb-0 p-3">
                                    <h6 class="mb-1 white___chang">Products</h6>
                                    <p class="text-sm white___chang">products Selling easy to day </p>
                                </div>
                                <div class="card-body p-3">
                                    <div class="row">
                                             <p class="d-none">{{$count_check=0}}</p>
                                             <p class="d-none">{{$count_check_img=0}}</p>

                                        @foreach(\App\Models\Products::all() as $product)
                                               @if($user->id==$product->user_id && $count_check <3 )
                                                  <p class="d-none">{{$count_check++}}</p>
                                                  @foreach(\App\Models\productimages::all() as  $img_pro)
                                                      @if($img_pro->product_id==$product->id && $count_check_img!=1)
                                                        <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                                            <div class="card card-blog card-plain">
                                                                <div class="position-relative">
                                                                    <a class="d-block shadow-xl border-radius-xl">
                                                                        <img src="{{asset('img/products/'.$img_pro->imageproductname)}}" alt="img-blur-shadow" class="img-fluid shadow border-radius-xl">
                                                                    </a>
                                                                </div>
                                                                <div class="card-body px-1 pb-0">
                                                                    <p class=" text-dark mb-2 text-sm white___chang">product {{$count_check+1}}</p>
                                                                    <a href="javascript:;">
                                                                        <h5 class="white___chang">
                                                                            {{$product->productname_en}}
                                                                        </h5>
                                                                    </a>
                                                                    <p class="mb-4 text-sm white___chang">
                                                                        {{$product->descriptions_en}}
                                                                    </p>
                                                                    <div class="d-flex align-items-center justify-content-between">
                                                                        <button type="button" class="btn btn-outline-primary btn-sm mb-0 white___chang">View Project</button>
                                                                        <div class="avatar-group mt-2">
                                                                            <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                                                <img alt="Image placeholder" src="{{asset('img/users/'.$userinfo->userimage)}}">
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p class="d-none">{{$count_check_img=1}}</p>
                                                    @endif
                                                  @endforeach
                                                <p class="d-none">{{$count_check_img=0}}</p>
                                            @endif
                                        @endforeach

                                        <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                                <div class="card h-100 card-plain border">
                                                    <div class="card-body d-flex flex-column justify-content-center text-center">
                                                        <a href="{{route("createproduct")}}">
                                                            <i class="fa fa-plus text-secondary mb-3 white___chang"></i>
                                                            <h5 class=" text-secondary white___chang"> New product </h5>
                                                        </a>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer class="footer pt-3  ">
                        <div class="container-fluid">
                            <div class="row align-items-center justify-content-lg-between">
                                <div class="col-lg-6 mb-lg-0 mb-4">
                                    <div class="copyright text-center text-sm text-muted text-lg-start">
                                        © <script>
                                            document.write(new Date().getFullYear())
                                        </script>,
                                        made with <i class="fa fa-heart text-danger"></i> by
                                        <a href="https://www.creative-tim.com" class="font-weight-bold" target="_blank">Saif jamal</a>
                                        for a better web.
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                                        <li class="nav-item">
                                            <a href="{{route('dashboard')}}" class="nav-link text-muted" >Dashboard</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="" class="nav-link text-muted" >About Us</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="" class="nav-link text-muted" >Blog</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="" class="nav-link pe-0 text-muted">License</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>


        </div>
    </div>
</div>

