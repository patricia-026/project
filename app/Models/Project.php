<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillabe = [
        'name',
        'description',
        'status'
    ];

    function contacts()
    {
        return $this->belongsToMany(Contact::class);
    }
}
