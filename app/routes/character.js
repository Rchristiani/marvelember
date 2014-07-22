import CharacterAdapter from 'marvel-ember/adapters/character';

export default Ember.Route.extend({
	model: function(params) {
		return params;
	},
	setupController: function(controller,model) {
		var Adapter = CharacterAdapter.create();
		var charName = model.character_name;
		var data = Adapter.findCharacter(charName);
		data.then(function(character) {
			character.image = character.thumbnail.path + '.' + character.thumbnail.extension;
			//Sets the model for the view
			controller.set('model', character);
		});
	}
});