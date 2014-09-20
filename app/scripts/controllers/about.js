'use strict';

/**
 * @ngdoc function
 * @name sliderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sliderApp
 */
angular.module('sliderApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
