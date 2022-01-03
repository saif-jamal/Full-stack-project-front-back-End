<?php

namespace App\Http\Controllers\api\products;

use App\Http\Controllers\api\UsersResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductImagesResource;
use App\Http\Resources\UserResource;
use App\Models\Categories;
use App\Models\productimages;
use App\Models\Products;
use App\Models\producttags;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class productsController extends Controller
{
    use UsersResponse;

//    show all products
  public  function index(){
      $products=Products::orderBy('created_at','DESC')->get();

      return $this->LoginUsersResponseData('show all products',200,$products);

  }

// show all products Image
    public  function showImageProduct(){

        $Product_images=ProductImagesResource::collection(productimages::orderBy('created_at','DESC')->get());

        return $this->LoginUsersResponseData('show all Images',200,$Product_images);

    }

// show all products Tags
    public  function showTagsProduct(){

//        $Product_images=ProductImagesResource::collection(productimages::all());
           $Product_tags=producttags::orderBy('created_at','DESC')->get();
        return $this->LoginUsersResponseData('show all Tags',200,$Product_tags);

    }

}


