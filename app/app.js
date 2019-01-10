const myApp = angular.module('myApp', ['ngRoute', 'ngAnimate'])

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'AppController'
         })
         .when('/contact', {
             templateUrl: 'views/contact.html',
             controller: 'ContactController'
         })
         .when('/contact-success', {
             templateUrl: 'views/contact-success.html',
             controller: 'ContactController'
         })
         .when('/directory', {
            templateUrl: 'views/directory.html',
             controller: 'AppController'
         })
         .otherwise({
             redirectTo: '/home'
         })
}])

myApp.directive('randomDev', [function() {
    return {
        restrict: 'E',
        scope: {
            devs: '=',
            title: '='
        }, 
        template: '<div style="text-align: center;"><img  ng-src="{{ devs[0].thumb }}" /></div>'
    }
}])

myApp.controller('AppController', ['$scope', '$http', function($scope, $http) {
    $scope.devs = []
    $http.get('data/devs.json')
        .success(function(data) {
            $scope.devs = data
    })

    $scope.addDev = function() {
        $scope.devs.push({
            name: $scope.newDev.name,
            belt: $scope.newDev.belt,
            rate: parseInt($scope.newDev.rate),
            available: true,
            thumb: 'https://www.fiserv.com/images/consumers-home-thumb.png'
        })
        $scope.newDev.name = ''
        $scope.newDev.belt = ''
        $scope.newDev.rate = ''
    }

    $scope.removeDev = function(dev) {
        const devToRemove = $scope.devs.indexOf(dev)
        $scope.devs.splice(devToRemove, 1)
    }

    $scope.removeAll = function() {
        $scope.devs = []
    }

    $scope.verificaDevs = function() {
        return $scope.devs.filter(dev => dev.available === true).length === 0
    }
}])

myApp.controller('ContactController', ['$scope', '$location', function($scope, $location) {
    $scope.sendMessage = function() {
        $location.path('contact-success')
    }
}])
