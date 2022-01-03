{{--      left side nav --}}
<p class="d-none">{{$userImage=''}}</p>
@foreach(\App\Models\UsersInfo::all() as $user)
    @if($user->user_id == \Illuminate\Support\Facades\Auth::user()->id)
        <p class="d-none">{{$userImage=$user->userimage}}</p>
    @endif
@endforeach



<div class="left_side_nav">
    <div class="container">
        <div class="row">


            <div class="menu_button menu__button__">
                <div class="wrapper-menu ">
                    <div class="line-menu half start"></div>
                    <div class="line-menu"></div>
                    <div class="line-menu half end"></div>
                </div>
            </div>

            {{--heading of the aside list--}}
            <div class="col-md-12 my-3 text-left px-4 first_line_list shadow-none">
                <a class="link__style pt-2" href="/"> <p class="text-white aside_list_font text__exception_change_color">E-store Electronics</p></a>
            </div>

            {{--admin content--}}
            <div class="col-md-12 my-2 text-left px-4 second_line_list pb-3 shadow-none">

                <div class="div_second shadow-none">
                    <div class="left__" title='{{\Illuminate\Support\Facades\Auth::user()->name}}'>
                        <img class="img-fluid " src={{asset('img/users/'.$userImage)}} alt="">
                        <p class="text-white ms-3 mt-1 text__exception_change_color" >Admin</p>
                    </div>
                    <span class="material-icons text-white mt-1 text__exception_change_color" id="arrow_show">arrow_drop_down</span>
                </div>

                <div class="text-white  mt-3 show_box shadow-none">
                    <a href="{{route('myprofile')}}">
                        <div class="left__Admin ms-1 btn text-white">
                            <span class="me-3 mt-2 text__exception_change_color">MP</span> <p class="ms-2 font_admin_list mt-2 text__exception_change_color">My Profile</p>
                        </div>
                    </a>
                    <div class="left__Admin ms-1 btn text-white"
                         onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">

                        <span class="me-3 ms-2 mt-2 text__exception_change_color">L</span> <p class="ms-3 font_admin_list mt-2 text__exception_change_color">Logout</p>
                    </div>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf

                    </form>

                </div>
            </div>

            {{--  darkmode--}}
            <div class="darkmode ">
                <div class="container ">
                    <label class="slider " id="slideMode">
                        <input type="checkbox">
                        <span class="s-body darkmodebutton">
                              <span class="svg ">
                                    <span class="moon">
                                        <svg viewBox="0 0 497 497"><path d="m248.5 0c-66.377 0-128.781 25.849-175.716 72.784-46.935 46.936-72.784 109.34-72.784 175.716s25.849 128.78 72.784 175.716c46.935 46.935 109.339 72.784 175.716 72.784 17.487 0 34.693-1.812 51.418-5.313v-486.374c-16.725-3.501-33.931-5.313-51.418-5.313z" fill="#676f72"/><path d="m497 248.5c0-66.376-25.849-128.78-72.784-175.716-34.57-34.57-77.538-57.683-124.298-67.471-46.761 9.788-89.728 32.901-124.298 67.471-46.935 46.936-72.784 109.34-72.784 175.716s25.849 128.78 72.784 175.716c34.57 34.57 77.538 57.683 124.298 67.471 46.761-9.788 89.728-32.901 124.298-67.471 46.935-46.936 72.784-109.34 72.784-175.716z" fill="#82888b"/><ellipse cx="169.331" cy="220.763" fill="#ff8e9e" rx="29.212" ry="23.263" transform="matrix(1 .003 -.003 1 .693 -.529)"/><ellipse cx="327.669" cy="221.259" fill="#ff8e9e" rx="29.212" ry="23.263" transform="matrix(-1 -.003 .003 -1 654.644 443.544)"/><path d="m266 224c0-4.142-3.358-7.5-7.5-7.5h-20c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h20c4.142 0 7.5-3.358 7.5-7.5z" fill="#313d40"/><path d="m203.235 179.234c-3.737-1.789-8.215-.206-10.001 3.531-1.666 3.484-5.291 5.735-9.234 5.735s-7.568-2.251-9.234-5.735c-1.787-3.737-6.266-5.317-10.001-3.531-3.737 1.787-5.318 6.265-3.531 10.001 4.144 8.666 13.08 14.265 22.766 14.265s18.623-5.599 22.766-14.265c1.787-3.736.206-8.215-3.531-10.001z" fill="#313d40"/><path d="m331.235 179.234c-3.737-1.789-8.215-.206-10.001 3.531-1.666 3.484-5.291 5.735-9.234 5.735s-7.568-2.251-9.234-5.735c-1.787-3.737-6.266-5.317-10.001-3.531-3.737 1.787-5.318 6.265-3.531 10.001 4.144 8.666 13.08 14.265 22.766 14.265s18.623-5.599 22.766-14.265c1.787-3.736.206-8.215-3.531-10.001z" fill="#313d40"/><g fill="#676f72"><circle cx="396.336" cy="296.5" r="45"/><circle cx="176.335" cy="116.5" r="30"/><circle cx="304.5" cy="413.5" r="15"/></g><circle cx="60" cy="248.5" fill="#4c5659" r="15"/><circle cx="366.336" cy="101.5" fill="#676f72" r="15"/><path d="m175.962 424.553-61.848-101.686c-14.638 10.941-24.114 28.408-24.114 48.089 0 33.137 26.863 60 60 60 9.437 0 18.019-2.521 25.962-6.403-.227-.226.227.227 0 0z" fill="#4c5659"/><path d="m210.001 370.956c0-33.137-26.863-60-60-60-13.456 0-25.878 4.43-35.886 11.911 11.814 37.841 33.016 72.854 61.848 101.686.227.227-.228-.226 0 0 19.95-9.748 34.038-29.896 34.038-53.597z" fill="#676f72"/><path d="m40.416 40.416c4.627-1.191 8.983-3.058 12.956-5.49 4.837-2.96 4.837-9.892 0-12.852-3.973-2.431-8.329-4.298-12.956-5.489-1.191-4.627-3.058-8.983-5.49-12.956-2.96-4.837-9.892-4.837-12.852 0-2.432 3.973-4.298 8.329-5.49 12.957-4.627 1.191-8.983 3.058-12.956 5.489-4.837 2.96-4.837 9.892 0 12.852 3.973 2.432 8.329 4.299 12.956 5.49 1.191 4.627 3.058 8.983 5.49 12.956 2.96 4.837 9.892 4.837 12.852 0 2.432-3.974 4.299-8.33 5.49-12.957z" fill="#ffce71"/><path d="m440.465 440.615c6.494-1.672 12.608-4.292 18.184-7.705 6.789-4.155 6.789-13.883 0-18.038-5.576-3.413-11.69-6.033-18.184-7.704-1.672-6.494-4.292-12.608-7.705-18.185-4.155-6.789-13.883-6.789-18.038 0-3.413 5.576-6.033 11.69-7.705 18.185-6.494 1.672-12.608 4.292-18.184 7.704-6.789 4.155-6.789 13.883 0 18.038 5.576 3.413 11.69 6.033 18.184 7.705 1.672 6.494 4.292 12.607 7.705 18.184 4.155 6.789 13.883 6.789 18.038 0 3.413-5.577 6.033-11.691 7.705-18.184z" fill="#ffce71"/></svg>
                                    </span>
                                    <span class="sun">
                                        <svg viewBox="0 0 512 512.00077"><path d="m503.765625 276.285156-35.582031 36.585938 12.53125 49.433594c3.875 15.289062-5.136719 30.882812-20.316406 35.15625l-49.109376 13.828124-13.828124 49.109376c-4.273438 15.179687-19.867188 24.191406-35.15625 20.316406l-49.433594-12.53125-36.585938 35.582031c-11.292968 10.980469-29.277344 10.980469-40.570312 0l-36.585938-35.582031-49.433594 12.53125c-15.289062 3.875-30.882812-5.136719-35.15625-20.316406l-13.828124-49.109376-49.109376-13.828124c-15.179687-4.273438-24.191406-19.867188-20.316406-35.15625l12.53125-49.433594-35.578125-36.585938c-10.984375-11.292968-10.984375-29.277344 0-40.570312l35.578125-36.585938-12.53125-49.433594c-3.875-15.289062 5.136719-30.882812 20.316406-35.15625l49.109376-13.828124 13.828124-49.109376c4.273438-15.179687 19.867188-24.191406 35.15625-20.316406l49.433594 12.53125 36.585938-35.582031c11.292968-10.980469 29.277344-10.980469 40.570312 0l36.585938 35.582031 49.4375-12.53125c15.285156-3.875 30.878906 5.136719 35.152344 20.316406l13.828124 49.109376 49.109376 13.828124c15.179687 4.273438 24.191406 19.867188 20.316406 35.15625l-12.53125 49.433594 35.582031 36.585938c10.980469 11.292968 10.980469 29.277344 0 40.570312zm0 0" fill="#ffde55"/><path d="m227.050781 357.875c-91.003906-110.757812-68.402343-266.832031-53.703125-320.59375l-23.652344-5.996094c-15.289062-3.875-30.878906 5.136719-35.15625 20.316406l-13.828124 49.109376-49.109376 13.828124c-15.179687 4.273438-24.191406 19.867188-20.316406 35.15625l12.53125 49.433594-35.578125 36.585938c-10.984375 11.292968-10.984375 29.277344 0 40.570312l35.578125 36.585938-12.53125 49.433594c-3.875 15.289062 5.136719 30.882812 20.316406 35.15625l49.109376 13.828124 13.828124 49.109376c4.273438 15.179687 19.867188 24.191406 35.15625 20.316406l49.433594-12.53125 36.589844 35.582031c11.292969 10.980469 29.273438 10.980469 40.566406 0l22.183594-21.574219c-14.234375-38.957031-36.558594-81.890625-71.417969-124.316406zm0 0" fill="#ffc757"/><path d="m431.792969 256c0 97.089844-78.703125 175.792969-175.792969 175.792969-97.085938 0-175.792969-78.703125-175.792969-175.792969s78.707031-175.792969 175.792969-175.792969c97.089844 0 175.792969 78.703125 175.792969 175.792969zm0 0" fill="#ffeb99"/><path d="m227.050781 357.875c-64.148437-78.070312-71.847656-178.664062-65.65625-250.066406-48.824219 31.234375-81.1875 85.933594-81.1875 148.191406 0 97.089844 78.707031 175.792969 175.792969 175.792969 6.617188 0 13.167969-.367188 19.59375-1.078125-12.601562-23.878906-28.5-48.445313-48.542969-72.839844zm0 0" fill="#ffe36c"/><path d="m256 297.777344c-15.988281 0-28.949219-12.960938-28.949219-28.949219v-21.046875c0-4.363281 3.539063-7.902344 7.902344-7.902344h42.09375c4.363281 0 7.902344 3.539063 7.902344 7.902344v21.046875c0 15.988281-12.960938 28.949219-28.949219 28.949219zm0 0" fill="#57565c"/><path d="m190.046875 268.828125c0-13.578125-13.824219-24.589844-30.878906-24.589844-17.054688 0-30.878907 11.011719-30.878907 24.589844 0 13.582031 13.824219 24.589844 30.878907 24.589844 17.054687 0 30.878906-11.007813 30.878906-24.589844zm0 0" fill="#ffa6bb"/><path d="m383.710938 268.828125c0-13.578125-13.824219-24.589844-30.878907-24.589844-17.050781 0-30.875 11.011719-30.875 24.589844 0 13.582031 13.824219 24.589844 30.875 24.589844 17.054688 0 30.878907-11.007813 30.878907-24.589844zm0 0" fill="#ffa6bb"/><g fill="#57565c"><path d="m339.089844 255.332031c-4.265625 0-7.722656-3.460937-7.722656-7.726562v-12.828125c0-4.265625 3.457031-7.726563 7.722656-7.726563 4.269531 0 7.726562 3.460938 7.726562 7.726563v12.828125c0 4.265625-3.457031 7.726562-7.726562 7.726562zm0 0"/><path d="m172.910156 255.332031c-4.269531 0-7.726562-3.460937-7.726562-7.726562v-12.828125c0-4.265625 3.457031-7.726563 7.726562-7.726563 4.265625 0 7.726563 3.460938 7.726563 7.726563v12.828125c0 4.265625-3.460938 7.726562-7.726563 7.726562zm0 0"/></g></svg>
                                    </span>
                              </span>
			              </span>
                        <span class="s-shadow"></span>
                    </label>
                </div>
            </div>


            {{--dashboard button in side list--}}
            <a href="{{route('dashboard')}}" >
                <div class="col-md-12 my-2 text-left py-1  div_Third m-auto rounded btn clicked_list0 shadow-none"
                 style="background-color: {{$color->ColorDashboard}}"
                >
                    <span class="material-icons me-2 text-white mt-2 text__exception_change_color">dashboard</span><p class="text-white font_admin_list ms-3 mt-2 text__exception_change_color">Dashboard</p>
                </div>
            </a>

            {{--Users button in side list--}}
            <a href="{{route('users')}}">
                <div class="col-md-12 my-2 text-left py-1  div_Fourth m-auto rounded btn clicked_list1 shadow-none"
                     style="background-color: {{$color->ColorUsers}}"
                >
                    <span class="material-icons me-2 text-white mt-2 text__exception_change_color">people_outline</span><p class="text-white font_admin_list ms-3 mt-2 text__exception_change_color">Users</p>
                </div>
            </a>

            {{--Products button in side list--}}

                <div class="col-md-12 my-2 text-left py-1  div_Fourth m-auto rounded btn clicked_list2 shadow-none"
                     style="background-color: {{$color->ColorProducts}}"
                >
                    <span class="material-icons me-2 text-white mt-2 text__exception_change_color">production_quantity_limits</span><p class="text-white font_admin_list ms-3 mt-2 text__exception_change_color">Products</p>
                    <span class="material-icons text-white mt-1 marginproductarrow text__exception_change_color" id="arrow_show2">arrow_drop_down</span>
                </div>

            <div class="text-white  mt-3 show_box2 shadow-none">
                <a href="{{route('showProducts')}}">
                    <div class="left__Admin ms-1 btn text-white clicked_list3"
                         style="background-color: {{$color->ColorShowProducts}}"
                    >
                        <span class="me-3 mt-2 text__exception_change_color">SH</span> <p class="ms-2 font_admin_list mt-2 pt-1 text__exception_change_color">Show Products</p>
                    </div>
                </a>
                <a href="{{route('createproduct')}}">
                    <div class="left__Admin ms-1 btn text-white clicked_list4"
                         style="background-color: {{$color->ColorCreateProduct}}"
                    >
                        <span class="me-3  mt-2 text__exception_change_color">CP</span> <p class="ms-2 font_admin_list mt-2 pt-1 text__exception_change_color">Create Product</p>
                    </div>
                </a>
                <hr class="bg-white ">
            </div>

            {{--Categories button in side list--}}

                <div class="col-md-12 my-2 text-left py-1  div_Fourth m-auto rounded btn clicked_list5 shadow-none"
                     style="background-color: {{$color->ColorCategories}}"
                >
                    <span class="material-icons me-2 text-white mt-2 text__exception_change_color">view_quilt</span><p class="text-white font_admin_list ms-3 mt-2 text__exception_change_color">Gategories</p>
                    <span class="material-icons text-white mt-1  margin__list5 text__exception_change_color" id="arrow_show3">arrow_drop_down</span>
                </div>


            <div class="text-white  mt-3 show_box3 shadow-none">
                <a href="{{route('ShowCategories')}}">
                    <div class="left__Admin ms-1 btn text-white clicked_list6"
                         style="background-color: {{$color->ColorShowCategories}}"
                    >
                        <span class="me-3 mt-2 text__exception_change_color">SH</span> <p class="ms-2 font_admin_list mt-2 pt-1 text__exception_change_color">Show Gategories</p>
                    </div>
                </a>
                <a href="{{route('createcategory')}}">
                    <div class="left__Admin ms-1 btn text-white clicked_list7"
                         style="background-color: {{$color->ColorCreateCategory}}"
                    >
                        <span class="me-3  mt-2 text__exception_change_color">CP</span> <p class="ms-2 font_admin_list mt-2 pt-1 text__exception_change_color">Create Gategory</p>
                    </div>
                </a>
                <hr class="bg-white ">
            </div>

            {{--Settings button in side list--}}
            <a href="#">
                <div class="col-md-12 my-2 text-left py-1  div_Fourth m-auto rounded btn clicked_list8 shadow-none"
                     style="background-color: {{$color->ColorSettings}}"
                >
                    <span class="material-icons me-2 text-white mt-2 text__exception_change_color">settings</span><p class="text-white font_admin_list ms-3 mt-2 text__exception_change_color">Settings</p>
                </div>
            </a>

            {{--Notifications button in side list--}}
            <a href="#">
                <div class="col-md-12 my-2 text-left py-1  div_Fourth m-auto rounded btn clicked_list9 shadow-none"
                     style="background-color: {{$color->ColorNotifications}}"
                >
                    <span class="material-icons me-2 text-white mt-2 text__exception_change_color">notifications</span><p class="text-white font_admin_list ms-3 mt-2 text__exception_change_color">Notifications</p>
                </div>
            </a>

            {{--Language button in side list--}}
            <a href="#">
                <div class="col-md-12 my-2 text-left py-1  div_Fourth m-auto rounded btn clicked_list10 shadow-none"
                     style="background-color: {{$color->ColorLanguage}}"
                >
                    <span class="material-icons me-2 text-white mt-2 text__exception_change_color">language</span><p class="text-white font_admin_list ms-3 mt-2 text__exception_change_color">Language</p>
                </div>
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="">
                @csrf
                <button type="submit" class="btn footer_bottom text-white text-center mt-5 text__exception_change_color">Logout</button>
            </form>

        </div>
    </div>
</div>
{{--      end--}}

