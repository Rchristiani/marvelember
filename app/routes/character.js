import CharacterAdapter from 'marvel-ember/adapters/character';

export default Ember.Route.extend({
	model: function(params) {
		return params;
	},
	setupController: function(controller,model) {
		var Adapter = CharacterAdapter.create();
		var charName = model.character_name;
		var data = Adapter.findCharacter(charName);
		//TODO: figure out how to get nprogress to work?
		//Not sure what is up
		// var progressbar = Nprogress.configuration({
		// 	parent: '.red-line'
		// });
		// progressbar.start();
		data.then(function(character) {
			console.log(character);
			if(character.thumbnail) {
				character.image = character.thumbnail.path + '.' + character.thumbnail.extension;
			}
			//Sets the model for the view
			controller.set('model', character);
			//progressbar.done();
		});
	}
});