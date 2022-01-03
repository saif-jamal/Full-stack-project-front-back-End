{{--      right side --}}
<div class="right_side_nav ">
    <div class="container-fluid">
        <div class="row">

            {{-- nav here--}}
            @include('includes.Rightnav')

            <div class="col-md-12">
                <div class="container-fluid py-4">

                    <div class="row">

                        <div class="col-12">
                            <div class="card mb-4 bg__change">

                                <div class="card-header pb-0 d-flex justify-content-between">
                                    <h6 class="text-dark white___chang ">Users table</h6>
                                    <a href="{{route("create_user")}}"><button class="btn btn-dark text-white">Create User</button></a>
                                </div>

                                <div class="card-body px-0 pt-0 pb-2">
                                    <div class="table-responsive p-0">
                                        <table class="table align-items-center mb-0">

                                            <thead>
                                                <tr>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-muted white___chang">User</th>
                                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-muted white___chang">Role</th>
                                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-muted white___chang">Status</th>
                                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-muted white___chang">Created at</th>
                                                    <th class="text-left text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-muted white___chang"> Controls</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                            @if($users)
                                                @foreach($users as $user)


                                                        <tr>
                                                                <td>
                                                                    <div class="d-flex px-2 py-1">
                                                                        <div>
                                                                            @if($usersinfo)
                                                                                <p class="d-none"> {{$check_if_find_user=0}}</p>
                                                                                <p class="d-none"> {{$check_if_find_user_img=0}}</p>
                                                                                <p class="d-none"> {{$user_info__=''}}</p>
                                                                                @foreach($usersinfo as $userinfo)
                                                                                    @if($user->id == $userinfo->user_id)
                                                                                        <p class="d-none"> {{$check_if_find_user=1}}</p>
                                                                                        <p class="d-none"> {{$user_info__=$userinfo}}</p>
                                                                                        @if($userinfo->userimage)
                                                                                            <p class="d-none"> {{$check_if_find_user_img=1}}</p>
                                                                                        @endif
                                                                                    @endif
                                                                                @endforeach

                                                                                @if($check_if_find_user==1)
                                                                                    @if($check_if_find_user_img==1)
                                                                                        <img src="{{asset('img/users/'.$user_info__->userimage)}}" class="avatar avatar-sm me-3" alt="user1">
                                                                                    @else
                                                                                        <img src="{{asset('img/users/user-men.jpg')}}" class="avatar avatar-sm me-3" alt="user1">
                                                                                    @endif
                                                                                @elseif($check_if_find_user==0)
                                                                                    <img src="{{asset('img/users/user-men.jpg')}}" class="avatar avatar-sm me-3" alt="user1">
                                                                                @endif

                                                                            @endif




                                                                        </div>
                                                                        <div class="d-flex flex-column justify-content-center">
                                                                            <h6 class="mb-0 text-sm text-dark white___chang">{{$user->name}}</h6>
                                                                            <p class="text-xs text-secondary mb-0 text-muted white___chang">{{$user->email}}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p class="text-xs font-weight-bold mb-0 text-dark white___chang">{{$user->role}}</p>
{{--                                                                    <p class="text-xs text-secondary mb-0 text-muted white___chang" >Owner</p>--}}
                                                                </td>
                                                                <td class="align-middle text-center text-sm">
                                                                    @if($usersinfo)
                                                                        @foreach($usersinfo as $userinf2 )
                                                                            @if($user->id == $userinf2->user_id)
                                                                                <span class="badge badge-sm bg-gradient-success white___chang">{{$userinf2->status}}</span>
                                                                            @endif
                                                                        @endforeach
                                                                    @endif

                                                                </td>
                                                                <td class="align-middle text-center">
                                                                    <span class="text-secondary text-xs font-weight-bold text-muted white___chang">{{$user->created_at}}</span>
                                                                </td>
                                                                <td class="align-middle d-flex  text-center pt-3">

                                                                    <form action="{{route('edit.user')}}" method="get" class="pt-3  mx-2 text-secondary font-weight-bold text-xs text-success white___chang">
                                                                        @csrf
                                                                        <input type="hidden" name="user_id" value="{{$user->id}}" >
                                                                        <button type="submit" class="delete_bottun">
                                                                            <span class="material-icons text-danger white___chang" title="Delete User">edit</span>
                                                                        </button>
                                                                    </form>


                                                                    <form action="{{route('delete.user')}}" method="post" class="pt-3  mx-2 text-secondary font-weight-bold text-xs text-success white___chang">
                                                                        @csrf
                                                                        @method('DELETE')
                                                                        <input type="hidden" name="user_id" value="{{$user->id}}" >
                                                                        <button type="submit" class="delete_bottun">
                                                                            <span class="material-icons text-danger white___chang" title="Delete User">delete</span>
                                                                        </button>
                                                                    </form>

                                                                </td>
                                                            </tr>


                                                @endforeach
                                            @endif



                                            <tr>
                                                <td colspan="5">{{$users->links()}}</td>
                                            </tr>

                                            </tbody>
                                        </table>
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
