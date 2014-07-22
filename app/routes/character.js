import CharacterAdapter from 'marvel-ember/adapters/character';

export default Ember.Route.extend({
	model: function(params) {
		var Adapter = CharacterAdapter.create();
		var charName = params.character_name;
		return Adapter.findCharacter(charName);
	}
});