(function () {
    'use strict';

    var app = angular.module('home');

        app.controller('homeCtrl', ['$scope','$state','$filter',  function ($scope, $state, $filter) {
            $scope.filterName = "";
            $scope.profiles = [{
                "full_name": "Andrew Roddick",
                "hometown.city": "Austin",
                "hometown.state": "Texas",
                "hometown.country": "United States",
                "lng": -97.743061,
                "lat": 30.267153
            },{
                "full_name": "Mithun Chakraborty",
                "hometown.city": "Kolkata",
                "hometown.state": "West Bengal",
                "hometown.country": "India",
                "lng": 88.363895,
                "lat": 22.572646
            },{
                "full_name": "Koh Tiong Lu",
                "hometown.city": "Ipoh",
                "hometown.state": "Perak",
                "hometown.country": "Malaysia",
                "lng": 101.090106,
                "lat": 4.597479
            },{
                "full_name": "Khairy Abu Bakar",
                "hometown.city": "Kuala Lumpur",
                "hometown.state": "Wilayah Persekutuan",
                "hometown.country": "Malaysia",
                "lng": 101.686855,
                "lat": 3.139003
            },{
                "full_name": "Alexander Ferguson",
                "hometown.city": "Glasgow",
                "hometown.state": "Scotland",
                "hometown.country": "United Kingdom",
                "lng": -4.251806,
                "lat": 55.864237
            },{
                "full_name": "Michael Coupe",
                "hometown.city": "Watford",
                "hometown.state": "Hertfordshire",
                "hometown.country": "United Kingdom",
                "lng": -0.390320,
                "lat": 51.656489
            },{
                "full_name": "Robert Jones III",
                "hometown.city": "Cleveland",
                "hometown.state": "Tennessee",
                "hometown.country": "United States",
                "lng": -84.876611,
                "lat": 35.159518
            },{
                "full_name": "Aditya Mittal",
                "hometown.city": "Kolkata",
                "hometown.state": "West Bengal",
                "hometown.country": "India",
                "lng": 88.363895,
                "lat": 22.572646
            },{
                "full_name": "Adam Fleming",
                "hometown.city": "London",
                "hometown.state": "Greater London",
                "hometown.country": "United Kingdom",
                "lng": -0.093650,
                "lat": 51.430921
            },{
                "full_name": "Vishal Devgan",
                "hometown.city": "New Delhi",
                "hometown.state": "Delhi",
                "hometown.country": "India",
                "lng": 77.209021,
                "lat": 28.613939
            }];

/*
*  This is for my experiement tried for other ways and not used the variable anywhere in the task.
*/
            $scope.profileArr = angular.copy($scope.profiles);

            // Grouping
            var country = [];
            var state = [];
            var city = [];

            for(var i=0; i<$scope.profileArr.length; i++) {
                if($scope.profileArr[i]["hometown.country"] !== "") {
                    if(country.indexOf($scope.profileArr[i]["hometown.country"]) == -1) {
                        country.push($scope.profileArr[i]["hometown.country"]);
                    }
                }

                if($scope.profileArr[i]["hometown.state"] !== "") {
                    if(country.indexOf($scope.profileArr[i]["hometown.state"]) == -1) {
                        state.push({
                            "country" : $scope.profileArr[i]["hometown.country"],
                            "state" : $scope.profileArr[i]["hometown.state"]
                        });
                    }                    
                }
            }

/* Experiement */            

        }]);

        app.filter('groupBy', function() {
            return _.memoize(function(items, field) {
                    return _.groupBy(items, field);
                }
            );
        });

})();