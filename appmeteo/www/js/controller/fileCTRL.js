app.controller('fileCTRL', ['$scope','$http' , '$stateParams',   function($scope, $http, $stateParams) {

  var tabOBJ = {};
  var keys;
  var tabskeys = ['AIR_TEMPERATURE', 'REL_HUMIDITY', 'AIR_PRESSURE', 'LOCAL_WS_2MIN_MNM'];
  var tabsMoy = {'AIR_TEMPERATURE':0, 'REL_HUMIDITY':0, 'AIR_PRESSURE':0, 'LOCAL_WS_2MIN_MNM':0};
  var tab1 = {min:0, max:0};
  var data;
  
  
  var time;

  $scope.title = $stateParams.file;
  var test = $http({
    method : "GET",
    url : 'file/'+$stateParams.file
  });

  test.then(function (filedata) {
    data = filedata.data.split('\n');
    data.splice(0, 1);
    keys = data.splice(0, 1)[0].split('\t');
    parseDataLine();
  });

  function parseDataLine() {
    for (var p = 0; p < keys.length; p++) {
      if(tabskeys.indexOf(keys[p]) != -1) {
        if (typeof tabOBJ[keys[p]] === 'undefined') {
          tabOBJ[keys[p]] = {0:keys[p], 1:10000, 2:'', 3:0, 4:0, 5:''};
        }
      }
    }

    for (var i = 0; i < data.length; i++) {
      line = data[i].split('\t');
      for (var j = 0; j < line.length; j++) {
        if (tabskeys.indexOf(keys[j]) != -1)
        {
          var number = parseFloat(line[j]);
          if(!isNaN(number)) {
            if(tabOBJ[keys[j]][1] >= number || i === 0) {
              tabOBJ[keys[j]][1] = number;
              tabOBJ[keys[j]][2] = line[0];
              if(keys[j] == 'LOCAL_WS_2MIN_MNM') {
                  tab1.min = line[12];
              }
            }
            if(tabOBJ[keys[j]][4] <= number || i === 0) {
              tabOBJ[keys[j]][4] = number;
              tabOBJ[keys[j]][5] = line[0];
              if(keys[j] == 'LOCAL_WS_2MIN_MNM') {
                  tab1.max = line[12];
              }
            }
            tabsMoy[keys[j]] += 1;
            tabOBJ[keys[j]][3] += Math.round(number);
          }
        }
      }
    }

    for(var m = 0; m < tabskeys.length; m++) {
      tabOBJ[tabskeys[m]][3] = Math.round(tabOBJ[tabskeys[m]][3]/tabsMoy[tabskeys[m]]);
    }
    $scope.data = tabOBJ;
    $scope.MM = tab1;
  }
}]);