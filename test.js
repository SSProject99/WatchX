angular.module('myApp', [])
.controller('mainController', function ($scope) {
    $scope.components = [
    { containerHeading: "ss" },
    ];
    $scope.head = "SS"
    $scope.encryptInput = function() {
        alert("CLicked")
        var containerHeading = 'Encrypted Component';
        $scope.components.push({ containerHeading: containerHeading });
    };
})
.directive('containerComponent', function () {
    return {
        restrict: 'E',
        scope: {
            containerHeading: '@'
        },
        templateUrl: "./Container/container.component.html"
    };
});