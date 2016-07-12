/**
 * Created by sssgss on 6/28/16.
 */
angular.module("psFramework")
    .controller("psFrameworkController",['$scope','$rootScope','$window','$timeout',function($scope,$rootScope,$window,$timeout){
        $scope.isMenuVisible = true;
        $scope.isMenuVertical = true;
        $scope.isMenuButtonVisible = true;
        $scope.$on('ps-menu-item-selected-event',function(evt,data){
            $scope.routeString = data.route;
            checkWidth();
            broadcastMenuState();
        });
        $($window).on('resize.psFramework',function(){
           $scope.$apply(function(){
                checkWidth();
                broadcastMenuState();
               });
        });
        $scope.$on('$destroy',function(){
            $($window).off('resize.psFramework');
        });
        $scope.$on('ps-menu-orientation-event-changed',function(evt,data){
           $scope.isMenuVertical = data.isMenuVertical;
        });
        var checkWidth = function(){
            var width = Math.max( $($window).width(),$window.innerWidth);
            $scope.isMenuVisible = (width >= 768);
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        };
        $scope.menuButtonClicked = function(){
            $scope.isMenuVisible = !$scope.isMenuVisible;
            broadcastMenuState();
            //$scope.$apply();
        }
        var broadcastMenuState = function(){
            $rootScope.$broadcast('ps-menu-show',
                {
                    show: $scope.isMenuVisible,
                    //isMenuVertical: $scope.isMenuVertical
                    allowHorizontalToggle : !$scope.isMenuButtonVisible
                });
        }
        $timeout(function(){
            checkWidth();
        },0);
}]);
