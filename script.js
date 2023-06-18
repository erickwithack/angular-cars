var myApp = angular.module("myApp", []);

myApp.controller("myController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http.get("./cars.json").then(function (data) {
      $scope.cars = data;
    });

    $scope.deleteCar = function (car) {
      let idx = $scope.cars.indexOf(car);
      $scope.cars.splice(idx, 1);
    };

    $scope.clear = function () {
      $scope.myapp.color = "";
      $scope.myapp.type = "";
      $scope.myapp.capacity = "";
    };

    $scope.addCar = function () {
      $scope.cars.push({
        color: $scope.myapp.color,
        type: $scope.myapp.type,
        capacity: parseInt($scope.myapp.capacity),
        available: true,
        registration: new Date(),
      });

      $scope.clear();
    };

    console.log($scope.cars);
  },
]);
