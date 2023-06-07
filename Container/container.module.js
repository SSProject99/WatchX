
var app = angular.module("containerComponent", []);
app.directive("mainContainer", function(){
    return {
        templateUrl : "/Container/container.component.html"
    };
});