/**
 * Created by sssgss on 8/22/16.
 */


angular.module('app').directive('wwaEmployee', ['dataService', function (dataService) {
    return {
        templateUrl: 'app/widgets/wwaEmployee/wwaEmployeeTemplate.html',
        link: function (scope, el, attrs) {
            scope.selectedEmployee = null;
            dataService.getEmployee(scope.item.widgetSettings.id)
                .then(function (data) {
                    scope.selectedEmployee = data;
                    //console.log(scope.selectedEmployee);
                });
        }
    };
}]);




