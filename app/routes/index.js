import CharacterAdapter from 'marvel-ember/adapters/character';

export default Ember.Route.extend({
	model: function(params) {
		return params;
	},
	setupController: function(controller, model) {
		var Adapter = CharacterAdapter.create();
		var data = Adapter.findCharacters();
		data.then(function(characters) {
			console.log(characters);
			controller.set('model', characters);
		});
	}
});