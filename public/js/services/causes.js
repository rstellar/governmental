//Causes service used for causes REST endpoing
angular.module('mean.causes').factory("Causes", ['$resource',function($resource){
  return $resource('cause/:causeId',{
    causeId: '@_id'
  }, {
    update:{
      method: 'PUT'
    }
  });
}]);