/**
 * Created by sssgss on 6/28/16.
 */
angular.module("psFramework").directive("psFramework",function(){
    return{
        transclude: true,
        scope:{
            title:'@',
            subtitle:'@',
            iconFile: '@'
        },
        controller:"psFrameworkController",
        templateUrl:"ext-modules/psFramework/psFrameworkTemplate.html"
    };
});