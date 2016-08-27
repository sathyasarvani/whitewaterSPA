/**
 * Created by sssgss on 6/29/16.
 */
angular.module("psMenu")
    .controller('psMenuController',['$scope','$rootScope',function($scope,$rootScope){
        $scope.showMenu =true;
        $scope.isVertical = true;
        $scope.allowHorizontalToggle = true;
        this.getActiveElement = function(){
          return $scope.activeElement;
        };
        this.setActiveElement = function(el){
            $scope.activeElement = el;
        };
        this.isVertical = function () {
            return $scope.isVertical;
        }
        this.setRoute = function(route){
            $rootScope.$broadcast('ps-menu-item-selected-event',{ route: route});
        }
        this.setOpenMenuScope = function(scope){
            $scope.openMenuScope = scope;
        }
        $scope.$on('ps-menu-show',function(evt,data){
           $scope.showMenu = data.show;
           //$scope.isMenuVertical = data.isMenuVertical;
           $scope.allowHorizontalToggle = data.allowHorizontalToggle;
        });

        $scope.toggleMenuOrientation = function(){
              if($scope.openMenuScope){
                  $scope.openMenuScope.closeMenu();
              }
            $scope.isVertical = !$scope.isVertical;
            $rootScope.$broadcast('ps-menu-orientation-event-changed',
                  {
                      isMenuVertical: $scope.isVertical
                  });
        };

        angular.element(document).bind('click',function(e){
           if($scope.openMenuScope && !$scope.isMenuVertical){
                if($(e.target).parent().hasClass('ps-selectable-items'))
                 return;
               $scope.$apply(function() {
                   $scope.openMenuScope.closeMenu();
               });
               e.stopPropagation();
               e.preventDefault();
           }
        });
}]);




