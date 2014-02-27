/**
 * Character
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,
  attributes: {
  	name: 		{
  					type: "string",
  					required: true,
  					unique: true
  				},
  	hp:   		{
  					type: "integer",
  					required: true
				},
  	stun: 		{
  					type: "integer",
  					required: true
				},
  	fwalkspeed: {
  					type: "float"
				},
  	bwalkspeed: {
  					type: "float"
  				},
	toJSON: function() {
		var obj = this.toObject();
		delete obj._csrf;
		return obj;
	}
  }
};
