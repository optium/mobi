app.controller('fileCTRL', ['$scope','$http' , '$stateParams',   function($scope, $http, $stateParams) {


 var test = $http({
  method : "GET",
  url : 'file/'+$stateParams.file+'.his'
 
 });

console.log($stateParams.file)

test.then(function (filedata) {
 	console.log("tata");
 });

}]);