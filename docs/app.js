console.log(1234)

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
        $scope.click = $location.absUrl(); // $location service == window.location
        $scope.nullvalue = '---------------------------------------------------------------------------';
    };


    $http.get("https://get.taaghche.ir/v1/book/929").then(function (response) {
        console.log('1',response);
        $scope.coverUri = response.data.book.coverUri;
    });

});

app.controller('namesCtrl', function () {
    this.names = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Carl', country: 'Sweden' },
        { name: 'Margareth', country: 'England' },
        { name: 'Hege', country: 'Norway' },
        { name: 'Joe', country: 'Denmark' },
        { name: 'Gustav', country: 'Sweden' },
        { name: 'Birgit', country: 'Denmark' },
        { name: 'Mary', country: 'England' },
        { name: 'Kai', country: 'Norway' }
    ];
    this.orderByMe = function (name) {
        this.myOrderBy = name;
    }
});

function byProperty(prop) {
    return function (a, b) {
        if (typeof a[prop] == "number") {
            return (a[prop] - b[prop]);
        } else {
            return ((a[prop] < b[prop]) ? -1 : ((a[prop] > b[prop]) ? 1 : 0));
        }
    };
};

function orderBy() {
    return function (list, name) {
        return list.sort(byProperty(name));
    }
}

function myFormat() {
    return function(x) {
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

app.filter("myFormat", myFormat);
app.filter("customOrderBy", orderBy);

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