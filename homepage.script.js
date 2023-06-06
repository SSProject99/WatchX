var app = angular.module("homeApp", ["ngRoute", "containerComponent", "resultBoxComponent", "footerComponent"]);

app.controller("homeController", function ($scope, $compile) {
    $scope.componentCount = 0;
    $scope.containerHeading = "Paste the text here to encrypt";
    $scope.resultHeading = 'Copy the result';



    $scope.encryptInput = function () {
        $scope.copyMessage = "Copy result";
        $scope.copyIcon = "content_copy";

        var inputTextNode = document.getElementById("inputText");
        if (!$scope.inputIsEmpty(inputTextNode.value)) {
            $scope.showResult = "true";
            var reversedText = inputTextNode.value.split('').reverse().join('');
            var encryptedText = $scope.caesarCipher(reversedText, 6);
            $scope.resultText = encryptedText;
        } else {
            $scope.showResult = "false";
        }
    }

    $scope.decryptInput = function () {
        $scope.copyMessage = "Copy result";
        $scope.copyIcon = "content_copy";

        var inputTextNode = document.getElementById("inputText");
        $scope.showResult = "true";
        var cipherText = inputTextNode.value.replace(/\n/gmi, '\n');
        reverseText = $scope.caesarCipher(cipherText, -6);
        var decryptedText = reverseText.split("").reverse().join("");
        $scope.resultText = decryptedText;
    }

    $scope.caesarCipher = function (encrText, key) {
        var n = 26;
        if (key < 0) {
            return $scope.caesarCipher(encrText, key + n);
        }
        return encrText.split('').map(function (c) {
            if (c.match(/[a-z*]/i)) {
                var code = c.charCodeAt();
                var shift = code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
                return String.fromCharCode(((code - shift + key) % n) + shift);
            }
            return c;
        }).join('');
    }

    $scope.inputIsEmpty = function (inputValue) {
        return inputValue == null || inputValue == "" || inputValue == undefined;
    }

    $scope.clearInput = function () {
        var inputTextNode = document.getElementById("inputText");
        inputTextNode.value = "";
    }


    $scope.copyResult = function () {
        // For Desktop/System devices

        var copyText = document.getElementById('resultText');

        if (!$scope.inputIsEmpty(copyText.value)) {
            $scope.copyMessage = "Result copied!";
            $scope.copyIcon = "check";

            var range = document.createRange();
            range.selectNode(copyText);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            try {
                document.execCommand('copy');
                alert('Result copied to clipboard' + copyText.value);
            } catch (err) {
                console.error('Unable to copy result:', err);
            }
            window.getSelection().removeAllRanges();

            // For Moble devices
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices
            navigator.clipboard.writeText(copyText.value);
            alert("Copied the text: " + copyText.value);
        }
    };

    $scope.footer = [{
        'name': 'Home',
        'active': true,
        'icon': 'home',
        'routePath': '#!home'
    },
    {
        'name': 'Display',
        'active': false,
        'icon': 'analytics',
        'routePath': '#!analytics'
    }];

    $scope.toggleIcon = function (icon) {
        $scope.footer.forEach(function (button) {
            button.active = (button.name === icon);
        });
    };
});


app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "./testing.html"
        })
        .when("/analytics", {
            templateUrl: "./testing2.html"
        });
  });