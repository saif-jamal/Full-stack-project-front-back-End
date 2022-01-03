<?php

namespace App\Http\Controllers;

use App\ColorModel\LeftnavColor;
use App\Models\productimages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ProductimagesController extends Controller
{
    //    create images for product
    public  function imagesforproduct($new_product){
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
        return view('Allpage.imgforproduct',['color'=>$color,'product_id'=>$new_product])->with('createproduct','create product successfully');
    }

//    create image
    public  function createimages(Request $request){

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

        $this->validate($request, [

            'images' => 'sometimes',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg,webp|max:4048'

        ]);

        $imageName="";
        if($request->hasfile('images'))
        {
            foreach($request->file('images') as $image)
            {
                $imageName ="product_".time().'_'.rand(0,1000).'.'.$image->extension();
                $image->move(public_path().'/img/products', $imageName);

                $new=productimages::create([
                    'product_id'=>$request->product_id,
                    'imageproductname'=>$imageName
                ]);
            }
        }


//        return view('Allpage.tagsforproduct',['color'=>$color,'productcreate'=>'product created successfully','product_id'=>$request->product_id]);
          return redirect()->route('tagsforproduct',$request->product_id);
    }

    //    create images for product
    public  function editimage($edit_product){
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
        $allimg=productimages::all();
        return view('Allpage.EditAll.EditProductImages',['color'=>$color,'product_id'=>$edit_product,'allimg'=>$allimg])->with('editproduct','update product successfully');
    }

//    update image
    public  function updateimage(Request $request){

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

        $this->validate($request, [

            'images' => 'sometimes',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:4048'

        ]);

        $imageName="";
        if($request->hasfile('images'))
        {
            foreach($request->file('images') as $image)
            {
                $imageName ="product_".time().'_'.rand(0,1000).'.'.$image->extension();
                $image->move(public_path().'/img/products', $imageName);

                $new=productimages::create([
                    'product_id'=>$request->product_id,
                    'imageproductname'=>$imageName
                ]);
            }
        }

        return redirect()->route('edittags',$request->product_id);
    }

    //    img dlete
    public  function Imagedelete($imagename){
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
           $product_id='';
            $imgs=productimages::all();
            foreach ($imgs as $img)
            {
                if($img->imageproductname== $imagename){
                    $product_id=$img->product_id;
                    if (File::exists(public_path('img/products/' . $img->imageproductname))) {
                        File::delete(public_path('img/products/' . $img->imageproductname));
                    }
                    $img_product=productimages::findOrFail($img->id);
                    $img_product->delete();
                }
            }


    //    return redirect()->back()->with(['delete_img'=>'success']);
        return redirect()->route('editimage',$product_id)->with(['delete_img'=>'successfully']);
    }


}



