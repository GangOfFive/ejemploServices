angular.module('testApp', [
    'ngRoute',
    'testApp.controllers',
    'testApp.services'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/feed.html',
        controller: 'FeedCtrl'
    });
});
