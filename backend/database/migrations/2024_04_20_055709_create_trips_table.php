<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->integer('seats')->unsigned();
            $table->integer('remaining_seats')->unsigned();
            $table->integer('interested_count')->unsigned()->default(0);
            $table->integer('verified_count')->unsigned()->default(0);
            $table->enum('status', ['active', 'inactive', 'planned', 'cancelled', 'pending', 'delayed'])->default('active');
            $table->unsignedBigInteger('low_plan_budget_id')->nullable();
            $table->unsignedBigInteger('medium_plan_budget_id')->nullable();
            $table->unsignedBigInteger('high_plan_budget_id')->nullable();
            $table->unsignedBigInteger('main_pickup_point_id')->nullable();
            $table->unsignedBigInteger('main_location_visit_id')->nullable();
            $table->text('refund_policy')->nullable();
            $table->string('contact_email')->nullable();
            $table->string('contact_number')->nullable();
            $table->date('start_date');
            $table->date('end_date');
            $table->unsignedInteger('number_of_days');
            $table->unsignedBigInteger('created_by');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('last_time_for_booking')->nullable();
            $table->string('vehicle_for_trip')->nullable();

            // $table->foreign('low_plan_budget_id')->references('id')->on('budgets')->onDelete('set null');
            // $table->foreign('medium_plan_budget_id')->references('id')->on('budgets')->onDelete('set null');
            // $table->foreign('high_plan_budget_id')->references('id')->on('budgets')->onDelete('set null');
            // $table->foreign('min_pickup_point_id')->references('id')->on('locations')->onDelete('set null');
            // $table->foreign('main_location_visit_id')->references('id')->on('locations')->onDelete('set null');
            // $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trips');
    }
};
