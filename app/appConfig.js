/**
 * Created by sssgss on 6/29/16.
 */
//angular.module("app").config(function($provide){
//    $provide.decorator("$exceptionHandler",['$delegate',function($delegate){
//        return function(exception,cause){
//                $delegate(exception,cause);
//                //alert(exception.message);
//        };
//
//    }]);
//    });

angular.module('app').config(function($provide) {
    $provide.decorator("$exceptionHandler", ['$delegate', function($delegate) {
        return function(exception, cause) {
            $delegate(exception, cause);
            alert(exception.message);
        };
    }]);
});
