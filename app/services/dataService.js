/**
 * Created by sssgss on 7/13/16.
 */

angular.module('app').factory('dataService', ['$timeout', function ($timeout) {

    var locations = [
        {
            id: 1000,
            name: 'Black Creek',
            temperature: 58,
            guides: 36,
            rafts: 18,
            vests: 200,
            image: 'river1.png'
        },
        {
            id: 1001,
            name: 'Black River',
            temperature: 53,
            guides: 25,
            rafts: 20,
            vests: 220,
            image: 'river2.png'
        },
        {
            id: 1002,
            name: 'Hudson River',
            temperature: 55,
            guides: 30,
            rafts: 25,
            vests: 230,
            image: 'river3.png'
        },
        {
            id: 1003,
            name: 'Saranac River',
            temperature: 50,
            guides: 20,
            rafts: 22,
            vests: 180,
            image: 'river4.png'

        },
        {
            id: 1004,
            name: 'Raquette River',
            temperature: 54,
            guides: 28,
            rafts: 18,
            vests: 200,
            image: 'river5.png'
        }
    ];
    var employees = [
        {
            id: 5000,
            name: 'Andy Johnes',
            location: 'Raquette River',
            image: 'employee1.png'
        },
        {
            id: 5001,
            name: 'Nelson Philip',
            location: 'Black River',
            image: 'employee2.png'
        },
        {
            id: 5002,
            name: 'Richard Stone',
            location: 'Hudson River',
            image: 'employee3.png'
        }
    ];

    var getLocations = function () {
        return $timeout(function () {
            return locations;
        }, 500);
    };

    var getLocation = function (id) {
        var timeout = $timeout(function () {
            //$timeout.cancel(timeout);
            //return undefined;
            for (var i = 0; i < locations.length; i++)
                if (locations[i].id == id)
                    return locations[i];
            return undefined;

        }, 2000);
        return timeout;
    };

    var getEmployees = function () {
        return $timeout(function () {
            return employees;
        }, 500);
    };

    var getEmployee = function (id) {
        return $timeout(function () {
            for (var i = 0; i < employees.length; i++)
                if (employees[i].id == id)
                    return employees[i];
            return undefined;
        }, 300);
    };

    return {
        getLocations: getLocations,
        getLocation: getLocation,
        getEmployees: getEmployees,
        getEmployee: getEmployee
    };
}]);