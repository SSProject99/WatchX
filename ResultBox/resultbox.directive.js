
var app = angular.module("resultBoxComponent", []);
app.directive("resultBoxContainer", function(){
    return {
        templateUrl : "./ResultBox/resultbox.component.html"
    };
});