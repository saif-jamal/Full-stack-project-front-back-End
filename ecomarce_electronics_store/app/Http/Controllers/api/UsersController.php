<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\UsersInfo;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    use UsersResponse;

//    login user
  public function logincheckuser(Request $request){

//      $validateData=$request->validate([
//          'email'=>'required|email',
//          'password'=>'required'
//      ]);
//      $users=User::all();
      $usersInfo=UsersInfo::all();

      $email = $request->input('email');
      $password = $request->input('password');




          $user__log = User::where('email', '=', $email)->first();
          if (!$user__log) {
              return $this->LoginUsersResponseData('email not found',404,'not found');
          }
          if (!Hash::check($password, $user__log->password)) {
              return $this->LoginUsersResponseData(true,404,'password not correct');
          }
             $user_data=[
                 "User_id"=> $user__log->id,
                 "name"=> $user__log->name,
                 "email"=>$user__log->email,
             ];
             foreach ($usersInfo as $userinfo)
              {
                  if($userinfo->user_id == $user__log->id)
                  {
                      $user_data=[
                          "User_id"=> $user__log->id,
                          "name"=> $user__log->name,
                          "email"=>$user__log->email,
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
                      ];
                  }
              }
//            $user_data
          return $this->LoginUsersResponseData('user found',200,new UserResource($user_data));






  }



}
