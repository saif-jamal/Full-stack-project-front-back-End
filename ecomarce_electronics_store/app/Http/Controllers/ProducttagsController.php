<?php

namespace App\Http\Controllers;

use App\ColorModel\LeftnavColor;
use App\Models\productimages;
use App\Models\producttags;
use Illuminate\Http\Request;

class ProducttagsController extends Controller
{
    //create tags for product
    public  function tagsforproduct($new_product){
        $alltags=producttags::all();
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
        return view('Allpage.tagsforproduct',['color'=>$color,'product_id'=>$new_product,'all___tags'=>$alltags]);
    }

    public  function Createtagsforproduct(Request $request){
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

            'product_id'=>'required|integer',
            'tags'=>'required|string|max:200'

        ]);

        $new=producttags::create([
            'product_id'=>$request->product_id,
            'tagname'=>$request->tags
        ]);
        $all_tags=producttags::all();
//        return view('Allpage.tagsforproduct',['new_tags_for_product'=>$request->product_id,'all_tag'=>$all_tags,'color'=>$color]);
        return redirect()->route('tagsforproduct',$request->product_id)->with(['new_tags_for_product'=>$request->product_id,'all_tag'=>$all_tags]);

    }

    //    edit tags
    public function edittags($id){

        $alltags=producttags::all();

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
        return view('Allpage.EditAll.EditProductTags',['color'=>$color,'product_id'=>$id,'all___tags'=>$alltags]);
    }

    //update
    public function Update(Request  $request){
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

            'product_id'=>'required|integer',
            'tags'=>'required|string|max:200'

        ]);

        $new=producttags::create([
            'product_id'=>$request->product_id,
            'tagname'=>$request->tags
        ]);
        $all_tags=producttags::all();

        return redirect()->route('edittags',$request->product_id)->with(['new_tags_for_product'=>$request->product_id,'all_tag'=>$all_tags]);

    }


}

