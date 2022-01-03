<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{

    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('productname_en');
            $table->string('productname_ar');
            $table->text('descriptions_en');
            $table->text('descriptions_ar');
            $table->text('productfeature_en')->nullable();
            $table->text('productfeature_ar')->nullable();
            $table->text('producthowused_en')->nullable();
            $table->text('producthowused_ar')->nullable();
            $table->enum('status_en',['Available','Unavailable']);
            $table->enum('status_ar',['متوفر','غير متوفر']);
            $table->float('price');
            $table->float('discountprice');
            $table->dateTime('dayfordiscount')->nullable();

//            relation linke product with user
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete()->cascadeOnUpdate();

//            linke product with categories
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories')->cascadeOnDelete()->cascadeOnUpdate();

            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('products');
    }
}
