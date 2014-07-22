var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.resource('character',{path: 'character/:character_name'});
});

export default Router;
