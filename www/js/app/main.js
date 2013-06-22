define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/nav.html',
	'text!templates/home.html',
	'text!templates/footer.html',
	'less!less-style/home/main'
	], function ($, _, Backbone, tmplNav, tmplHome, tmplFooter) {
	var AppNav = Backbone.View.extend({
		el: '#app-nav',
		initialize: function() {
			this.render();
		},
		render: function() {
			var that = this;
			that.$el.html(_.template(tmplNav));
		}
	});
	var AppFooter = Backbone.View.extend({
		el: '#app-footer',
		initialize: function() {
			this.render();
		},
		render: function() {
			var that = this;
			that.$el.html(_.template(tmplFooter));
		}
	});
	var AppBody = Backbone.View.extend({
		el: '#app-body',
		initialize: function() {
			$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
				// options.url = 'http://x.bgy.xxx/metaphor/1' + options.url;
			});
			this.render();
		},
		render: function() {
			var that = this;
			that.$el.html(_.template(tmplHome));
		}
	});
	var appNav = new AppNav();
	var appBody = new AppBody();
	var appFooter = new AppFooter();
	console.log(arguments);
});
