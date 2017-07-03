hrApp.controller('EmployeeAddController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory', 'EmployeeManagers', 'EmployeeM', 'EmployeeDepartments', 'EmployeeJobs',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, EmployeeManagers, EmployeeM, EmployeeDepartments, EmployeeJobs) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";
        $scope.department = {};
        $scope.manager = {};
        $scope.job = {};

        $scope.departments = [];
        $scope.managers = [];
        $scope.jobs = [];

        //TODO #HR1
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

        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
    }]);