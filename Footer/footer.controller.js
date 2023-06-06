app.controller('footerController', function ($scope) {
  $scope.footer = [{
    'name': 'Home',
    'active': true,
    'icon': 'home',
    'routePath': '#!home'
  },
  {
    'name': 'Search',
    'active': false,
    'icon': 'search',
    'routePath': '#!search'
  },
  {
    'name': 'Library',
    'active': false,
    'icon': 'book',
    'routePath': '#!library'
  },
  {
    'name': 'Security',
    'active': false,
    'icon': 'lock',
    'routePath': '#!security'
  }];
  $scope.toggleIcon = function (icon) {
    $scope.footer.forEach(function (button) {
      button.active = (button.name === icon);
    });
  };
});


