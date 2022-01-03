<?php

namespace App\Http\Controllers;

use App\ColorModel\LeftnavColor;
use App\Http\Requests\ProductRequest;
use App\Models\Categories;
use App\Models\productimages;
use App\Models\Products;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

class ProductsController extends Controller
{
//    show all products
    public function showallproducts(){
        $color=LeftnavColor::all()->last();
        $color->update([
            'ColorDashboard'=>'transparent',
            'ColorUsers'=>'transparent',
            'ColorProducts'=>'rgb(76,175,80)',
            'ColorShowProducts'=>'rgb(76,175,80)',
            'ColorCreateProduct'=>'transparent',
            'ColorCategories'=>'transparent',
            'ColorShowCategories'=>'transparent',
            'ColorCreateCategory'=>'transparent',
            'ColorSettings'=>'transparent',
            'ColorNotifications'=>'transparent',
            'ColorLanguage'=>'transparent'
        ]);
        $allimages_for_product=productimages::all();
        $allproducts=Products::paginate(7);

        return view('Allpage.ShowProducts',['color'=>$color,'all_products'=>$allproducts,'allimages_for_product'=>$allimages_for_product]);
    }

//    create product page
    public function createproduct(){

        $categories=Categories::all();

        $color=LeftnavColor::all()->last();
        $color->update([
            'ColorDashboard'=>'transparent',
            'ColorUsers'=>'transparent',
            'ColorProducts'=>'rgb(76,175,80)',
            'ColorShowProducts'=>'transparent',
            'ColorCreateProduct'=>'rgb(76,175,80)',
            'ColorCategories'=>'transparent',
            'ColorShowCategories'=>'transparent',
            'ColorCreateCategory'=>'transparent',
            'ColorSettings'=>'transparent',
            'ColorNotifications'=>'transparent',
            'ColorLanguage'=>'transparent'
        ]);
        return view('Allpage.Createproduct',['color'=>$color,'categories'=>$categories]);
    }
//    product store
  public function store(ProductRequest $request){

      $color=LeftnavColor::all()->last();
      $color->update([
          'ColorDashboard'=>'transparent',
          'ColorUsers'=>'transparent',
          'ColorProducts'=>'rgb(76,175,80)',
          'ColorShowProducts'=>'transparent',
          'ColorCreateProduct'=>'rgb(76,175,80)',
          'ColorCategories'=>'transparent',
          'ColorShowCategories'=>'transparent',
          'ColorCreateCategory'=>'transparent',
          'ColorSettings'=>'transparent',
          'ColorNotifications'=>'transparent',
          'ColorLanguage'=>'transparent'
      ]);
        $user_i=Auth::user()->id;
      $new=Products::create([
          'productname_en'=>$request['productname_en' ],
          'productname_ar'=>$request['productname_ar'],
          'descriptions_en'=>$request['productdescriptions_en'],
          'descriptions_ar'=>$request['productdescriptions_ar'],
          'productfeature_en'=>$request['productfeatures_en'],
          'productfeature_ar'=>$request['productfeatures_ar'],
          'producthowused_en'=>$request['producthowused_en'],
          'producthowused_ar'=>$request['producthowused_ar'],
          'status_en'=>$request['status_en'],
          'status_ar'=>$request['status_ar'],
          'price'=>$request['price' ],
          'discountprice'=>$request['discount_price'],
          'dayfordiscount'=>$request['dayfordiscount'],
          'user_id'=>$user_i,
          'category_id'=>$request['category_id'],
      ]);
//      return view('Allpage.imgforproduct',['new_product'=>$new ,'color'=>$color,'productcreate'=>'product created successfully'])->with('productcreate','erwerwer');
       return redirect()->route('uploadimage',$new->id)->with(['product_create'=>'Create product successfully']);

  }

//edit product
public function Edit(Request  $request){

    $color=LeftnavColor::all()->last();
    $color->update([
        'ColorDashboard'=>'transparent',
        'ColorUsers'=>'transparent',
        'ColorProducts'=>'rgb(76,175,80)',
        'ColorShowProducts'=>'transparent',
        'ColorCreateProduct'=>'rgb(76,175,80)',
        'ColorCategories'=>'transparent',
        'ColorShowCategories'=>'transparent',
        'ColorCreateCategory'=>'transparent',
        'ColorSettings'=>'transparent',
        'ColorNotifications'=>'transparent',
        'ColorLanguage'=>'transparent'
    ]);

    $productfind=Products::findOrFail($request->product_id);
     $categories=Categories::all();

    return view('Allpage.EditAll.EditProduct',['color'=>$color,'Product_for_edit'=>$productfind,'categories'=>$categories]);
}

//update product
public function update(ProductRequest $request){

    $color=LeftnavColor::all()->last();
    $color->update([
        'ColorDashboard'=>'transparent',
        'ColorUsers'=>'transparent',
        'ColorProducts'=>'rgb(76,175,80)',
        'ColorShowProducts'=>'transparent',
        'ColorCreateProduct'=>'rgb(76,175,80)',
        'ColorCategories'=>'transparent',
        'ColorShowCategories'=>'transparent',
        'ColorCreateCategory'=>'transparent',
        'ColorSettings'=>'transparent',
        'ColorNotifications'=>'transparent',
        'ColorLanguage'=>'transparent'
    ]);
     $upload_product=Products::findOrFail($request->product_id);
      $user_i=Auth::user()->id;
    $upload_product->update([
        'productname_en'=>$request['productname_en'],
        'productname_ar'=>$request['productname_ar'],
        'descriptions_en'=>$request['productdescriptions_en'],
        'descriptions_ar'=>$request['productdescriptions_ar'],
        'productfeature_en'=>$request['productfeatures_en'],
        'productfeature_ar'=>$request['productfeatures_ar'],
        'producthowused_en'=>$request['producthowused_en'],
        'producthowused_ar'=>$request['producthowused_ar'],
        'status_en'=>$request['status_en'],
        'status_ar'=>$request['status_ar'],
        'price'=>$request['price' ],
        'discountprice'=>$request['discount_price'],
        'dayfordiscount'=>$request['dayfordiscount'],
        'user_id'=>$user_i,
        'category_id'=>$request['category_id'],
    ]);
//      return view('Allpage.imgforproduct',['new_product'=>$new ,'color'=>$color,'productcreate'=>'product created successfully'])->with('productcreate','erwerwer');
    return redirect()->route('editimage',$upload_product->id)->with(['product_update'=>'update product successfully']);

}



//  delete product
public function Delete( Request  $request){
           $product=Products::findOrFail($request->product_id);

           $images=productimages::all();

            foreach ($images as $img){
                if($img->product_id == $product->id) {
                    if (File::exists(public_path('img/products/' . $img->imageproductname))) {
                        File::delete(public_path('img/products/' . $img->imageproductname));
                    }
                }
            }





        $product->delete();
        return redirect()->route('showProducts')->with(['product_deleted'=>'product deleted successfully']);
}












}
