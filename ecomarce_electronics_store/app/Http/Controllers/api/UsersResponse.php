<?php


namespace App\Http\Controllers\api;


trait UsersResponse
{
   public function LoginUsersResponseData($messge= 'not found',$status= 404,$data=null){
         return response([
             'message'=>$messge,
             'status'=>$status,
             'data'=>$data
         ]);
   }
}
