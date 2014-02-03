angular.module('testApp.services', [
    'ngResource'
])
/* example of a custom service with factory using angular's $http service */
.factory('githubService', function ($http) {
    var githubUser,
        doRequest = function(path) {
            return $http({
                method: 'JSONP',
                cache: true,
                url: 'https://api.github.com/users/' + githubUser + '/' + path + '?callback=JSON_CALLBACK'
            });
        };

    return {
        setUser: function (user) {
            githubUser = user;
        },
        events: function() {
            return doRequest('events');
        }
    };
})

.service('sayHelloService', function () {
    this.sayHello = function (name) {
        return 'Hello, ' + name;
    };
});
