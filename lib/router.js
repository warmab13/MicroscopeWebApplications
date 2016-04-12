Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function(){ return Meteor.subscribe('posts');}
});

Router.route('/', {name: 'postList'});
Router.route('/posts/:_id', {
	name:'postPage',
	data: function(){ return Posts.findOne(this.params.params_id);}
});