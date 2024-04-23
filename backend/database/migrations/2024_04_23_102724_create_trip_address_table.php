<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripAddressTable extends Migration
{
    public function up()
    {
        Schema::create('trip_address', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('trip_id');
            $table->unsignedBigInteger('address_id');
            $table->unsignedInteger('sequence'); // Sequence to determine the order of addresses within a trip
            $table->dateTime('reach_time')->nullable();
            $table->dateTime('leave_time')->nullable();
            $table->integer('stay_time')->nullable(); // Stay time in minutes
            $table->enum('type', ['pickup', 'visit']); // Type of address
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('trip_id')->references('id')->on('trips')->onDelete('cascade');
            $table->foreign('address_id')->references('id')->on('addresses')->onDelete('cascade');
            
        });
    }

    public function down()
    {
        Schema::dropIfExists('trip_address');
    }
}
