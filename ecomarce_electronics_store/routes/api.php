<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//user login
Route::post('/loginuser','api\UsersController@logincheckuser');

//register
Route::post('/user/registeruser','api\user\registerController@RegisterUser');
Route::post('/user/updateUserInfo','api\user\registerController@updatuserInfo');


//product api show
Route::get('/product/show','api\products\productsController@index');
Route::get('/product/show/images','api\products\productsController@showImageProduct');
Route::get('/product/show/Tags','api\products\productsController@showTagsProduct');
Route::get('/Categories/show','api\categories\categoriesController@index');
Route::get('/Users/show','api\user\showUserController@showallusers');


//cart shope

Route::post('/product/addToCartShope','api\Shoppingbasket\ShoppingbasketController@addtocartshop');
Route::get('/product/showallshoppingbasket','api\Shoppingbasket\ShoppingbasketController@showAllshoppingbasket');
Route::post('/Product/increament','api\Shoppingbasket\ShoppingbasketController@increaseCartshoppforProduct');
Route::post('/Product/decreament','api\Shoppingbasket\ShoppingbasketController@DecreaseCartshoppforProduct');
Route::post('/Product/cartshope/delete','api\Shoppingbasket\ShoppingbasketController@delete');


//wishlist

Route::post('/product/Wishlist/insert','api\WishList\WishListController@insertWishList');
Route::get('/product/Wishlist/show','api\WishList\WishListController@showWishlist');
Route::post('/product/Wishlist/delete','api\WishList\WishListController@delete');




