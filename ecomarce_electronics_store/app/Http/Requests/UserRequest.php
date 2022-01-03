<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'role'=>'required|string',
            'phone_number'=> ['sometimes','nullable'],
            'userimage'=>'sometimes|nullable|image',
            'status'=>'required|string',
            'wallpaper'=>'sometimes|nullable|image',
            'gender'=>'sometimes|nullable|string',
            'facebookprofile'=>'sometimes|nullable|url',
            'instgramprofile'=>'sometimes|nullable|url',
            'twitterprofile'=>'sometimes|nullable|url',
            'linkedlnprofile'=>'sometimes|nullable|url',
            'githubprofile'=>'sometimes|nullable|url',
            'locationOnMAP'=>'sometimes|nullable|url'
        ];
    }
}
//'name'
//            'email'
//            'password'
//            'phone number',
//            'userimage',
//            'status',
//            'wallpaper',
//            'gender',
//            'facebookprofile',
//            'instgramprofile',
//            'twitterprofile',
//            'linkedlnprofile',
//            'githubprofile',
//            'locationOnMAP'
