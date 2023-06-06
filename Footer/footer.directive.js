var app = angular.module("footerComponent", ["ngRoute"]);
app.directive("footerComponent", function() {
  return {
    templateUrl : "./Footer/footer.html"
  };
});

app.config(function ($routeProvider) {
  $routeProvider
      .when("/", {
          templateUrl: "main.htmll"
      })
      .when("/home", {
          templateUrl: "red.htm"
      });
});