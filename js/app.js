var app = angular.module('controllerApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  }).hashPrefix('!');
  $routeProvider
   .when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  })
  .when('/projects', {
    templateUrl: 'views/projects.html',
    controller: 'ProjectsController'
  })
  .when('/bio', {
    templateUrl: 'views/bio.html',
    controller: 'BioController'
  })
  .when('/resume', {
    templateUrl:'views/resume.html',
    controller: 'ResumeController'
  })
  .when('/add/:param1/:param2',{
    templateUrl: 'views/calculator.html',
    controller: 'CalculatorAdditionController'
  })
  .when('/divide/:param1/:param2', {
    templateUrl: 'views/calculator.html',
    controller: 'CalculatorDivisionController'
  })
  .when('/add/?', {
    templateUrl: 'views/calculator.html',
    controller: 'QueryAddCalculatorController'
  })
  .when('/divide/?', {
    templateUrl: 'views/calculator.html',
    controller: 'QueryDivideCalculatorController'
  });
});
