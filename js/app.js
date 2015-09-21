var app = angular.module('controllerApp', ['ngRoute']);

app.config(function($routeProvider){
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
  .otherwise({
    redirectTo: '/'
  });
});
