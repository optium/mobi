// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])
.controller('GraphCtrl', function () {
    Highcharts.chart('graphique', {
        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        tooltip: {
            valueSuffix: '°C'
        },
        series: [{
            name: 'min/heure',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'max/heure',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'moy/heure',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }]
    });

  })
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('upload', {
      url: '/upload',
      templateUrl: 'views/upload/upload.html',
      controller: 'uploadCTRL'
    })
  $stateProvider.state('liste',{
      url:'/liste',
      templateUrl:'views/liste/liste_fichier.html',
      controller: 'listFileCTRL'
  })
  $stateProvider.state('home',{
    url: '/home',
    templateUrl: 'views/home/home.html'
  })
  $stateProvider.state('file',{
    url: '/file/:file',
    templateUrl: 'views/file/file.html'
  })
  $stateProvider.state('graph',{
    url: '/graph/:file',
    templateUrl: 'views/graph/graph.html',
    controller: 'GraphCtrl'
  })
    $urlRouterProvider.otherwise('/home');  
})



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})
