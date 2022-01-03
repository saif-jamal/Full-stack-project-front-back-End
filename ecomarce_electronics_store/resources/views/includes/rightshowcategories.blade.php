<div class="right_side_nav ">
    <div class="container-fluid">
        <div class="row">

            {{-- nav here--}}
            @include('includes.Rightnav')

            <div class="col-md-12">
                {{--products --}}
                <div class="container-fluid py-4">

                    <div class="row">

                        <div class="col-12">
                            <div class="card mb-4 bg__change">

                                <div class="card-header pb-0 d-flex justify-content-between">
                                    <h6 class="text-dark white___chang ">Categories table</h6>
                                    <a href="{{route('createcategory')}}">
                                        <button class="btn btn-dark"> Create Category</button>
                                    </a>
                                </div>

                                <div class="card-body px-0 pt-0 pb-2">
                                    <div class="table-responsive p-0">
                                        <table class="table align-items-center mb-0">

                                            <thead>
                                            <tr>
                                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-muted white___chang">Category</th>
                                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-muted white___chang">Section</th>
                                                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-muted white___chang">Status</th>
                                                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-muted white___chang">Created at</th>
                                                <th class="text-left text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-muted white___chang"> Controls</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            @if( \App\Models\Categories::all()->isEmpty())
                                                <tr class="my-3 p-3">
                                                    <td class="alert alert-dark text-white text-center" colspan="6">no Categories</td>
                                                </tr>
                                            @else

                                                @foreach($categorie as $category)
                                                    <tr>

                                                        <td>
                                                            <div class="d-flex px-2 pt-2">
                                                                <div>
                                                                    <img src="{{asset('img/Categories/'.$category->categoryimage)}}" class="avatar avatar-lg me-3" alt="user1">
                                                                </div>
                                                                <div class="d-flex flex-column justify-content-center">
                                                                    <h6 class="mb-0 text-sm text-dark white___chang">{{$category->categoryname_en}}</h6>
                                                                    <p class="text-xs text-secondary mb-0 text-muted text-wrap text__dadasd    white___chang">{{$category->categorydescriptions_en}}</p>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="pt-5">
                                                            <p class="text-xs font-weight-bold mb-0 text-dark white___chang">{{$category->categorysection_en}}</p>
                                                        </td>

                                                        <td class="align-middle text-center text-sm pt-5">
                                                            <span class="badge badge-sm bg-gradient-success white___chang">{{$category->status_en}}</span>
                                                        </td>

                                                        <td class="align-middle text-center pt-5">
                                                            <span class="text-secondary text-xs font-weight-bold text-muted white___chang">{{$category->created_at}}</span>
                                                        </td>

                                                        <td class="align-middle d-flex  ">
                                                            <form action="{{route('editcategory')}}" method="get" class="pt-5 mx-2 text-secondary font-weight-bold text-xs text-success white___chang">
                                                                @csrf
                                                                <input type="hidden" name="category_id" value="{{$category->id}}" >
                                                                <button type="submit" class="delete_bottun">
                                                                    <span class="material-icons text-secondary white___chang" title="Edit Category">edit</span>
                                                                </button>
                                                            </form>
                                                            <form action="{{route('Delete.category')}}" method="post" class="pt-5  mx-2 text-secondary font-weight-bold text-xs text-success white___chang">
                                                                @csrf
                                                                @method("DELETE")
                                                                <input type="hidden" name="category_id" value="{{$category->id}}" >
                                                                <button type="submit" class="delete_bottun">
                                                                    <span class="material-icons text-danger white___chang" title="Delete Category">delete</span>
                                                                </button>
                                                            </form>

                                                        </td>
                                                    </tr>
                                                @endforeach
                                            @endif

                                              <tr>
                                                 <td colspan="5">{{$categorie->links()}}</td>
                                              </tr>

                                            </tbody>
                                        </table>
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
