import ajax from 'ic-ajax';

export default Ember.Object.extend({
	findCharacter: function(name) {
		return ajax('http://gateway.marvel.com:80/v1/public/characters?name=' + name + '&apikey=f1da2ae2dc487b462dc04513dea9eac1')
			.then(function(result) {
				console.log(result.data.results[0]);
				return result.data.results[0];
			});
	},
	findComics: function(charId) {

	}
});