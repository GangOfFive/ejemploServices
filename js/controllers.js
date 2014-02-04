angular.module('testApp.controllers', [
    'testApp.services'
])
.controller('FeedCtrl', function ($scope, githubService, sayHelloService) {
    $scope.users = ['KaeruCT', 'leopic', 'pfallasro', 'haden9', 'frivera1984'];

    $scope.viewUserEvents = function (user) {

        $scope.greeting = sayHelloService.sayHello(user);

        githubService.setUser(user);
        githubService.events()
        .success(function(data, status, headers) {
            $scope.events = data.data;
        });
    };
});
