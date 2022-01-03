<?php

namespace App\Http\Controllers\api\user;

use App\Http\Controllers\api\UsersResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\UsersInfo;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;

class registerController extends Controller
{
    use UsersResponse;

    //  register user
    public function RegisterUser(Request  $request){
           $name=$request->input('name');
           $email = $request->input('email');
           $password=$request->input('password');

            $user__email = User::where('email', '=', $email)->first();
            if ($user__email) {
                return $this->LoginUsersResponseData('this email is already exists');
            }elseif ( strlen(trim($request->password) ) <8 ){
                return $this->LoginUsersResponseData('The password must be at least 8 digit');
            }else{
                $new =User::create([
                    'name'=>$name,
                    'email'=>$email,
                    'password'=>Hash::make($password),
                    'role'=>'user'
                ]);
                return $this->LoginUsersResponseData('user register success',200,new UserResource([
                        "User_id"=> $new->id,
                        "name"=> $new->name,
                        "email"=>$new->email,
                ]));
            }


    }

    //  update user Info
    public function updatuserInfo(Request $request){
         $user_id=$request->input('user_id');
         $name=$request->input('name');
         $email = $request->input('email');
         $userimage=$request->input('userimage');
         $userwallpaper=$request->input('wallpaper');
         $phone_number=$request->input('phone_number');
         $facebookLink=$request->input('facebookprofile');
         $instagramLink=$request->input('instgramprofile');
         $twitterLink=$request->input('twitterprofile');
         $linkedlnLink=$request->input('linkedlnprofile');
         $githublink=$request->input('githubprofile');
         $locationOnMap=$request->input('locationOnMAP');
         $gender=$request->input('gender');

         $user=User::find($user_id);
         $user->update([
             'name'=>$name,
             'email'=>$email,
         ]);

        $user__profile= UsersInfo::where('user_id', '=', $user_id)->first();
        if ($user__profile) {

            $image=$user__profile->userimage;
            if($request->hasFile('userimage')){

                if (File::exists(public_path('img/users/' . $user__profile->userimage))) {
                    File::delete(public_path('img/users/' . $user__profile->userimage));
                }

                $image ="User_image_".time().'_'.rand(0,1000).'.'.$request->userimage->extension();
                $request->userimage->move(public_path('/img/users'), $image);
            }


            $wallpaper=$user__profile->wallpaper;
            if($request->hasFile('wallpaper')){

                if (File::exists(public_path('img/users/' . $user__profile->wallpaper))) {
                    File::delete(public_path('img/users/' . $user__profile->wallpaper));
                }

                $wallpaper ="User_wallpaper_".time().'_'.rand(0,1000).'.'.$request->wallpaper->extension();
                $request->wallpaper->move(public_path('/img/users'), $wallpaper);
            }

            $user__profile->update([
                'phone_number'=>$phone_number,
                'userimage'=>$image,
                'wallpaper'=>$wallpaper,
                'gender'=>$gender,
                'facebookprofile'=>$facebookLink,
                'instgramprofile'=>$instagramLink,
                'twitterprofile'=>$twitterLink,
                'linkedlnprofile'=>$linkedlnLink,
                'githubprofile'=>$githublink,
                'locationOnMAP'=>$locationOnMap,
                'user_id'=>$user_id
            ]);
            return $this->LoginUsersResponseData('updated profile info success',200,new UserResource([
                "User_id"=> $user->id,
                "name"=> $user->name,
                "email"=>$user->email,
                "phone_number"=> $user__profile->phone_number,
                "userimage"=> ('http://localhost:8000/img/users/'.$user__profile->userimage),
                "status"=> $user__profile->status,
                "wallpaper"=> ('http://localhost:8000/img/users/'.$user__profile->wallpaper),
                "gender"=> $user__profile->gender,
                "facebookprofile"=> $user__profile->facebookprofile,
                "instgramprofile"=> $user__profile->instgramprofile,
                "twitterprofile"=> $user__profile->twitterprofile,
                "linkedlnprofile"=> $user__profile->linkedlnprofile,
                "githubprofile"=> $user__profile->githubprofile,
                "locationOnMAP"=> $user__profile->locationOnMAP,
            ]));
        }
        else{

            $image="";
            if($userimage){
                $image ="User_image_".time().'_'.rand(0,1000).'.'.$userimage->extension();
                $userimage->move(public_path('/img/users'), $image);
            }

            $wallpaper="";
            if($userwallpaper){
                $wallpaper ="User_wallpaper_".time().'_'.rand(0,1000).'.'.$userwallpaper->extension();
                $userwallpaper->move(public_path('/img/users'), $wallpaper);
            }
            $userinfo=UsersInfo::create([
                'phone_number'=>$phone_number,
                'userimage'=>$image,
                'wallpaper'=>$wallpaper,
                'gender'=>$gender,
                'facebookprofile'=>$facebookLink,
                'instgramprofile'=>$instagramLink,
                'twitterprofile'=>$twitterLink,
                'linkedlnprofile'=>$linkedlnLink,
                'githubprofile'=>$githublink,
                'locationOnMAP'=>$locationOnMap,
                'user_id'=>$user_id
            ]);
            return $this->LoginUsersResponseData('created profile info success',200,new UserResource([
                    "User_id"=> $user->id,
                    "name"=> $user->name,
                    "email"=>$user->email,
                    "phone_number"=> $userinfo->phone_number,
                    "userimage"=> ('http://localhost:8000/img/users/'.$userinfo->userimage),
                    "status"=> $userinfo->status,
                    "wallpaper"=> ('http://localhost:8000/img/users/'.$userinfo->wallpaper),
                    "gender"=> $userinfo->gender,
                    "facebookprofile"=> $userinfo->facebookprofile,
                    "instgramprofile"=> $userinfo->instgramprofile,
                    "twitterprofile"=> $userinfo->twitterprofile,
                    "linkedlnprofile"=> $userinfo->linkedlnprofile,
                    "githubprofile"=> $userinfo->githubprofile,
                    "locationOnMAP"=> $userinfo->locationOnMAP,
            ]));
        }
    }

}
