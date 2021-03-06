<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCluBeneficiaryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    	Schema::create('clu_beneficiary', function(Blueprint $table)
    	{
    		$table->increments('id');
    		$table->string('type_id');
    		$table->integer('identification');
    		$table->string('names');
    		$table->string('surnames');
    		$table->string('relationship');
    		$table->string('movil_number');
    		$table->string('state');
    		$table->string('alert');
    		$table->integer('price');
    		$table->string('civil_status');
    		$table->string('more');
            $table->date('birthdate')->nullable();
            $table->string('birthplace')->nullable();   
            $table->string('adress')->nullable();
            $table->string('city')->nullable();
            $table->string('email')->nullable();
    		$table->integer('license_id')->unsigned();
    		$table->foreign('license_id')->references('id')->on('clu_license')->onDelete('cascade');    		
    		$table->timestamps();
    	});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    	Schema::drop('clu_beneficiary');
    }
}
