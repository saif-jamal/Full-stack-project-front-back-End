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

                             <div class="row p-0" id="img_slider_add_display">

                                 <div class="col-md-12 px-4 my-2">
                                     <h1 class="white___chang my-4"> Add Image For Product</h1>
                                     <span class="white___chang my-4 img____">You can add multiple image for product</span>
                                 </div>

                                 @if (count($errors) > 0)
                                     <div class="alert alert-danger">
                                         <strong>Whoops!</strong> There were some problems with your input.<br><br>
                                         <ul>
                                             @foreach ($errors->all() as $error)
                                                 <li>{{ $error }}</li>
                                             @endforeach
                                         </ul>
                                     </div>
                                 @endif

                                {{--add img here--}}
                                <div class="col-md-3">
                                    <div class=" bg__change py-4 my-2 ">
                                        <div id="select_img_button" class=" select_img_button bg__change_____formproduct cursor-pointer rounded-3" title="add image">
                                            <span class="material-icons white___chang fa-3x">add</span>
                                        </div>
                                        <form  method="post"  action="{{route('createImage')}}" enctype="multipart/form-data">
                                            @csrf

                                            <input type="hidden" name="product_id" value="{{$product_id}}">
                                            <input class="btn invisible" type="file" name="images[]" id="images" multiple onchange="handleimgselect(this.files)">
                                            <input class="btn btn-dark text-white ms-3" type="submit" name="upload" id="uploadimages" value="Upload image ? or continue...">
                                        </form>
                                    </div>
                                </div>

                            {{--add image--}}


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



