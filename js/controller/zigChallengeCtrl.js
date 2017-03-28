/**
 * Created by DiviyaKumar on 28-03-2017.
 */
app.controller('splitController', ['$http', '$scope','$rootScope', 'getService', function($http, $scope,$rootScope,getService) {
    $scope.filterColumn = 'timestamp';
    $rootScope.dataArray = [];
    getService.getData('http://challenge.hexiacloud.com/api/challenge1/list.json').then(function(response) {
        for (i= 0; i < response.data.length; i++) {
            var dateObj = new Date(response.data[i].timestamp);
            response.data[i].id = i;
            response.data[i].timestamp = dateObj.getTime();
        }
        $rootScope.dataArray = response.data;
    });
}]);