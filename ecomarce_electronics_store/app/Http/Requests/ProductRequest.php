<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
            'productname_en' => ['required', 'string', 'max:255'],
            'productname_ar' => ['required', 'string', 'max:255'],
            'category_id' => ['required', 'integer', 'max:3955'],
            'price' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'discount_price' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'status_en'=>['required','string'],
            'status_ar'=>['required','string'],
            'dayfordiscount'=>['sometimes'],
            'productdescriptions_en'=> ['required', 'string'],
            'productdescriptions_ar'=> ['required', 'string'],
            'productfeatures_en'=> 'sometimes|nullable',
            'productfeatures_ar'=> 'sometimes|nullable',
            'producthowused_en'=> 'sometimes|nullable',
            'producthowused_ar'=> 'sometimes|nullable',
        ];
    }
}
