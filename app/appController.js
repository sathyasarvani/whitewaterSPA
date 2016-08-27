/**
 * Created by sssgss on 8/24/16.
 */
angular.module('app').controller('appController', ['$scope', function ($scope) {
    $scope.state = 'unauthorized';
    $scope.signIn = function () {
        $scope.state = 'authorized';
    }

}]);