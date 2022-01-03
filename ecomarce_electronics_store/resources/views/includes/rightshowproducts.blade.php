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
                                           <h6 class="text-dark white___chang ">Products table</h6>
                                           <a href="{{route('createproduct')}}">
                                               <button class="btn btn-dark">Create produtc</button>
                                           </a>
                                       </div>

                                       <div class="card-body px-0 pt-0 pb-2">
                                           <div class="table-responsive p-0">
                                               <table class="table align-items-center mb-0">

                                                   <thead>
                                                   <tr>
                                                       <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-muted white___chang">Product</th>
                                                       <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-muted white___chang">price</th>
                                                       <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-muted white___chang">discount price</th>
                                                       <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-muted white___chang">Status</th>
                                                       <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-muted white___chang">Created at</th>
                                                       <th class="text-left text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-muted white___chang"> Controls</th>
                                                   </tr>
                                                   </thead>

                                                   <tbody>
                                                   @if( \App\Models\Products::all()->isEmpty())
                                                       <tr class="my-3 p-3">
                                                           <td class="alert alert-dark text-white text-center" colspan="6">no Products</td>
                                                       </tr>
                                                   @else

                                                       @foreach($all_products as $product)
                                                           <tr >

                                                               <td class="text-wrap">
                                                                   <div class="d-flex px-2 py-1 text-wrap ">
                                                                       <div>
                                                                           @foreach($allimages_for_product as $img__)
                                                                               @if($product->id == $img__->product_id)
                                                                                   <img src="{{asset('img/products/'.$img__->imageproductname)}}" class="avatar avatar-xl me-3" alt="user1">
                                                                                   @break
                                                                               @endif
                                                                           @endforeach
                                                                       </div>
                                                                       <div class="d-flex flex-column  text-wrap height_show " >
                                                                           <h6 class="mb-0 text-sm text-dark white___chang">{{$product->productname_en}}</h6>
                                                                           <p class="text-xs text-secondary mb-0 text-muted text__dadasd   white___chang text-wrap ">{{$product->descriptions_en}}</p>
                                                                       </div>
                                                                   </div>
                                                               </td>

                                                               <td>
                                                                   <p class="text-xs font-weight-bold mb-0 text-dark white___chang">{{$product->price}}</p>
                                                               </td>

                                                               <td>
                                                                   <p class="text-xs font-weight-bold mb-0 text-dark white___chang">{{$product->discountprice}}</p>
                                                               </td>

                                                               <td class="align-middle text-center text-sm">
                                                                   <span class="badge badge-sm bg-gradient-success white___chang">{{$product->status_en}}</span>
                                                               </td>

                                                               <td class="align-middle text-center">
                                                                   <span class="text-secondary text-xs font-weight-bold text-muted white___chang">{{$product->created_at}}</span>
                                                               </td>

                                                               <td class="align-middle d-flex align-items-center justify-content-center py-5 ">

                                                                   <form action="{{route('Edit.product')}}" method="get" class="  mx-2 text-secondary font-weight-bold text-xs text-success white___chang">
                                                                       @csrf
                                                                       <input type="hidden" name="product_id" value="{{$product->id}}" >
                                                                       <button type="submit" class="delete_bottun">
                                                                           <span class="material-icons text-secondary white___chang" title="Edit product">edit</span>
                                                                       </button>
                                                                   </form>
                                                                   <form action="{{route('Delete.product')}}" method="post" class=" mx-2 text-secondary font-weight-bold text-xs text-success white___chang">
                                                                       @csrf
                                                                       @method("DELETE")
                                                                       <input type="hidden" name="product_id" value="{{$product->id}}" >
                                                                       <button type="submit" class="delete_bottun">
                                                                           <span class="material-icons text-danger white___chang" title="Delete product">delete</span>
                                                                       </button>
                                                                   </form>
                                                               </td>
                                                           </tr>
                                                       @endforeach
                                                   @endif

                                                   <tr>
                                                       <td colspan="5">{{$all_products->links()}}</td>
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
