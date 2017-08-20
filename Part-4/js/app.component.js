// create array inside object 
var mruStudioEmployees = [
    {
        number: 1, 
        name: 'MD.Riyaz Uddin', 
        position: 'CEO & Developer', 
        salary: 98500
    },
    {
        number: 2, 
        name: 'Sujon Khan', 
        position: 'Manager', 
        salary: 50500
    },
    {
        number: 3, 
        name: 'Rohim Uddin', 
        position: 'Designer', 
        salary: 45000
    },
    {
        number: 4, 
        name: 'MD Arif Khan', 
        position: 'Sound Editor', 
        salary: 44000
    }
];

// create controller function
var myScope = function ($scope) {
    // define this object in object 'mruStudioProdectList' variable.
    $scope.mruStudioEmployees = mruStudioEmployees;
}

// create new module
var app = angular.module('myApps', []);

// define this controller
app.controller('myCtrl', ['$scope', myScope]);