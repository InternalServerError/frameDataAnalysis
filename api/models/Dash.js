/**
 * Dash
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,
  attributes: {
  	type: 						{
				  					type: "string",
				  					required: true
  								},
  	total_frames:				{
									type: "integer",
									required: true
								},
  	first_frame_invincibility: 	{
	  								type: "integer"
								},
  	last_frame_invincibility: 	{
  									type: "integer"
								},
  	invicibility_duration: 		{
  									type: "integer"
  								},
  	first_frame_airborne: 		{
	  								type: "integer"
								},
  	last_frame_airborne: 		{
  									type: "integer"
								},
  	airborne_duration: 			{
  									type: "integer"
  								},
	first_frame_grounded: 		{
	  								type: "integer"
								},
  	last_frame_grounded: 		{
  									type: "integer"
								},
  	airborne_grounded: 			{
  									type: "integer"
  								},
	character_id:  				{
									type: "string",
									required: true
								},
	toJSON: function() {
		var obj = this.toObject();
		delete obj._csrf;
		return obj;
	}
  }
};
