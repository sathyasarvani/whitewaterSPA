/**
 * Created by sssgss on 6/29/16.
 */

angular.module('psMenu').directive('psMenuItem',function(){
    return{
        require: '^psMenu',
        scope :{
          label : '@',
          icon: '@',
          route:'@'
        },
        templateUrl:"ext-modules/psMenu/psMenuItemTemplate.html",
        link: function(scope,el,attr,ctrl){
            scope.isActive = function(){
                return el === ctrl.getActiveElement();
            }
            scope.isMenuVertical = function(){
                return ctrl.isMenuVertical() || el.parents('.ps-subitem-section').length > 0;
            }
            el.on('click',function(evt){
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function(){
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                })


            })
        }
    }
});