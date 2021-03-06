<?php namespace App\Core\Club;

use Illuminate\Database\Eloquent\Model;

class Specialty extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
	protected $table = 'clu_specialty';
	
	protected $fillable =['id','name','code','description'];
			
}

