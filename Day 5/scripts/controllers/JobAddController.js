/**
 * Created by Georgiana.Vasile on 7/3/2017.
 */
hrApp.controller('JobAddController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory) {
        $scope.job = {};
        //TODO #HR1

        $scope.reset = function () {
            this.job = {};
        };

        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactory.addJobUrl, method: 'POST', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };


    }]);