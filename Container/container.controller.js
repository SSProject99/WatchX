
app.controller("contController", function($scope){
    $scope.containerHeading = 'Heading from container component';

    $scope.encryptInput = function($scope) {
        alert(document.getElementById("inputText").value)
    }
})