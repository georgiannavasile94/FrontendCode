/**
 * Created by Georgiana.Vasile on 7/3/2017.
 */
hrApp.service('JobService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findById: function (jobId) {
                return $http.get(CommonResourcesFactory.findOneJobUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "title": "Programmer",
                            "minsalary": 20000.00,
                            "maxsalary": 24000.00,
                        };
                    });
            }
        }
    }]
);