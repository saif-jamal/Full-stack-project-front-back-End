<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//authentication user
Route::group(['middleware'=>'auth'],function (){

//    chceck if user is admin
    Route::group(['middleware'=>'authadmin'],function (){
        //dashboard
        Route::get('/dashboard','DashboardController@showDashboard')->name('dashboard');

        ///////////////////////////////////////////////////////////////////////////
        ///
        //profile
        Route::get('/myprofile','Myprofile@index')->name('myprofile');

        //////////////////////////////////////////////////////////////////////////////////////////////////
        ///
        //user...............
        Route::get('/users','UserController@index')->name('users');
        Route::get('/user/create','UserController@create')->name('create_user');
        Route::post('/user/create/store','UserController@store')->name('store_user');
        Route::get('/user/Edit','UserController@edit')->name('edit.user');
        Route::post('/user/updateinfo','UserController@update')->name('user.updateinfo');
        Route::delete('user/delete','UserController@Delete')->name('delete.user');





        //////////////////////////////////////////////////////////////
        //product show
        Route::get('/showProducts','ProductsController@showallproducts')->name('showProducts');

        //product creaate
        Route::get('/createproduct','ProductsController@createproduct')->name('createproduct');
        Route::post('/productStore','ProductsController@store')->name('product.store');

        //product edit
        Route::get('/Product/Edit','ProductsController@Edit')->name('Edit.product');
        Route::post('/Product/Edit/update','ProductsController@update')->name('product.update');

        //Delete product
        Route::delete('product/delete','ProductsController@Delete')->name('Delete.product');



        //img create
        Route::get('/imagesforproduct/{new_product}','ProductimagesController@imagesforproduct')->name('uploadimage');
        Route::post('/createImage','ProductimagesController@createimages')->name('createImage');


        //img update
        Route::get('/imagesforproduct/editimage/{edit_product?}','ProductimagesController@editimage')->name('editimage');
        Route::post('/updateimage','ProductimagesController@updateimage')->name('updateimage');

        //img delete one by one from user clicks in update
        Route::get('/productsimages/deleteimage/{delete_img?}','ProductimagesController@Imagedelete')->name('delete_this_image');


        //tags create
        Route::get('/tagsforproduct/{new_product?}','ProducttagsController@tagsforproduct')->name('tagsforproduct');
        Route::post('/create/tagsforproduct','ProducttagsController@Createtagsforproduct')->name('creattagsforproduct');

        //tags edit
        Route::get('/tagsforproduct/edittags/{new_product?}','ProducttagsController@edittags')->name('edittags');
        Route::post('/Update/TagsForProduct','ProducttagsController@Update')->name('updateTags');










        ///////////////////////////////////////////////////////////////////////////////////////////////
        ///
        //categories

        //categories show
        Route::get('/showcategories','CategoriesController@ShowCategories')->name('ShowCategories');

        //create category
        Route::get('/createcategory','CategoriesController@createcategory')->name('createcategory');
        Route::post('/createcategory/store','CategoriesController@store')->name('create_product');

        //update category
        Route::get('/editcategory','CategoriesController@editcategory')->name('editcategory');
        Route::post('/editcategory/update','CategoriesController@update')->name('update_product');

        //Delete Category
        Route::delete('category/delete','CategoriesController@Delete')->name('Delete.category');






    });




});


///////////////////////////////////////////////////////////////////////////////////////////////
Auth::routes();

Route::post('/darkmode/insert','DarkModeController@create');
Route::get('/darkmode/show','DarkModeController@show');

//Route::get('/',function (){
//    return view('welcome');
//});

Route::get('/', 'DashboardController@index');
Route::get('/notAllow', 'DashboardController@index')->name('notadmin');

Route::get('/custome_login',function (){
    return view('Customelogin');
})->name('loginCustom');

Route::get('/custome_register',function (){
    return view('CustomeRegister');
})->name('registerCustome');


////Route::get('/home', 'HomeController@index')->name('home');
//Route::get('/home', 'DashboardController@index')->name('home');

