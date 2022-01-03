<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'categoryname_en'=>$this->categoryname_en,
            'categoryname_ar'=>$this->categoryname_ar,
            'categorydescriptions_en'=>$this->categorydescriptions_en,
            'categorydescriptions_ar'=>$this->categorydescriptions_ar,
            'categoryimage'=>'http://127.0.0.1:8000/img/Categories/'.$this->categoryimage,
            'status_en'=>$this->status_en,
            'status_ar'=>$this->status_ar,
            'categorysection_en'=>$this->categorysection_en,
            'categorysection_ar'=>$this->categorysection_ar,
            'categoryparientID'=>$this->categoryparientID,
        ];
    }
}
