{{-- main navbar here --}}
<div class="col-md-12 shadow-none">

    <nav class="navbar navbar-expand-lg navbar-light bg-transparent shadow-none">
        <div class="container-fluid">
            <a class="navbar-brand text_change_color white___chang" href="{{route('dashboard')}}">Dashboard</a>

            <button class="navbar-toggler text_change_color white___chang bg__change" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="material-icons white___chang cursor-pointer">menu</span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">



                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 main_navbar">


                    {{--                                          <input class="form-control me-2 search__field" type="search" placeholder="Search..." aria-label="Search">--}}
                    {{--                                          <input type="hidden" class="btn btn-outline-success" value="submit"/>--}}
                   <li class="search_right">

                           <form action="" class="Search d-flex position-relative text-center mt-1">
                               <input class="Search-box searchbox__input" type="search" id="Search-box" autocomplete="off">
                               <label class="Search-label position-absolute  search__butt" for="Search-box"><i class="fa fa-search text-dark white___chang"></i></label>
                           </form>

                   </li>




                    <li class="nav-item mx-2 main_navitem" >
                        <a class="nav-link " aria-current="page" href="{{route('dashboard')}}">
                            <i class="material-icons text_change_color white___chang" title="dashboard">dashboard</i>
                        </a>
                    </li>

                    <li class="nav-item mx-2 notif main_navitem">
                        <p class="number_of_notif text_change_color">5</p>
                        <a class="nav-link" href="#" title="notivications"><i class="material-icons text-warning text_change_color" title="dashboard">notifications</i></a>
                    </li>

                    <li class="nav-item mx-2 main_navitem">
                        <a class="nav-link " href="{{route('myprofile')}}" title="admin profile"><i class="material-icons text-dark text_change_color white___chang" title="dashboard">person</i></a>
                    </li>
                </ul>


            </div>


        </div>
    </nav>

</div>
