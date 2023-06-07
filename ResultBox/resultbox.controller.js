
app.controller("resultBoxController", function ($scope) {
    $scope.resultHeading = 'Copy the result';
    $scope.copyMessage = "Copy result";
    $scope.copyIcon = "content_copy";
    
    $scope.encryptInput = function ($scope) {
        alert(document.getElementById("inputtext").value)
    }
})