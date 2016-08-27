/**
 * Created by sssgss on 8/22/16.
 */
angular.module('psDashboard').directive('psWidgetBody', function ($compile, $modal) {
    return {
        templateUrl: 'ext-modules/psDashboard/psWidgetBodyTemplate.html',
        link: function (scope, element, attrs) {
            var newElement = angular.element(scope.item.template);
            element.append(newElement);
            $compile(newElement)(scope);

            scope.close = function () {
                scope.widgets.splice(scope.widgets.indexOf(scope.item), 1);
            }

            scope.settings = function () {
                var options = {
                    templateUrl: scope.item.widgetSettings.templateUrl,
                    controller: scope.item.widgetSettings.controller,
                    scope: scope
                };
                $modal.open(options);
            };
            scope.iconClicked = function () {
                // An empty function
                //This function is for ng-click in psWidgetBodyTemplate
                //so that iconclicks are not intercepted by widgets

            }
        }
    }
});


