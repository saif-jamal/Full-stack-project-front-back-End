<?php

namespace App\Http\Controllers\api\Shoppingbasket;

use App\Http\Controllers\api\UsersResponse;
use App\Http\Controllers\Controller;
use App\Models\Products;
use App\Models\shoppingbasket;
use App\Models\wishlist;
use App\User;
use Illuminate\Http\Request;

class ShoppingbasketController extends Controller
{
    use UsersResponse;

    //    add product with one quantity to cat shop
    public function addtocartshop(Request $request){
        $allbasketshop_cart='';
        $check_if_exists=false;
        $MainPrice=0;
        $allbasketshop=shoppingbasket::all();

        if(!empty($allbasketshop)){
            foreach ($allbasketshop as $wis)
            {
                if($request->product_id==$wis->product_id){
                    $check_if_exists=true;
                    $allbasketshop_cart=$wis;
                    break;
                }
            }

//            compute total price for all product that add to cart shope
            foreach ($allbasketshop as $wish__)
            {
                $MainPrice+=$wish__->TotalPrice_for_oneProduct;
            }
        }


//        get product and price or discount price

        $product=Products::find($request->product_id);
        $price_or_discountPrice=0;
        if(!empty($product->discountprice) && $product->discountprice>0){
            $price_or_discountPrice=$product->discountprice;
        }else{
            $price_or_discountPrice=$product->price;
        }
        $user=User::where('id','=',$request->user_id)->first();
        if($user) {
            if ($check_if_exists == false) {
                if ($MainPrice == 0) {

                    $allbasketshop_cart = shoppingbasket::create([
                        'user_id' => $request->user_id,
                        'product_id' => $request->product_id,
                        'product_quantity' => $request->product_quantity,
                        'TotalPrice_for_oneProduct' => ($request->product_quantity * $price_or_discountPrice),
                        'MainTotalPrice_allProduct' => ($request->product_quantity * $price_or_discountPrice)
                    ]);
                    return $this->LoginUsersResponseData('add product success', 200);

                } else {
                    $allbasketshop_cart = shoppingbasket::create([
                        'user_id' => $request->user_id,
                        'product_id' => $request->product_id,
                        'product_quantity' => $request->product_quantity,
                        'TotalPrice_for_oneProduct' => ($request->product_quantity * $price_or_discountPrice),
                        'MainTotalPrice_allProduct' => (($request->product_quantity * $price_or_discountPrice) + $MainPrice)
                    ]);
                    foreach ($allbasketshop as $updateWishlist) {
                        $updateWishlist->update([
                            'MainTotalPrice_allProduct' => $allbasketshop_cart->MainTotalPrice_allProduct
                        ]);
                    }
                    return $this->LoginUsersResponseData('add product success', 200);
                }

            } else {
                $productwish_update = shoppingbasket::where('product_id', '=', $request->product_id)->first();

                $productwish_update->update([
                    'product_quantity' => ($request->product_quantity + $productwish_update->product_quantity),
                    'TotalPrice_for_oneProduct' => (($request->product_quantity + $productwish_update->product_quantity) * $price_or_discountPrice),
                    'MainTotalPrice_allProduct' => ((($request->product_quantity + $productwish_update->product_quantity) * $price_or_discountPrice) + ($MainPrice - $productwish_update->TotalPrice_for_oneProduct))
                ]);
                foreach ($allbasketshop as $updateWishlist) {
                    $updateWishlist->update([
                        'MainTotalPrice_allProduct' => $productwish_update->MainTotalPrice_allProduct
                    ]);
                }
                return $this->LoginUsersResponseData('add product success', 200);
            }
        }


    }

    //    show all shopping basket product..........................
    public function  showAllshoppingbasket(){
        $allbasketshop=shoppingbasket::all();

        return $this->LoginUsersResponseData('all shopping basket product',200,$allbasketshop);
  }



    //  increament any product by one...............................
      public function increaseCartshoppforProduct(Request $request){

          $product=Products::find($request->product_id);
          $price_or_discountPrice=0;
          if(!empty($product->discountprice) && $product->discountprice>0){
              $price_or_discountPrice=$product->discountprice;
          }else{
              $price_or_discountPrice=$product->price;
          }

          $allbasketshop=shoppingbasket::all();
          $productwish_update= shoppingbasket::where('id', '=', $request->id)->first();

          if($price_or_discountPrice!==0){
              $productwish_update->update([
                  'product_quantity'=>($productwish_update->product_quantity+1),
                  'TotalPrice_for_oneProduct'=>(($productwish_update->product_quantity+1)*$price_or_discountPrice),
                  'MainTotalPrice_allProduct'=>((($productwish_update->product_quantity+1)*$price_or_discountPrice)+($productwish_update->MainTotalPrice_allProduct-$productwish_update->TotalPrice_for_oneProduct))
              ]);
              foreach ($allbasketshop as $updateWishlist){
                  $updateWishlist->update([
                      'MainTotalPrice_allProduct'=>$productwish_update->MainTotalPrice_allProduct
                  ]);
              }
              return $this->LoginUsersResponseData('add product success',200);
          }


      }


    //  decreament  any product by one except 1.........................
    public function DecreaseCartshoppforProduct(Request $request){

        $product=Products::find($request->product_id);
        $price_or_discountPrice=0;
        if(!empty($product->discountprice) && $product->discountprice>0){
            $price_or_discountPrice=$product->discountprice;
        }else{
            $price_or_discountPrice=$product->price;
        }

        $allbasketshop=shoppingbasket::all();
        $productwish_update= shoppingbasket::where('id', '=', $request->id)->first();

        if($price_or_discountPrice!==0 && $productwish_update->product_quantity > 1 ){
            $productwish_update->update([
                'product_quantity'=>($productwish_update->product_quantity-1),
                'TotalPrice_for_oneProduct'=>(($productwish_update->product_quantity-1)*$price_or_discountPrice),
                'MainTotalPrice_allProduct'=>((($productwish_update->product_quantity-1)*$price_or_discountPrice)+($productwish_update->MainTotalPrice_allProduct-$productwish_update->TotalPrice_for_oneProduct))
            ]);
            foreach ($allbasketshop as $updateWishlist){
                $updateWishlist->update([
                    'MainTotalPrice_allProduct'=>$productwish_update->MainTotalPrice_allProduct
                ]);
            }
            return $this->LoginUsersResponseData('add product success',200);
        }else{
            return $this->LoginUsersResponseData('decreament quantity failed',404);
        }

    }

    //    delete wishlist item
    public function delete(Request $request){
        $shoppingbasketitem=shoppingbasket::find($request->id);
        $mainPrice=$shoppingbasketitem->MainTotalPrice_allProduct-$shoppingbasketitem->TotalPrice_for_oneProduct;



        if($shoppingbasketitem){
            $shoppingbasketitem->delete();
            foreach (shoppingbasket::all() as $wis){
                $wis->update([
                  'MainTotalPrice_allProduct'=>$mainPrice
                ]);
            }
            return $this->LoginUsersResponseData('item deleted',200);
        }else{
            return $this->LoginUsersResponseData('deleted faild',404);

        }
    }
}
