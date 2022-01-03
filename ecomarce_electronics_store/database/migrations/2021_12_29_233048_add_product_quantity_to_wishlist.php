<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddProductQuantityToWishlist extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('wishlists', function (Blueprint $table) {
            $table->integer('product_quantity')->default(1);
            $table->float('TotalPrice_for_oneProduct');
            $table->float('MainTotalPrice_allProduct');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('wishlists', function (Blueprint $table) {
            $table->dropColumn('product_quantity');
            $table->dropColumn('TotalPrice_for_oneProduct');
            $table->dropColumn('MainTotalPrice_allProduct');
        });
    }
}
