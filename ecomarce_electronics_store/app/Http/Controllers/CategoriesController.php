<?php

namespace App\Http\Controllers;

use App\ColorModel\LeftnavColor;
use App\Http\Requests\CategoryRequest;
use App\Models\Categories;
use App\Models\productimages;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class CategoriesController extends Controller
{
    //    show all category
    public function ShowCategories(){
        $color=LeftnavColor::all()->last();
        $color->update([
            'ColorDashboard'=>'transparent',
            'ColorUsers'=>'transparent',
            'ColorProducts'=>'transparent',
            'ColorShowProducts'=>'transparent',
            'ColorCreateProduct'=>'transparent',
            'ColorCategories'=>'rgb(76,175,80)',
            'ColorShowCategories'=>'rgb(76,175,80)',
            'ColorCreateCategory'=>'transparent',
            'ColorSettings'=>'transparent',
            'ColorNotifications'=>'transparent',
            'ColorLanguage'=>'transparent'
        ]);
        $allcategories=Categories::paginate(7);

        return view('Allpage.ShowCategories',['color'=>$color,'categorie'=>$allcategories]);
    }

    //    create category
    public function createcategory(){
        $color=LeftnavColor::all()->last();
        $color->update([
            'ColorDashboard'=>'transparent',
            'ColorUsers'=>'transparent',
            'ColorProducts'=>'transparent',
            'ColorShowProducts'=>'transparent',
            'ColorCreateProduct'=>'transparent',
            'ColorCategories'=>'rgb(76,175,80)',
            'ColorShowCategories'=>'transparent',
            'ColorCreateCategory'=>'rgb(76,175,80)',
            'ColorSettings'=>'transparent',
            'ColorNotifications'=>'transparent',
            'ColorLanguage'=>'transparent'
        ]);
        $categories=Categories::all();

        return view('Allpage.CreateCategory',['color'=>$color,'categories'=>$categories]);
    }

    public function store(CategoryRequest $request){
        $color=LeftnavColor::all()->last();
        $color->update([
            'ColorDashboard'=>'transparent',
            'ColorUsers'=>'transparent',
            'ColorProducts'=>'transparent',
            'ColorShowProducts'=>'transparent',
            'ColorCreateProduct'=>'transparent',
            'ColorCategories'=>'rgb(76,175,80)',
            'ColorShowCategories'=>'transparent',
            'ColorCreateCategory'=>'rgb(76,175,80)',
            'ColorSettings'=>'transparent',
            'ColorNotifications'=>'transparent',
            'ColorLanguage'=>'transparent'
        ]);

        $imageName="";
        if($request->hasFile('categoryimage')){
            $imageName ="Categories_".time().'_'.rand(0,1000).'.'.$request['categoryimage']->extension();
            $request['categoryimage']->move(public_path('/img/Categories'), $imageName);
        }

        $new=Categories::create([
            'categoryname_en'=>$request->categgoryname_en,
            'categoryname_ar'=>$request->categgoryname_ar,
            'categorydescriptions_en'=>$request->categorydescriptions_en,
            'categorydescriptions_ar'=>$request->categorydescriptions_ar,
            'categoryimage'=>$imageName,
            'status_en'=>$request->status_en,
            'status_ar'=>$request->status_ar,
            'categorysection_en'=>$request->categorysection_en,
            'categorysection_ar'=>$request->categorysection_ar,
            'categoryparientID'=>$request->category_Parent_id
        ]);

        return redirect()->route('ShowCategories')->with(['create'=>'Create Category successfully']);
    }

    //    edit category
    public function editcategory(Request  $request){
        $color=LeftnavColor::all()->last();
        $color->update([
            'ColorDashboard'=>'transparent',
            'ColorUsers'=>'transparent',
            'ColorProducts'=>'transparent',
            'ColorShowProducts'=>'transparent',
            'ColorCreateProduct'=>'transparent',
            'ColorCategories'=>'rgb(76,175,80)',
            'ColorShowCategories'=>'rgb(76,175,80)',
            'ColorCreateCategory'=>'transparent',
            'ColorSettings'=>'transparent',
            'ColorNotifications'=>'transparent',
            'ColorLanguage'=>'transparent'
        ]);
        $category=Categories::findOrFail($request->category_id);
        $categories=Categories::all();
        return view('Allpage.EditAll.EditCategory',['color'=>$color,'category'=>$category,'categories'=>$categories]);
    }

    //update
    public function update(CategoryRequest  $request){
        $color=LeftnavColor::all()->last();
        $color->update([
            'ColorDashboard'=>'transparent',
            'ColorUsers'=>'transparent',
            'ColorProducts'=>'transparent',
            'ColorShowProducts'=>'transparent',
            'ColorCreateProduct'=>'transparent',
            'ColorCategories'=>'rgb(76,175,80)',
            'ColorShowCategories'=>'transparent',
            'ColorCreateCategory'=>'rgb(76,175,80)',
            'ColorSettings'=>'transparent',
            'ColorNotifications'=>'transparent',
            'ColorLanguage'=>'transparent'
        ]);

        $update=Categories::findOrFail($request->category_id);
        $imageName= $update->categoryimage;

        if($request->hasFile('categoryimage')){

            if (File::exists(public_path('img/Categories/' . $update->categoryimage))) {
                File::delete(public_path('img/Categories/' . $update->categoryimage));
            }

            $imageName ="Categories_".time().'_'.rand(0,1000).'.'.$request['categoryimage']->extension();
            $request['categoryimage']->move(public_path('/img/Categories'), $imageName);
        }

        $update->update([
            'categoryname_en'=>$request->categgoryname_en,
            'categoryname_ar'=>$request->categgoryname_ar,
            'categorydescriptions_en'=>$request->categorydescriptions_en,
            'categorydescriptions_ar'=>$request->categorydescriptions_ar,
            'categoryimage'=>$imageName,
            'status_en'=>$request->status_en,
            'status_ar'=>$request->status_ar,
            'categorysection_en'=>$request->categorysection_en,
            'categorysection_ar'=>$request->categorysection_ar,
            'categoryparientID'=>$request->category_Parent_id
        ]);

        return redirect()->route('ShowCategories')->with(['update_category'=>'Updated Category successfully']);
    }

    //    delete category
    public function Delete(Request  $request){
        $category=Categories::findOrFail($request->category_id);

        if (File::exists(public_path('img/Categories/' . $category->categoryimage))) {
            File::delete(public_path('img/Categories/' . $category->categoryimage));
        }

        $category->delete();
        return redirect()->route('ShowCategories')->with(['category_deleted'=>'product deleted successfully']);
    }

}
