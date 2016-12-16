app.controller('listFileCTRL', ['$scope','$http' , '$window',   function($scope, $http, $window) {

$scope.items = ["1_ENHANCED_01.his","1_ENHANCED_02.his"];
$scope.loadFile = function(item){
	$window.location.href = "#/file/" + item;
}

}]);