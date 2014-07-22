export default Ember.Controller.extend({
  // the initial value of the `search` property
  search: '',
  actions: {
    query: function() {
      // the current value of the text field
		var query = this.get('search');
		console.log(query);
		this.transitionToRoute('character', { character_name: query });
    }
  }
});