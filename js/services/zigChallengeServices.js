/**
 * Created by DiviyaKumar on 28-03-2017.
 */
app.factory('getService',['$http','$q',function($http,$q){
    return{
        getData:function(url){
            var deferred = $q.defer();
            $http.get(url,{headers: {
                'Content-type': 'application/json'
            }})
            .then(function (data) {
                deferred.resolve(data);
            },function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }
    }
}]);