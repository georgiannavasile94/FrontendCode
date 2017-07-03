hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory','EmployeeM','EmployeeService','EmployeeDepartments','EmployeeJobs','EmployeeManagers',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, EmployeeM, EmployeeService, EmployeeDepartments, EmployeeJobs, EmployeeManagers) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";
        $scope.departments = [];
        $scope.managers = [];
        $scope.jobs = [];

        //TODO #HR5
        EmployeeDepartments.findAllDepartments()
            .then(function (res) {
                $scope.departments = res.data;
            }, function (err) {
                console.log("Error at departments/findAll: " + err);
            });
        EmployeeJobs.findAllJobs()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at jobs/findAll: " + err);
            });
        EmployeeManagers.findManagers()
            .then(function (res) {
                $scope.managers = EmployeeM.findM(res.data);
            }, function (err) {
                console.log("Error at managers/findAll: " + err);
            });
        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;

    }]);