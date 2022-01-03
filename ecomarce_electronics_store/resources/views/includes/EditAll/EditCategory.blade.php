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
                            <h1 class="white___chang my-4">Update Category Information</h1>
                            @if($errors->any())
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach($errors->all() as $error)
                                            <li>{{$error}}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif

                            <form method="post" action="{{route('update_product')}}" enctype="multipart/form-data">

                                @csrf
                                <input type="hidden" name="category_id" value="{{$category->id}}">

                                <div class="container-fluid">

                                    <!-- image  input -->
                                    <div class="form-outline mb-4">
                                        <div class="ms-5 cat__img d-flex justify-content-center align-items-center fa-3x bg__change_____formproduct rounded-3 " style="background-image: url('{{asset('img/Categories/'.$category->categoryimage)}}')" id="add_img_button" title="upload image"><span class="material-icons white___chang">add</span></div>
                                        <input type="file" id="category____img" class="form-control img_cat_field_input   bg__change_____formproduct" name="categoryimage" onchange="handleimguploadforcategory(this.files)"/>
                                    </div>

                                    <!-- Name english input -->
                                    <div class="form-outline mb-4">
                                        <input type="text" id="form4Example1" class="form-control   bg__change_____formproduct" name="categgoryname_en" value="{{$category->categoryname_en}}" />
                                        <label class="form-label text-dark white___chang" for="form4Example1">Category Name</label>
                                    </div>

                                    <!-- Name arabic input -->
                                    <div class="form-outline mb-4">
                                        <input type="text" id="form4Example1" class="form-control  bg__change_____formproduct " name="categgoryname_ar" value="{{$category->categoryname_ar}}" />
                                        <label class="form-label text-dark white___chang" for="form4Example1">اسم الفئة او القسم </label>
                                    </div>

                                    <!-- category section && parent id -->
                                    <div class="form-outline mb-4">
                                        <div class="row">
                                            {{--category section english--}}
                                            <div class="col-md-3">
                                                <label class="form-label text-dark white___chang" for="category_section">Category Section</label>
                                                <select name="categorysection_en" id="category_section" class="white___chang w-90 py-2 bg__change_____formproduct" >
                                                    @if($category->categorysection_en=='mainsection')
                                                        <option value="mainsection" selected>Main Section</option>
                                                        <option value="subsection">Sub Section</option>
                                                    @else
                                                        <option value="mainsection">Main Section</option>
                                                        <option value="subsection" selected>Sub Section</option>
                                                    @endif


                                                </select>
                                            </div>

                                            {{--category section arabic--}}
                                            <div class="col-md-3">
                                                <label class="form-label text-dark white___chang" for="category_section2">قسم الفئة</label>
                                                <select name="categorysection_ar" id="category_section2" class="white___chang w-90 py-2 bg__change_____formproduct" >

                                                    @if($category->categorysection_ar =='قسم رأيسي')
                                                        <option value="قسم رأيسي" selected>قسم رأيسي</option>
                                                        <option value="قسم فرعي">قسم فرعي</option>
                                                    @else
                                                        <option value="قسم رأيسي">قسم رأيسي</option>
                                                        <option value="قسم فرعي" selected>قسم فرعي</option>
                                                    @endif

                                                </select>


                                            </div>

                                            {{--category Parent id --}}
                                            <div class="col-md-3">
                                                <label class="form-label text-dark white___chang" for="category_section">Category Parent ID</label>

                                                <select name="category_Parent_id" id="category_id" class="white___chang w-90 py-2 bg__change_____formproduct" >
                                                    <option value="0" selected>Is a Main Category</option>
                                                    @if(isset($categories))

                                                        @foreach($categories as $category1)
                                                            {{$checkchild=0}}
                                                            @if($category1->categorysection_en=='mainsection' && $category1->categoryparientID==0)

                                                                @foreach($categories as $category2)
                                                                    @if($category2->categorysection_en=='subsection' && $category2->categoryparientID==$category1->id)
                                                                        {{$checkchild++}}
                                                                    @endif
                                                                @endforeach


                                                                @if($checkchild==0)

                                                                        @if($category->id==$category1->id)
                                                                            <option value="{{$category1->id}}" selected>{{$category1->categoryname_en}}</option>
                                                                        @else
                                                                            <option value="{{$category1->id}}">{{$category1->categoryname_en}}</option>
                                                                        @endif

                                                                    @else
                                                                    <option value="{{$category1->id}}">{{$category1->categoryname_en}}</option>
                                                                    <optgroup label="{{$category1->categoryname_en}} Groub">
                                                                        @foreach($categories as $category3)
                                                                            @if($category3->categorysection_en=='subsection'&&$category3->categoryparientID==$category1->id )

                                                                                @if($category->id==$category3->id)
                                                                                    <option value="{{$category3->id}}" selected>{{$category3->categoryname_en}}</option>
                                                                                @else
                                                                                    <option value="{{$category3->id}}">{{$category3->categoryname_en}}</option>
                                                                                @endif
                                                                            @endif
                                                                        @endforeach
                                                                    </optgroup>
                                                                @endif


                                                            @endif
                                                        @endforeach

                                                    @endif
                                                </select>

                                            </div>



                                        </div>

                                    </div>

                                    {{--status --}}
                                    <div class="form-outline mb-4">
                                        <div class="row">

                                            {{--status english--}}
                                            <div class="col-md-4 ">
                                                <div class="form-outline mb-4 ">
                                                    <label class="form-label text-dark white___chang" for="status">Status</label>
                                                    <select name="status_en" id="status" class="white___chang w-100 py-2 ps-2 pe-4 bg__change_____formproduct" >

                                                        @if($category->status_en=='Available')
                                                            <option value="Available" selected>Available</option>
                                                            <option value="Unavailable">Unavailable</option>
                                                        @else
                                                            <option value="Available">Available</option>
                                                            <option value="Unavailable" selected>Unavailable</option>
                                                        @endif
                                                    </select>
                                                </div>
                                            </div>

                                            {{--status arabic--}}
                                            <div class="col-md-4 mt-4 pt-2">
                                                <div class="form-outline mb-4 ">
                                                    <label class="form-label text-dark white___chang" for="status">الحالة</label>
                                                    <select name="status_ar" id="status" class="white___chang w-90 py-2 ps-2 pe-4 bg__change_____formproduct" >

                                                        @if($category->status_ar=='متوفر')
                                                            <option value="متوفر" selected>متوفر</option>
                                                            <option value="غير متوفر">غير متوفر</option>
                                                        @else
                                                            <option value="متوفر">متوفر</option>
                                                            <option value="غير متوفر" selected>غير متوفر</option>
                                                        @endif
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <!-- descriptions english input -->
                                    <div class="form-outline mb-4">
                                        <textarea class="form-control  bg__change_____formproduct " id="form4Example3" rows="4" name="categorydescriptions_en">{{$category->categorydescriptions_en}}</textarea>
                                        <label class="form-label text-dark white___chang" for="form4Example3">Descriptions Category</label>
                                    </div>

                                    <!-- descriptions arabic input -->
                                    <div class="form-outline mb-4">
                                        <textarea class="form-control  bg__change_____formproduct" id="form4Example3" rows="4" name="categorydescriptions_ar" >{{$category->categorydescriptions_ar}}</textarea>
                                        <label class="form-label text-dark white___chang" for="form4Example3">وصف الفئة</label>
                                    </div>


                                    <!-- Submit button -->
                                    <button type="submit" class="btn btn-dark   mb-4">Update Category</button>
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


