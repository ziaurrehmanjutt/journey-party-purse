<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'city_id',
        'country_id',
        'state_id',
        'area',
        'title',
        'street',
        'postal_code',
        'latitude',
        'longitude',
        'type',
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function trips()
    {
        return $this->belongsToMany(Trip::class)
            ->withPivot('reach_time', 'leave_time', 'stay_time', 'type')
            ->withTimestamps();
    }
}
