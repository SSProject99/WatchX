
app.controller("resultBoxController", function ($scope) {
    $scope.resultHeading = 'Copy the result';

    $scope.encryptInput = function ($scope) {
        alert(document.getElementById("inputtext").value)
    }

    $scope.copyResult = function () {
        var copyText = document.getElementById('resultText');

        // For Desktop/System devices
        var range = document.createRange();
        range.selectNode(copyText);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        try {
            document.execCommand('copy');
            alert('Result copied to clipboard');
        } catch (err) {
            console.error('Unable to copy result:', err);
        }
        window.getSelection().removeAllRanges();

        // For Moble devices
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: " + copyText.value);
    };
})