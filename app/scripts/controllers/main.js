'use strict';

/**
 * @ngdoc function
 * @name sliderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sliderApp
 */
angular.module('sliderApp')
  .controller('MainCtrl', function ($scope) {

  });

angular.module('sliderApp').directive('number', ['$filter', function ($filter) {
    // Directive that number formats properly with i18n no-nb
    // Make sure to test properly if used in Angular 1.3+
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) {
                return;
            }

            ctrl.$formatters.unshift(function (a) {
                return $filter('number')(ctrl.$modelValue);
            });

            ctrl.$parsers.unshift(function (viewValue) {
                var a = viewValue.replace(/\s+/g, '');
                    a = a.replace(',', '.');

                //Don't filter if sting ends in comma
                if (a.indexOf('.') != a.length-1) {
                  var b = $filter('number')(a);
                  elem.val(b);
                }
                return Number(a);
            });
        }
    };
}]);