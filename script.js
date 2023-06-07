var app = angular.module("mainApp", ["ngRoute", "footerComponent"]);

app.controller("indexController", function ($scope) {
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
            templateUrl: "/Container/container.component.html"
        })
        .when("/analytics", {
            templateUrl: "/Route1/route1.html"
        });
});