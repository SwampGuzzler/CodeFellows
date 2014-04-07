/*var User = Backbone.Model.extend({
	defaults: {
		firstName: "John",
		lastName: "Smith",
		email: "John.Smith@gmail.com"
	},
	present: function() {
		return this.get(' firstName') + "currently exists!";
	},
	change: function(lastName2) {
		this.lastName = this.set(lastName2);

	},
	validate: function(attributes) {
		if ( ! attributes.firstName ) {
			return "Users must have a first name!";
		}
		if ( ! attributes.lastName ) {
			return "Users must have a first name!";
		}
		if ( ! attributes.email ) {
			return "Users must have a first name!";
		}

	}
});

var UserView = Backbone.View.extend({
	tagName: 'li',
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('firstName') + ' ' + this.model.get('lastName') + ' - ' + this.model.get('email'));
	}
});
var user = new User;
var userView = new UserView({model: user});*/
(function() {

window.App = {
	Models: {},
	Collections: {},
	Views: {}
};

window.template = function(id) {
	return _.template( $('#' + id).html() );
};

App.Models.Task = Backbone.Model.extend({});

App.Collections.Tasks = Backbone.Collection.extend({
	model: App.Models.Task
});

App.Views.Tasks = Backbone.View.extend({
	tagName: 'li',
	render: function() {
		this.collection.each(this.addOne, this);
	},
	addOne: function(task) {
		//create new child view 
		var taskView = new App.Views.Task({ model: task });
		//append to root element
		this.$el.append(taskView.render().el);
	}
});

App.Views.Task = Backbone.View.extend({
	tagName: 'li',

	template: _.template( $('#taskTemplate').html() ),

	events: {
		
	},

	render: function() {
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);
		return this;
	}
});

var tasksCollection = new App.Collections.Tasks([
	{
		firstName: "Luke",
		lastName: "C",
		email: "lc07@uw.edu"
	},
	{
		firstName: "Mike",
		lastName: "Jackson",
		email: "MikeJackson@uw.edu"
	},
	{
		firstName: "James",
		lastName: "Brown",
		email: "JamesBrown@gmail.com"
	}
]);


var tasksView = new App.Views.Tasks({ collection: tasksCollection });
tasksView.render();
console.log(tasksView.el);
$(document.body).html(tasksView.el);
//$('.users').html(tasksView.el);
})();
