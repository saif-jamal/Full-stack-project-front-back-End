<?php

namespace App\Http\Controllers\api\categories;

use App\Http\Controllers\api\UsersResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Categories;
use Illuminate\Http\Request;

class categoriesController extends Controller
{
    use UsersResponse;

    //show all Categories

    public function index(){
        $categories=CategoryResource::collection(Categories::orderBy('created_at','DESC')->get());
        return $this->LoginUsersResponseData('show all Categoreis',200,$categories);
    }
}
