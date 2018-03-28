<?php

Route::get('/', function () {
    session()->flash('flash', ['message' => 'Error', 'level' => 'danger']);
    
    return view('welcome');
});
