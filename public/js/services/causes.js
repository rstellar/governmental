//Causes service used for causes REST endpoint
angular.module('mean.causes').factory("Causes", ['$resource',function($resource){
    return $resource('causes/:causeId',{
      causeId: '@_id'
    }, {
      update:{
        method: 'PUT'
      }
    });
}]);