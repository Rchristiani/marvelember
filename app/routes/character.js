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
			this.set('model', character);
			console.log(this.model);
			console.log(character);
			this.render();
		}.bind(this));
		// this.render('character');
	}
});