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
                               <h1 class="white___chang my-4">Product Information</h1>

                              @if($errors->any())
                                  <div class="alert alert-danger">
                                      <ul>
                                          @foreach($errors->all() as $error)
                                              <li>{{$error}}</li>
                                          @endforeach
                                      </ul>
                                  </div>
                              @endif


                              <form method="post" action="{{route('product.store')}}">

                                  @csrf

                                   <div class="container-fluid">
                                      <!-- Name english input -->
                                      <div class="form-outline mb-4">
                                          <input type="text" id="form4Example1" class="form-control   bg__change_____formproduct" name="productname_en" />
                                          <label class="form-label text-dark white___chang" for="form4Example1">Product Name</label>
                                      </div>

                                      <!-- Name arabic input -->
                                      <div class="form-outline mb-4">
                                          <input type="text" id="form4Example1" class="form-control  bg__change_____formproduct " name="productname_ar" />
                                          <label class="form-label text-dark white___chang" for="form4Example1">اسم المنتج</label>
                                      </div>

                                      <!-- category id && price && discount price arabic input -->
                                      <div class="form-outline mb-4">
                                          <div class="row">
                                                {{--category--}}
                                              <div class="col-md-3">
                                                  <label class="form-label text-dark white___chang" for="category_id">Category</label>
                                                  <select name="category_id" id="category_id" class="white___chang w-90 py-2 bg__change_____formproduct dfgdgdgf" >
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
                                                                              <option value="{{$category1->id}}">{{$category1->categoryname_en}}</option>
                                                                              {{$checkchild=0}}
                                                                          @else
                                                                              <optgroup label="{{$category1->categoryname_en}}">
                                                                                  @foreach($categories as $category3)
                                                                                      @if($category3->categorysection_en=='subsection'&&$category3->categoryparientID==$category1->id )
                                                                                          <option value="{{$category3->id}}">{{$category3->categoryname_en}}</option>
                                                                                      @endif
                                                                                  @endforeach
                                                                              </optgroup>
                                                                              {{$checkchild=0}}
                                                                      @endif


                                                                  @endif
                                                              @endforeach

                                                      @endif
                                                  </select>
                                              </div>

                                              {{--price--}}
                                              <div class="col-md-3 d-flex">
                                                  <span class="text-success fa-2x mt-4 ">$ </span>
                                                  <div class="form-outline mb-4 price">
                                                      <label class="form-label text-dark white___chang" for="price">price</label>
                                                     <input id="price" type="text" name="price" class="form-control price-input white___chang bg__change_____formproduct" value="0.00" placeholder="0.00">
                                                  </div>
                                              </div>

                                              {{--discount price--}}
                                              <div class="col-md-3 d-flex">
                                                  <span class="text-success fa-2x mt-4 ">$ </span>
                                                  <div class="form-outline mb-4 price">
                                                      <label class="form-label text-dark white___chang" for="discount_price">Discount Price <span class="text-danger">(optional)</span></label>
                                                      <input id="discount_price" type="text" name="discount_price" class="form-control price-input white___chang bg__change_____formproduct" value="0.00" placeholder="0.00">
                                                  </div>
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
                                                          <option value="Available">Available</option>
                                                          <option value="Unavailable">Unavailable</option>
                                                      </select>
                                                  </div>
                                              </div>

                                              {{--status arabic--}}
                                              <div class="col-md-4 mt-4 pt-2">
                                                  <div class="form-outline mb-4 ">
                                                      <label class="form-label text-dark white___chang" for="status">الحالة</label>
                                                      <select name="status_ar" id="status" class="white___chang w-90 py-2 ps-2 pe-4 bg__change_____formproduct" >
                                                          <option value="متوفر">متوفر</option>
                                                          <option value="غير متوفر">غير متوفر</option>
                                                      </select>
                                                  </div>
                                              </div>

                                              {{--day for discount english--}}
                                              <div class="col-md-4 ">
                                                  <div class="form-outline mb-4 ">
                                                      <label class="form-label text-dark white___chang" for="dayfordiscount">Day For Discount <span class="text-danger">(optional)</span></label>
                                                      <input type="date" id="form4Example1" class="form-control text-danger    bg-warning" name="dayfordiscount" />
                                                  </div>
                                              </div>


                                          </div>
                                      </div>

                                      <!-- descriptions english input -->
                                      <div class="form-outline mb-4">
                                          <textarea class="form-control  bg__change_____formproduct " id="form4Example3" rows="4" name="productdescriptions_en"></textarea>
                                          <label class="form-label text-dark white___chang" for="form4Example3">Descriptions</label>
                                      </div>

                                      <!-- descriptions arabic input -->
                                      <div class="form-outline mb-4">
                                          <textarea class="form-control  bg__change_____formproduct" id="form4Example3" rows="4" name="productdescriptions_ar" ></textarea>
                                          <label class="form-label text-dark white___chang" for="form4Example3">وصف المنتج</label>
                                      </div>

                                      <!-- product features english input -->
                                      <div class="form-outline mb-4">
                                          <textarea class="form-control  bg__change_____formproduct " id="productfeatures" rows="4" name="productfeatures_en"></textarea>
                                          <label class="form-label text-dark white___chang" for="productfeatures">Product Features <span class="text-danger">(optional)</span></label>
                                      </div>

                                      <!-- product features  arabic input -->
                                      <div class="form-outline mb-4">
                                          <textarea class="form-control  bg__change_____formproduct" id="productfeatures" rows="4" name="productfeatures_ar" ></textarea>
                                          <label class="form-label text-dark white___chang" for="productfeatures">مميزات المنتج<span class="text-danger">(optional)</span></label>
                                      </div>


                                      <!-- product how to used english input -->
                                      <div class="form-outline mb-4">
                                          <textarea class="form-control  bg__change_____formproduct " id="producthowused" rows="4" name="producthowused_en"></textarea>
                                          <label class="form-label text-dark white___chang" for="producthowused">How to used Product? <span class="text-danger">(optional)</span></label>
                                      </div>

                                      <!-- product features  arabic input -->
                                      <div class="form-outline mb-4">
                                          <textarea class="form-control  bg__change_____formproduct" id="producthowused" rows="4" name="producthowused_ar" ></textarea>
                                          <label class="form-label text-dark white___chang" for="producthowused">كيفية استخدام المنتج؟<span class="text-danger">(optional)</span></label>
                                      </div>


                                      <!-- Submit button -->
                                      <button type="submit" class="btn btn-dark   mb-4">Create Product</button>
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


