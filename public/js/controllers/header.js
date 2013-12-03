angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Causes",
        "link": "causes"
    }, {
        "title": "(New Cause)",
        "link": "causes/create"
    }];
    
    $scope.isCollapsed = false;
}]);