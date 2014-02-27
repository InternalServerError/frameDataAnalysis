/**
 * CharacterController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  'new': function(request, response) {
  	response.view();
  },
  'list': function(request, response) {
  	Character.find(request.params.all(), function foundCharacters(error, characters) {
  		if(error) return next(error);

  		response.view({
  			characters: characters
  		});
  	});
  },
  create: function(request, response) {
  	Character.create(request.params.all(), function createdCharacter(error, character) {
  		if(error) {
  			request.session.flash = {
  				error: error
  			};

  			return response.redirect('/character/new');
  		}
  		return response.redirect('/character/show/'+character.id);
  	})
  },
  show: function(request, response, next) {
  	Character.findOne(request.param('id'), function foundCharacter(error, character) {
  		if(error) return next(error);
  		if(!character) return next();

  		response.view({
  			character: character
  		});
  	})
  },
  edit: function(request, response, next) {
  	Character.findOne(request.param('id'), function editedCharacter(error, character) {
  		if(error) return next(error);
  		if(!character) return next();

  		response.view({
  			character: character
  		});
  	});
  },
  update: function(request, response, next) {
  	Character.update(request.params.all(), request.param('id'), function updatedCharacter(error) {
  		if(error) return next(error);

  		return response.redirect('/character/show/'+request.param('id'));
  	});
  },
  delete: function(request, response, next) {
  	Character.findOne(request.param('id'), function foundCharacter(error, character) {
  		if(error) return next(error);
  		if(!character) return next();

  		Character.destroy(request.param('id'), function destroyedCharacter(error) {
  			if(error) return next(error);

  			return response.redirect('/character/list');
  		});
  	});
  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to CharacterController)
   */
  _config: {}

  
};
