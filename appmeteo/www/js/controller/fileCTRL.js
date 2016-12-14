app.controller('fileCTRL', ['$scope','$http' ,'$location', '$rootScope', '$stateParams','$state', '$sce',  function($scope, $http, $location, $rootScope, $state, $stateParams, $sce) {


var test = $http({
 method : "GET",
 url : 'file/'+$stateParams.file+'.his'
});

console.log("state : "+ $stateParams)

test.then(function (filedata) {
	console.log("tata");
});

}]);