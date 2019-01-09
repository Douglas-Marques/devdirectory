const myApp = angular.module('myApp', [])

myApp.controller('AppController', ["$scope", function($scope) {
    $scope.devs = [
        {
            name:'Douglas Marques',
            belt:'black',
            rate: 100,
            available: false
        },
        {
            name:'Douglas Silva',
            belt:'orange',
            rate: 85,
            available: true
        },
        {
            name:'Henry Kalife',
            belt:'green',
            rate: 60,
            available: true
        }
    ]
}])
