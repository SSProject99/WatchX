var app = angular.module("footerComponent", ["ngRoute"]);
app.directive("footerComponent", function() {
  return {
    templateUrl : "/Footer/footer.component.html"
  };
});

