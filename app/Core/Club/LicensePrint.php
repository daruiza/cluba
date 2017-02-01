<?php namespace App\Core\Club;

use Illuminate\Database\Eloquent\Model;

class LicensePrint extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
	protected $table = 'clu_license_print';
	
	protected $fillable =['id','date','price','description','suscription_id'];
			
}

