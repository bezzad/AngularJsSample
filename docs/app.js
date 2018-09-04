var app = angular.module('website', ['ui.router']);

app.config(['$locationProvider', function AppConfig($locationProvider) {

    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

}]);

app.controller('mainCtrl', function ($scope, $location, $http) {
    $scope.title = "AngularJs v1.6.9 Sample";
    $scope.click = "Click on Me!";
    $scope.clickMe = function () {
        $scope.link = $location.absUrl(); // $location service == window.location
    };
    $scope.handleMouse = function (ev) {
        $scope.x = ev.clientX;
        $scope.y = ev.clientY;
    };

    $http.get("https://get.taaghche.ir/v1/book/929")
        .then(function (response) {  //First function handles success
            console.log('get response', response);
            if (response.status == 200 && response.data != null)
                $scope.coverUri = response.data.book.coverUri;
            else
                alert(response.statusText)
        }, function (response) { //Second function handles error      
            console.log('get response', response);
            alert("Something went wrong");
        });
});

app.controller('timerCtrl', function ($scope, $timeout, $interval, mytime) {
    $scope.title = "Welcome to AngularJs Sample";
    $scope.time = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.time = mytime.toLocaleTimeString();
    }, 1000);

    // When the DOM element is removed from the page,
    // AngularJS will trigger the $destroy event on
    // the scope. This gives us a chance to cancel any
    // pending timer that we may have.
    // $scope.$on("$destroy", function (event) {
    //         $timeout.cancel(timer);
    //     }
    // );
});

app.controller('namesCtrl', function () {
    this.names = [
        { id: 1, name: 'Jani', country: 'Norway', color: "red" },
        { id: 2, name: 'Carl', country: 'Sweden', color: "green" },
        { id: 3, name: 'Margareth', country: 'England', color: "lightgreen" },
        { id: 4, name: 'Hege', country: 'Norway', color: "gray" },
        { id: 5, name: 'Joe', country: 'Denmark', color: "black" },
        { id: 6, name: 'Gustav', country: 'Sweden', color: "blue" },
        { id: 7, name: 'Birgit', country: 'Denmark', color: "yellow" },
        { id: 8, name: 'Mary', country: 'England', color: "brown" },
        { id: 9, name: 'Behzad', country: 'Iran', color: "red" },
        { id: 10, name: 'Nadia', country: 'England', color: "lightblue" },
        { id: 11, name: 'Mar', country: 'Germany', color: "pink" },
        { id: 12, name: 'Farbod', country: 'Island', color: "purple" },
        { id: 13, name: 'Ali', country: 'Iran', color: "red" },
        { id: 14, name: 'Json', country: 'Bulgaria', color: "yellow" },
        { id: 15, name: 'Nason', country: 'Turky', color: "green" },
        { id: 16, name: 'Mali', country: 'USA', color: "black" },
        { id: 17, name: 'Jack', country: 'England', color: "black" },
        { id: 18, name: 'Kai', country: 'Norway', color: "white" }
    ];
    this.orderByMe = function (name) {
        this.myOrderBy = name;
    }
});

app.service("mytime", function () {
    this.toLocaleTimeString = function () { return new Date().toLocaleTimeString(); }
});

function myFormat() {
    return function (x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
}

app.service('hexafy', function () {
    this.calc = function (x) {
        return x.toString(16);
    }
});

app.filter('hexFormat', ['hexafy', function (hexafy) {
    return function (x) {
        return hexafy.calc(x);
    };
}]);
app.filter("myFormat", myFormat);


app.directive("testTag", function () {
    return {
        restrict: "M",
        replace: true,
        template: "<h1>Made by Comment directive!</h1>"
    };
});
app.directive("testTag", function () {
    return {
        restrict: "A",
        template: "<h1>Made by Attribute directive!</h1>"
    };
});

app.directive("testTag", function () {
    return {
        restrict: "C",
        template: "<h1>Made by Class directive!</h1>"
    };
});

app.directive("testTag", function () {
    return {
        restrict: "E",
        template: "<h1>Made by Element directive!</h1>"
    };
});