angular.module('bacanaApp', ['ngRoute', 'oc.lazyLoad'])

.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl:'home.html'
	})
	.when('/aboutMe', {
		templateUrl:'about-me.html'
	})
	.when('/ethos', {
		templateUrl:'ethos.html'
	})
	.when('/projects', {
		templateUrl:'projects.html'
	})
	.when('/publications', {
		templateUrl: 'publications.html',
		controller: 'publicationController'
	})
	.when('/collaborators', {
		templateUrl:'collaborators.html'
	})
	.when('/press', {
		templateUrl:'press.html'
	})
	.when('/events', {
		templateUrl:'events.html'
	})
	.when('/opportunities', {
		templateUrl:'opportunities.html'
	})
	.when('/atelier', {
		templateUrl:'atelier.html'
	})
	.when('/contactUs', {
		templateUrl:'contact-us.html'
	})
	.when('/event-trilateral-workshop', {
		templateUrl:'event-trilateral-workshop.html',
		controller: 'trilateralController'
	})
	.otherwise({
		redirectTo:'/'
	});

	// $locationProvider.html5Mode(true);
});