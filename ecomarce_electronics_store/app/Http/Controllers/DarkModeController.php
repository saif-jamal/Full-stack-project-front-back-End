<?php

namespace App\Http\Controllers;

use App\DarkMode;
use App\Http\Controllers\api\UsersResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DarkModeController extends Controller
{
    use UsersResponse;

    //    create row
    public function create(Request $request){

        $darmodetable=DarkMode::find(Auth::user()->id);

        if(!$darmodetable){
            DarkMode::create([
                'darkmodeColor_check'=>$request->darkmodeColor_check,
                'user_id'=>Auth::user()->id,
            ]);
            return $this->LoginUsersResponseData('create dark mode table success',200);
        }else{
//            $darmodetable=DarkMode::find(Auth::user()->id);
            $darmodetable->update([
                'darkmodeColor_check'=>$request->darkmodeColor_check,
            ]);

            return $this->LoginUsersResponseData('update dark mode table success',200);
        }

    }

   //show all data
    public  function show(){
        $data=DarkMode::all()->last();
        return $this->LoginUsersResponseData('show data',200,$data);
    }
}
