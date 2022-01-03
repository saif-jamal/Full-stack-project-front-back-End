<div class="right_side_nav ">
    <div class="container-fluid">
        <div class="row">

            {{-- nav here--}}
            @include('includes.Rightnav')

            <div class="col-md-12 my-4">
                <div class="row d-flex justify-content-center">
                    {{--products --}}
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10 my-3">

                        <div class="card bg__change p-4 overflow-hidden">
                            <h1 class="white___chang my-4">Update User Information</h1>
                            @if($errors->any())
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach($errors->all() as $error)
                                            <li>{{$error}}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif

                            <form method="post" action="{{route('user.updateinfo')}}" enctype="multipart/form-data">

                                @csrf

                                <div class="container-fluid">

                                    @if(isset($user))

                                        <input type="hidden" name="user_id" value="{{$user->id}}">
                                        @if(!empty($userinfo))
                                           <input type="hidden" name="userInfo_id" value="{{$userinfo->id}}">
                                         @else
                                            <input type="hidden" name="userInfo_id" value="0">
                                        @endif
                                        <!-- image  input -->
                                        <div class="form-outline mb-4 ">
                                            <span class="text-dark white___chang fa-1x">User Image <span class="text-danger">(Optional)</span></span>
                                            <div class="ms-auto me-auto cat__img d-flex justify-content-center align-items-center fa-3x bg__change_____formproduct   "
                                                 style="
                                                 @if( !empty($userinfo) && $userinfo->userimage !='')
                                                     background-image: url('{{asset('img/users/'.$userinfo->userimage)}}');
                                                 @endif
                                                 border-radius: 50%; width: 300px;height: 300px;" id="add_img_button" title="User upload image"

                                            ><span class="material-icons white___chang">add</span></div>
                                            <input type="file" id="category____img" class="form-control img_cat_field_input   bg__change_____formproduct" name="userimage" onchange="handleimguploadforcategory(this.files)"/>
                                        </div>

                                        <!-- wallpaper  input -->
                                        <div class="form-outline mb-4">
                                            <span class="text-dark white___chang fa-1x">User wallpaper <span class="text-danger">(Optional)</span></span>
                                            <div class="ms-5 cat__img d-flex justify-content-center align-items-center fa-3x bg__change_____formproduct rounded-3 " style="
                                            @if( !empty($userinfo) && $userinfo->wallpaper !='')
                                                background-image: url('{{asset('img/users/'.$userinfo->wallpaper)}}');
                                            @endif
                                            height: 500px" id="add_img_button2" title="user wallpaper upload image"><span class="material-icons white___chang">add</span></div>
                                            <input type="file" id="category____img2" class="form-control img_cat_field_input   bg__change_____formproduct" name="wallpaper" onchange="handleimguploadforcategory2(this.files)"/>
                                        </div>

                                        <div class="row">
                                            <!-- name  input -->
                                            <div class="form-outline mb-4 col-md-5">
                                                <span class="text-dark white___chang fa-1x">Full Name<span class="text-warning">(optional)</span></span>
                                                <input type="text" id="form4Example1" class="form-control   bg__change_____formproduct" placeholder="Saif Jamal " value="{{$user->name}}" name="name" />
                                            </div>

                                            <!-- email input -->
                                            <div class="form-outline mb-4 col-md-5">
                                                <span class="text-dark white___chang fa-1x">Email<span class="text-warning">(optional)</span></span>
                                                <input type="email" id="email" class="form-control   bg__change_____formproduct" placeholder="saif@example.com" value="{{$user->email}}" name="email" />
                                            </div>

                                            <!-- password input -->
                                            <div class="form-outline mb-4 col-md-5">
                                                <span class="text-dark white___chang fa-1x">Password<span class="text-warning">(optional)</span></span>

                                                <input type="password" id="password" class="form-control   bg__change_____formproduct" placeholder="Enter New paassword please"  name="password" />
                                            </div>

                                            <!-- phone number  input -->
                                            <div class="form-outline mb-4 col-md-5">
                                                <span class="text-dark white___chang fa-1x">Phone Number<span class="text-danger">(Optional)</span></span>
                                                <input  type="text" id="form4Example1" class="form-control   bg__change_____formproduct"
                                                     @if( !empty($userinfo))
                                                     value="{{$userinfo->phone_number}}"
                                                     @endif
                                                     placeholder="(+964) 750 031 9142" name="phone_number" />
                                            </div>

                                            <!-- role  input -->
                                            <div class="form-outline mb-4 col-md-5">
                                                <span class="text-dark white___chang fa-1x">Your Role<span class="text-warning">(required)</span></span>
                                                <select name="role" id="role" class="white___chang w-90 py-2 bg__change_____formproduct" >
                                                    @if($user->role=="admin")
                                                    <option value="admin" selected>Admin</option>
                                                    <option value="user">user</option>
                                                    @else
                                                        <option value="admin" >Admin</option>
                                                        <option value="user" selected>user</option>
                                                    @endif
                                                </select>

                                            </div>

                                        </div>


                                        <div class="form-outline mb-4">
                                            <div class="row">
                                                {{--gender section --}}
                                                <div class="col-md-3">
                                                    <span class="text-dark white___chang fa-1x">gender <span class="text-danger">(Optional)</span></span>
                                                    <select name="gender" id="gender" class="white___chang w-90 py-2 bg__change_____formproduct" >
                                                        @if(!empty($userinfo))
                                                            @if($userinfo->gender==="male")
                                                                <option value="male" selected>Male </option>
                                                                <option value="female">Female</option>
                                                              @else
                                                                <option value="male">Male </option>
                                                                <option value="female" selected>Female</option>
                                                            @endif
                                                        @else
                                                            <option value="male">Male </option>
                                                            <option value="female">Female</option>
                                                        @endif

                                                    </select>
                                                </div>

                                                <!-- facebook profile   -->
                                                <div class="form-outline mb-4 col-md-3">
                                                    <span class="text-dark white___chang fa-1x">Your Facebook Profile <span class="text-danger">(Option)</span></span>
                                                    <input placeholder="Your Facebook profile" type="url"
                                                       @if(!empty($userinfo))
                                                           value="{{$userinfo->facebookprofile}}"
                                                       @endif
                                                    name="facebookprofile" id="facebookprofile" class="white___chang w-90 py-2 bg__change_____formproduct" >
                                                </div>

                                                <!-- instgram profile profile   -->
                                                <div class="form-outline mb-4 col-md-3">
                                                    <span class="text-dark white___chang fa-1x">Your Instagram Profile <span class="text-danger">(Option)</span></span>
                                                    <input type="url" placeholder="Your Instagram profile"
                                                           @if(!empty($userinfo))
                                                           value="{{$userinfo->instgramprofile}}"
                                                           @endif
                                                           name="instgramprofile" id="instgramprofile" class="white___chang w-90 py-2 bg__change_____formproduct" >
                                                </div>

                                                <!-- twitter profile profile   -->
                                                <div class="form-outline mb-4 col-md-3">
                                                    <span class="text-dark white___chang fa-1x">Your Twitter Profile <span class="text-danger">(Option)</span></span>
                                                    <input type="url" placeholder="Your Twitter profile"
                                                           @if(!empty($userinfo))
                                                           value="{{$userinfo->twitterprofile}}"
                                                           @endif
                                                           name="twitterprofile" id="twitterprofile" class="white___chang w-90 py-2 bg__change_____formproduct" >
                                                </div>

                                                <!-- linkedln profile profile profile   -->
                                                <div class="form-outline mb-4 col-md-3">
                                                    <span class="text-dark white___chang fa-1x">Your LinkedIn Profile <span class="text-danger">(Option)</span></span>
                                                    <input type="url" placeholder="Your linkedln profile"
                                                           @if(!empty($userinfo))
                                                           value="{{$userinfo->linkedlnprofile}}"
                                                           @endif
                                                           name="linkedlnprofile" id="linkedlnprofile" class="white___chang w-90 py-2 bg__change_____formproduct" >
                                                </div>

                                                <!-- github profile profile profile profile   -->
                                                <div class="form-outline mb-4 col-md-3">
                                                    <span class="text-dark white___chang fa-1x">Your Github Profile <span class="text-danger">(Option)</span></span>
                                                    <input type="url" placeholder="Your Github profile"
                                                           @if(!empty($userinfo))
                                                           value="{{$userinfo->githubprofile}}"
                                                           @endif
                                                           name="githubprofile" id="githubprofile" class="white___chang w-90 py-2 bg__change_____formproduct" >
                                                </div>

                                                <!-- location On MAP profile profile profile   -->
                                                <div class="form-outline mb-4 col-md-3">
                                                    <span class="text-dark white___chang fa-1x">Your location On MAP  <span class="text-danger">(Option)</span></span>
                                                    <input type="url" placeholder="Your location  On MAP"
                                                           @if(!empty($userinfo))
                                                           value="{{$userinfo->locationOnMAP}}"
                                                           @endif
                                                           name="locationOnMAP" id="locationOnMAP" class="white___chang w-90 py-2 bg__change_____formproduct" >
                                                </div>


                                            </div>

                                        </div>

                                        {{--status --}}
                                        <div class="form-outline mb-4">
                                            <div class="row">

                                                {{--status english--}}
                                                <div class="col-md-4 ">
                                                    <div class="form-outline mb-4 ">
                                                        <span class="text-dark white___chang fa-1x">Status  <span class="text-warning">(required)</span></span>
                                                        <select name="status" id="status" class="white___chang w-100 py-2 ps-2 pe-4 bg__change_____formproduct" >
                                                            @if(!empty($userinfo))
                                                               @if($userinfo->status=='active')
                                                                    <option value="active" selected>Active</option>
                                                                    <option value="blocked">Blocked</option>
                                                                @else
                                                                    <option value="active">Active</option>
                                                                    <option value="blocked" selected>Blocked</option>
                                                               @endif
                                                            @else
                                                                   <option value="active">Active</option>
                                                                   <option value="blocked">Blocked</option>
                                                            @endif

                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    @endif

                                    <!-- Submit button -->
                                    <button type="submit" class="btn btn-dark   mb-4" id="submit__user">Update User Info</button>

                                </div>
                            </form>
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


