<?php

namespace App\Http\Controllers;

use App\ColorModel\LeftnavColor;
use App\Models\productimages;
use App\Models\Products;
use App\Models\UsersInfo;
use App\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //set color for all data not used !!!!!
    public function index(){
        LeftnavColor::create([
            'ColorDashboard'=>'transparent',
            'ColorUsers'=>'transparent',
            'ColorProducts'=>'transparent',
            'ColorShowProducts'=>'transparent',
            'ColorCreateProduct'=>'transparent',
            'ColorCategories'=>'transparent',
            'ColorShowCategories'=>'transparent',
            'ColorCreateCategory'=>'transparent',
            'ColorSettings'=>'transparent',
            'ColorNotifications'=>'transparent',
            'ColorLanguage'=>'transparent'
        ]);
        $color=LeftnavColor::all()->last();
        return view('welcome',['color'=>$color]);
    }


    public function showDashboard(){
        $color=LeftnavColor::all()->last();
        if(LeftnavColor::all()->isEmpty()){
            $color = LeftnavColor::create([
                'ColorDashboard'=>'transparent',
                'ColorUsers'=>'transparent',
                'ColorProducts'=>'transparent',
                'ColorShowProducts'=>'transparent',
                'ColorCreateProduct'=>'transparent',
                'ColorCategories'=>'transparent',
                'ColorShowCategories'=>'transparent',
                'ColorCreateCategory'=>'transparent',
                'ColorSettings'=>'transparent',
                'ColorNotifications'=>'transparent',
                'ColorLanguage'=>'transparent'
            ]);
        }else{

            $color->update([
                'ColorDashboard'=>'rgb(76,175,80)',
                'ColorUsers'=>'transparent',
                'ColorProducts'=>'transparent',
                'ColorShowProducts'=>'transparent',
                'ColorCreateProduct'=>'transparent',
                'ColorCategories'=>'transparent',
                'ColorShowCategories'=>'transparent',
                'ColorCreateCategory'=>'transparent',
                'ColorSettings'=>'transparent',
                'ColorNotifications'=>'transparent',
                'ColorLanguage'=>'transparent'
            ]);
        }
        $users=User::paginate(5,["*"],'users_page');
        $usersinfo=UsersInfo::all();

        $products=Products::paginate(5,['*'],'products_page');
        $product_img=productimages::all();




        return view('Dashboard',['color'=>$color,'users'=>$users,'usersinfo'=>$usersinfo,'products'=>$products,'products_img'=>$product_img]);
    }



}
