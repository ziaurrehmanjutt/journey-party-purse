<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Trip;

class TripController extends Controller
{
    public function index()
    {
        return Trip::all();
    }

    public function store(Request $request)
    {
        return Trip::create($request->all());
    }

    public function show($id)
    {
        return Trip::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $trip = Trip::findOrFail($id);
        $trip->update($request->all());
        return $trip;
    }

    public function destroy($id)
    {
        $trip = Trip::findOrFail($id);
        $trip->delete();
        return 204;
    }
}
