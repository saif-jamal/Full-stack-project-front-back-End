<?php

namespace App\Http\Controllers;

use App\ColorModel\LeftnavColor;
use App\Models\productimages;
use App\Models\Products;
use App\Models\UsersInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Myprofile extends Controller
{
    public function index(){
        $color=LeftnavColor::all()->last();
        $color->update([
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

        $user=Auth::user();
        $usersinfo=UsersInfo::all();
        $user_info='';
        foreach ($usersinfo as $userinfo){
            if($userinfo->user_id==$user->id){
                $user_info=$userinfo;
            }
        }


        return view('Allpage.Myprofile',['color'=>$color,'user'=>$user,'userinfo'=>$user_info]);
    }
}
