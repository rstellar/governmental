angular.module('mean.causes').controller('CausesController',['$scope','$routeParams', '$location', 'Global',
  'Causes', function ($scope, $routeParams, $location, Global, Causes){
    $scope.global= Global;

    $scope.create = function(){
        var cause = new Causes({
          title: this.title,
          content: this.content
        });
        article.$save(function(res){
            $location.path("causes/"+res._id);
        });

        this.title = "";
        this.content ="";
    }

    $scope.find = function(){
        Causes.query(function(causes){
            $scope.causes = causes;
        });
    };

}]);