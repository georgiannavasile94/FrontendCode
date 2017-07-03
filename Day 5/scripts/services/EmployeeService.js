hrApp.service('EmployeeService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findById: function (employeeId) {
                return $http.get(CommonResourcesFactory.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            }
        }
    }]
);


hrApp.service('EmployeeDepartments', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findAllDepartments: function () {
                return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "departmentId": 90
                        };
                    });
            }
        }
    }]
);
hrApp.service('EmployeeJobs', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findAllJobs: function () {
                return $http.get(CommonResourcesFactory.findAllJobsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "jobId": 1,
                        };
                    });
            }
        }
    }]
);

hrApp.service('EmployeeManagers', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {


            findManagers: function () {

                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data) {
                    })
                    .error(function (err) {
                        return {
                            "managerId": null,
                        };
                    });
            }
        }
    }]
);
hrApp.service('EmployeeM', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findM: function (param) {

                managersList = [];
                idList = {};
                managerIndex = {};
                for (managerIndex in param)
                    if (param[managerIndex].managerId != null && idList[param[managerIndex].managerId.employeeId] == undefined) {
                        managersList.push(param[managerIndex].managerId);
                        idList[param[managerIndex].managerId.employeeId] = true;
                    }
                return managersList;


            }
        }
    }]
);