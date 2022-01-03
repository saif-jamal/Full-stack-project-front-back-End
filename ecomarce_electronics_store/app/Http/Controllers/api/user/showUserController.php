<?php

namespace App\Http\Controllers\api\user;

use App\Http\Controllers\api\UsersResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\allUserResource;
use App\Models\UsersInfo;
use App\User;
use Illuminate\Http\Request;

class showUserController extends Controller
{
    use UsersResponse;

//    show all users
  public  function showallusers(){

      $users=User::orderBy('created_at','DESC')->get();
      $usersInfo=UsersInfo::orderBy('created_at','DESC')->get();
      $allUserInfo=array();
//      $alluserinfo=allUserResource::collection([$users,$usersInfo]);
        $chec___=0;
      foreach ($users as $user){

          array_push($allUserInfo,[
              'user_id'=>$user->id,
              'name'=>$user->name,
              'email'=>$user->email
          ]);
          foreach ($usersInfo as $userinfo){

              if($user->id == $userinfo->user_id){
                  array_pop($allUserInfo);
                  array_push($allUserInfo,[
                      'user_id'=>$user->id,
                      'name'=>$user->name,
                      'email'=>$user->email,
                      'phone_number'=>$userinfo->phone_number,
                      'userimage'=>'http://127.0.0.1:8000/img/users/'.$userinfo->userimage,
                      'wallpaper'=>'http://127.0.0.1:8000/img/users/'.$userinfo->wallpaper,
                      'status'=>$userinfo->status,
                      'gender'=>$userinfo->gender,
                      "facebookprofile"=> $userinfo->facebookprofile,
                      "instgramprofile"=> $userinfo->instgramprofile,
                      "twitterprofile"=> $userinfo->twitterprofile,
                      "linkedlnprofile"=> $userinfo->linkedlnprofile,
                      "githubprofile"=> $userinfo->githubprofile,
                      "locationOnMAP"=>$userinfo->locationOnMAP
                  ]);
              }

          }


      }




      return $this->LoginUsersResponseData('show all users',200,$allUserInfo);

  }




}
