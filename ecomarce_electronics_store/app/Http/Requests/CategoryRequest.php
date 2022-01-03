<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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
            'categoryimage' => 'required',
            'categoryimage.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:4048',
            'categgoryname_en'=>'required|string|min:10',
            'categgoryname_ar'=>'required|string|min:10',
            'categorysection_en'=>'required|string|min:3',
            'categorysection_ar'=>'required|string|min:3',
            'category_Parent_id'=>'required|integer',
            'status_en'=>'required|string|min:3',
            'status_ar'=>'required|string|min:3',
            'categorydescriptions_en'=>'required|string|min:10',
            'categorydescriptions_ar'=>'required|string|min:10'
        ];
    }
}
