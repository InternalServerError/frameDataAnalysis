/**
 * Move
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  schema: true,
  attributes: {
  	name: 			{
	  					type: "string",
	  					required: true
	  				},
  	total_frame: 	{
	  					type: "integer",
	  					required: true
					},
  	block: 			{
	  					type: "string",
	  					required: true
					},
  	damage: 		{
	  					type: "string"
	  				},
  	stun: 			{
	  					type: "string"
					},
	meter_gain: 	{
						type: "string"
					},
	cancel_ability: {
						type: "string"
					},
	startup: 		{
						type: "string"
					},
	active: 		{
						type: "string"
					},
	recover: 		{
						type: "string"
					},
	adv_block: 		{
						type: "string"
					},
	adv_hit: 		{
						type: "string"
					},
	type: 			{
						type: "string"
					},
	note: 			{
						type: "text"
					},
	character_id:   {
						type: "string",
					},
	toJSON: function() {
		var obj = this.toObject();
		delete obj._csrf;
		return obj;
	}
  }
};
