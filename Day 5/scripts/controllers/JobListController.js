/**
 * Created by Georgiana.Vasile on 7/3/2017.
 */
hrApp.controller('JobListController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    function ($scope, $http, $location, CommonResourcesFactory) {

        $scope.jobs = [];


        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

        $scope.viewJob = function (jobId) {
            $location.url('/jobView/' + jobId);
        };

        $scope.editJob = function(jobId) {
            $location.url('/jobEdit/' + jobId);

        };

        $scope.deleteJob = function(jobId) {
            $http({url:CommonResourcesFactory.deleteJobUrl, method: 'DELETE', data:jobId,
                headers:{
                    "Content-Type" : "application/json"
                }
            })
                .success(function(data) {
                    $scope.jobs = data;
                    $location.url('/jobList/');
                });

        };
    }]);