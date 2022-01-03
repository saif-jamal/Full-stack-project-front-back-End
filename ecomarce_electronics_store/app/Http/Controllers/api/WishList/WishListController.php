<?php

namespace App\Http\Controllers\api\WishList;

use App\Http\Controllers\api\UsersResponse;
use App\Http\Controllers\Controller;
use App\Models\Products;
use App\Models\wishlist;
use App\User;
use Illuminate\Http\Request;

class WishListController extends Controller
{

    use UsersResponse;

    //    insert into wishlist
    public function insertWishList(Request  $request){

        $product=Products::where('id','=',$request->product_id);
        $user=User::where('id','=',$request->user_id);

        $wishlist_all=wishlist::all();
        $check=false;
        foreach ($wishlist_all as $wisall){
            if($wisall->product_id==$request->product_id){
                $check=true;
            }
        }

        if($check==true)
        {
            return $this->LoginUsersResponseData('all ready exists product',404);

        }
       elseif(!empty($product) && !empty($user) ){
               $wishlist=wishlist::create([
                   'product_id'=>$request->product_id,
                   'user_id'=>$request->user_id,
                   'product_name_en'=>$request->product_name_en,
                   'product_name_ar'=>$request->product_name_ar,
                   'product_descri_en'=>$request->product_descri_en,
                   'product_descri_ar'=>$request->product_descri_ar,
                   'product_img'=>$request->product_img,
                   'product_price'=>$request->product_price,
                   'product_discountprice'=>$request->product_discountprice
               ]);
               return $this->LoginUsersResponseData('all wishlist product',200);
        }


    }

    //show all products wishlist
    public  function showWishlist(){
        $allwishlist=wishlist::all();
        return $this->LoginUsersResponseData('all wishlist product',200,$allwishlist);

    }


    //    delete wishlist item
    public function delete(Request $request){
        $wishlist=wishlist::find($request->id);

        if($wishlist){
            $wishlist->delete();
            return $this->LoginUsersResponseData('item deleted',200);
        }else{
            return $this->LoginUsersResponseData('deleted faild',404);
        }
    }
}
