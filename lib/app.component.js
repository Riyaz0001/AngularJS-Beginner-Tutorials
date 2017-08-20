// create new module
var app = angular.module('myApps', []);

// make other object
var person = {
    name: 'Riyaz Khan',
    age: '23',
    eyeColor: 'Black',
    type: 'Android Developer'
};

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

var mruStudioProdectList = [
    {
        icon: 'img/icon128x128.png',
        name: 'Islam or Democracy',
        prodectType: 'Apps/Book',
        release: 'FEB 20, 2015',
        supportOS: [
            { nameOfOS: 'Firefox OS' }, 
            { nameOfOS: 'Android' }
        ]
    },

    {
        icon: 'img/icon512x512.png',
        name: 'My Calculator',
        prodectType: 'Apps/Tools',
        release: 'DEC 10, 2015',
        supportOS: [
            { nameOfOS: 'Firefox OS'},
            { nameOfOS: 'Android' }
        ]
    },

    {
        icon: 'img/Icon.png',        
        name: 'E2B Age Converter',
        prodectType: 'Apps/Tools',
        release: 'Feb 20 2015',
        supportOS: [
            { nameOfOS: 'Firefox OS' }, 
            { nameOfOS: 'Android' }, 
            { nameOfOS: 'iOS' }
        ]
    },

    {
        icon: 'img/icon2.png',        
        name: 'Age Calculator',
        prodectType: 'Apps/Tools',
        release: 'August 13 2017',
        supportOS: [
            { nameOfOS: 'Firefox OS' }, 
            { nameOfOS: 'Android' }, 
            { nameOfOS: 'iOS' }
        ]
    }
];

// create controller function
var myCtrl = function($scope) {
    $scope.welcomeMsg = "Hello";
    
    // bind 'person' object in this controller
    $scope.me = person;
 
    // bind ng-show
    $scope.val1 = true;

    // bind to 'ng-repeat' Driective in 'Preson' Object
    $scope.viewPersonDetails = person;
    $scope.mruStudioEmployees = mruStudioEmployees;
    $scope.mruStudioProdectList = mruStudioProdectList;

}

// define this controller
app.controller('myCtrl', ['$scope', myCtrl]);


 // angular custom controller
app.controller('viewUserDetails', ['$scope', function($scope) {
     $scope.yourname = 'MD Riyaz';
     $scope.yourage = 23;
     $scope.yourphone = 944553321;
     $scope.yourcity = 'Dhaka';
     $scope.yourcountry = 'Bangladesh';

     // create function
     $scope.viewDetails = function() {
         // return value
         return(
             'He is ' + $scope.yourname +
             ' ' + $scope.yourage + 
             ' Year old, Phone: ' + $scope.yourphone + 
             ', Live in: ' + $scope.yourcity + 
             ' ' + $scope.yourcountry
             );
     }
}]);