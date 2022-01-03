<div class="right_side_nav ">
    <div class="container-fluid">
        <div class="row">

            {{-- nav here--}}
            @include('includes.Rightnav')


            <div class="col-md-12">
                <div class="row d-flex justify-content-center">
                    {{-- img for product --}}
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10 my-4 bg__change rounded-2 p-0">
                        <div class="card bg__change p-0 m-0 rounded-2">

                            <div class="row p-4 overflow-hidden" id="img_slider_add_display" >


                                {{--header--}}
                                <div class="col-md-12 p-4">
                                    <h1 class="white___chang">Update  Tags for This  Product</h1>
                                    <p class="white___chang my-5 pt-3 img____">You can add multiple tags as you need</p>
                                </div>

                                @if($errors->any())
                                    <div class="alert alert-danger">
                                        <ul>
                                            @foreach($errors->all() as $error)
                                                <li>{{$error}}</li>
                                            @endforeach
                                        </ul>
                                    </div>
                                @endif

                                {{--add tags field--}}
                                <div class="col-md-9">
                                    <div class="p-4">
                                        @if(\Illuminate\Support\Facades\Session::has('new_tags_for_product'))
                                            <form method="post" class="d-flex" action="{{route('updateTags')}}">
                                            @csrf
                                            <!-- Name english input -->
                                                <div class="form-outline mb-4 flex-grow-1">
                                                    <input type="hidden" name="product_id" value="{{\Illuminate\Support\Facades\Session::get('new_tags_for_product')}}">
                                                    <input type="text" id="tags" class="form-control   bg__change_____formproduct" name="tags"  />
                                                    <label class="form-label text-dark white___chang" for="tags">add Tags</label>
                                                </div>
                                                <div class="form-outline mb-4 mx-2">
                                                    <input type="submit" value="Update Tags" id="addtag" name="addtag" class="btn btn-dark text-white">
                                                </div>
                                            </form>
                                        @else
                                            <form method="post" class="d-flex" action="{{route('updateTags')}}">
                                            @csrf
                                            <!-- Name english input -->
                                                <div class="form-outline mb-4 flex-grow-1">
                                                    <input type="hidden" name="product_id" value="{{$product_id}}">
                                                    <input type="text" id="tags" class="form-control   bg__change_____formproduct" name="tags"  />
                                                    <label class="form-label text-dark white___chang" for="tags">add Tags</label>
                                                </div>
                                                <div class="form-outline mb-4 mx-2">
                                                    <input type="submit" value="Update Tags" id="addtag" name="addtag" class="btn btn-dark text-white">
                                                </div>
                                            </form>
                                        @endif
                                    </div>
                                </div>


                                {{--display tags--}}
                                <span class="white___chang h2 ms-3 ">Display all tags</span>
                                <div class="col-md-8 bg__change_____formproduct rounded-2 display_tags py-4 my-4 mx-3 ms-4 ps-5 text-wrap" id="add_tag_here">

                                    @foreach($all___tags as $tag)
                                        @if($tag->product_id==$product_id)
                                            <span class="tag___dis text-white rounded-2 py-5 m-2 d-inline-block"> {{$tag->tagname}} </span>
                                        @endif
                                    @endforeach

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



