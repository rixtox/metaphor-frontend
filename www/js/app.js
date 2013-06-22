// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		app: '../app',
		templates: '../../templates',
		'css-style': '../../css',
		'less-style': '../../less'
	},
	shim: {
		'bootstrap': {
			deps: ['jquery'],
			exports: 'jquery'
		}
	},
	packages: [
		{
			name: 'css',
			location: 'require-css',
			main: 'css'
		},
		{
			name: 'less',
			location: 'require-less',
			main: 'less'
		}
	]
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['jquery', 'underscore', 'backbone', 'bootstrap'],
	function($, _, Backbone) {
		requirejs(['app/main']);
	}
);
