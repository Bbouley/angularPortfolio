app.controller('HomeController', function($scope){
  $scope.message = 'Testing Home Route';
});

app.controller('ProjectsController', function($scope){
  $scope.message = 'Testing Projects Route';
});

app.controller('BioController', function($scope){
  $scope.message = 'Testing Bio Route';
});

app.controller('ResumeController', function($scope){
  $scope.message = 'Testing Resume Route';
});

app.controller('CalculatorAdditionController', function($scope, $routeParams){
    var param1 = $routeParams.param1;
    var param2 = $routeParams.param2;
    $scope.answer = param1 + param2;
});

app.controller('CalculatorDivisionController', function($scope, $routeParams){
    var param1 = $routeParams.param1;
    var param2 = $routeParams.param2;
    $scope.answer = param1 / param2;
});

app.controller('QueryAddCalculatorController', function($scope, $location){
  var url = $location.search();
  var val1 = url.x;
  var val2 = url.y;
  $scope.answer = parseInt(val1) + parseInt(val2);
});

app.controller('QueryDivideCalculatorController', function($scope, $location){
  var url = $location.search();
  var val1 = url.x;
  var val2 = url.y;
  $scope.answer = parseInt(val1) / parseInt(val2);
});
