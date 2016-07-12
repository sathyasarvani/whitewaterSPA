/**
 * Created by sssgss on 6/29/16.
 */

    angular.module('psMenu').directive('psMenu', ['$timeout',function ($timeout) {
        return {
            scope: {},
            transclude: true,
            controller: 'psMenuController',
            templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
            link: function (scope, el, attr) {
                    var item = el.find('.ps-selectable-items:first');
                    $timeout(function(){
                        item.trigger('click');
                        });
            }
        };
    }]);
