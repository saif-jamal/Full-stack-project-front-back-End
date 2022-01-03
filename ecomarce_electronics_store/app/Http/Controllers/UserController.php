<?php

namespace App\Http\Controllers;

use App\ColorModel\LeftnavColor;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateInfo;
use App\Models\UsersInfo;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(){
        $color=LeftnavColor::all()->last();
        $color->update([
            'ColorDashboard'=>'transparent',
            'ColorUsers'=>'rgb(76,175,80)',
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
        $users=User::paginate(7);
        $userInfo=UsersInfo::all();



        return view('Allpage.Users',['color'=>$color,'users'=>$users,'usersinfo'=>$userInfo]);
    }

    //    user create
    public  function create(){
        $color=LeftnavColor::all()->last();
        $color->update([
            'ColorDashboard'=>'transparent',
            'ColorUsers'=>'rgb(76,175,80)',
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
        return view('Allpage.User.Create_user',['color'=>$color]);

    }

    public function store(UserRequest $request){
        $color=LeftnavColor::all()->last();
        $color->update([
            'ColorDashboard'=>'transparent',
            'ColorUsers'=>'rgb(76,175,80)',
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

        $user=User::create([
            'role'=>$request['role'],
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password'])
        ]);

        $image="";
        if($request->hasFile('userimage')){
            $image ="User_image_".time().'_'.rand(0,1000).'.'.$request['userimage']->extension();
            $request['userimage']->move(public_path('/img/users'), $image);
        }

        $wallpaper="";
        if($request->hasFile('wallpaper')){
            $wallpaper ="User_wallpaper_".time().'_'.rand(0,1000).'.'.$request['wallpaper']->extension();
            $request['wallpaper']->move(public_path('/img/users'), $wallpaper);
        }

        $alluser=User::all()->last();

        $userinfo=UsersInfo::create([
            'phone_number'=>$request['phone_number'],
            'userimage'=>$image,
            'status'=>$request['status'],
            'wallpaper'=>$wallpaper,
            'gender'=>$request['gender'],
            'facebookprofile'=>$request['facebookprofile'],
            'instgramprofile'=>$request['instgramprofile'],
            'twitterprofile'=>$request['twitterprofile'],
            'linkedlnprofile'=>$request['linkedlnprofile'],
            'githubprofile'=>$request['githubprofile'],
            'locationOnMAP'=>$request['locationOnMAP'],
            'user_id'=>$user->id
        ]);


      return redirect()->route('users')->with(['create_user'=>'success']);


    }

    //    edit user
    public  function edit(Request $request){
        $color=LeftnavColor::all()->last();
        $color->update([
            'ColorDashboard'=>'transparent',
            'ColorUsers'=>'rgb(76,175,80)',
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
        $user=User::findOrFail($request->user_id);
        $usersinfo=UsersInfo::all();
        $userinfo="";
        foreach ($usersinfo as $user_info)
        {
            if($user_info->user_id==$user->id){
                $userinfo=$user_info;
            }
        }

        return  view('Allpage.User.Edit_user',['color'=>$color,'user'=>$user,'userinfo'=>$userinfo]);
    }

    public function update(UserUpdateInfo  $request){

//        user here
        $user=User::findOrFail($request['user_id']);

        $pass=$user->password;
        if($request['password'] != 'empty00000000')
        {
            $pass=Hash::make($request['password']);
        }

        if($user->email===$request['email']){
            $user->update([
                'role'=>$request['role'],
                'name' => $request['name'],
                'password' => $pass
            ]);
        }else{

            $validationEmail=$request->validate([
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            ]);

            $user->update([
                'role'=>$request['role'],
                'name' => $request['name'],
                'email' => $validationEmail['email'],
                'password' => $pass
            ]);


        }


//  check if user not have a information row
     if($request['userInfo_id']==0){

//         create a row of information for this user
         $image="";
         if($request->hasFile('userimage')){
             $image ="User_image_".time().'_'.rand(0,1000).'.'.$request['userimage']->extension();
             $request['userimage']->move(public_path('/img/users'), $image);
         }

         $wallpaper="";
         if($request->hasFile('wallpaper')){
             $wallpaper ="User_wallpaper_".time().'_'.rand(0,1000).'.'.$request['wallpaper']->extension();
             $request['wallpaper']->move(public_path('/img/users'), $wallpaper);
         }
         UsersInfo::create([
             'phone_number'=>$request['phone_number'],
             'userimage'=>$image,
             'status'=>$request['status'],
             'wallpaper'=>$wallpaper,
             'gender'=>$request['gender'],
             'facebookprofile'=>$request['facebookprofile'],
             'instgramprofile'=>$request['instgramprofile'],
             'twitterprofile'=>$request['twitterprofile'],
             'linkedlnprofile'=>$request['linkedlnprofile'],
             'githubprofile'=>$request['githubprofile'],
             'locationOnMAP'=>$request['locationOnMAP'],
             'user_id'=>$user->id
         ]);

     }else{

//     else if have info and just needed to updated

        $userinfo=UsersInfo::findOrFail($request['userInfo_id']);

        $image=$userinfo->userimage;
        if($request->hasFile('userimage')){

            if (File::exists(public_path('img/users/' . $userinfo->userimage))) {
                File::delete(public_path('img/users/' . $userinfo->userimage));
            }

            $image ="User_image_".time().'_'.rand(0,1000).'.'.$request['userimage']->extension();
            $request['userimage']->move(public_path('/img/users'), $image);
        }


        $wallpaper=$userinfo->wallpaper;
        if($request->hasFile('wallpaper')){

            if (File::exists(public_path('img/users/' . $userinfo->wallpaper))) {
                File::delete(public_path('img/users/' . $userinfo->wallpaper));
            }

            $wallpaper ="User_wallpaper_".time().'_'.rand(0,1000).'.'.$request['wallpaper']->extension();
            $request['wallpaper']->move(public_path('/img/users'), $wallpaper);
        }

        $userinfo->update([
            'phone_number'=>$request['phone_number'],
            'userimage'=>$image,
            'status'=>$request['status'],
            'wallpaper'=>$wallpaper,
            'gender'=>$request['gender'],
            'facebookprofile'=>$request['facebookprofile'],
            'instgramprofile'=>$request['instgramprofile'],
            'twitterprofile'=>$request['twitterprofile'],
            'linkedlnprofile'=>$request['linkedlnprofile'],
            'githubprofile'=>$request['githubprofile'],
            'locationOnMAP'=>$request['locationOnMAP'],
            'user_id'=>$user->id
        ]);

     }

        return redirect()->route('users')->with(['update_user'=>'success']);
    }


    //    delete user
    public function Delete(Request $request)
    {
        $user=User::findOrFail($request->user_id);
        $usersinfo=UsersInfo::all();
        foreach ($usersinfo as $user_info)
        {
            if($user_info->user_id==$user->id){
                if (File::exists(public_path('img/users/' . $user_info->userimage))) {
                    File::delete(public_path('img/users/' . $user_info->userimage));
                }
                if (File::exists(public_path('img/users/' . $user_info->wallpaper))) {
                    File::delete(public_path('img/users/' . $user_info->wallpaper));
                }
            }
        }



        $user->delete();
        return redirect()->route('users')->with(['user_deleted'=>'user deleted successfully']);
    }

}
