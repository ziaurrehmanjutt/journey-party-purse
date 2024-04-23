<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    use HasFactory;

    public function addresses()
    {
        return $this->belongsToMany(Address::class)
            ->withPivot('reach_time', 'leave_time', 'stay_time', 'type')
            ->withTimestamps();
    }
}
