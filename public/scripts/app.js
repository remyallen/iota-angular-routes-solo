var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/cactusjack', {
            templateUrl: '/views/templates/cactusjack.html',
            controller: 'JackController'
        })
        .when('/mankind', {
            templateUrl: '/views/templates/mankind.html',
            controller: 'MankindController'
        })
        .when('/dudelove', {
            templateUrl: '/views/templates/dudelove.html',
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);



