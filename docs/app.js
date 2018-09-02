var app = angular.module('website', []);

app.controller('mainCtrl', function ($scope) {
    $scope.title = "AngularJs v1.6.9 Sample";
    $scope.click = "Click on Me!";
    $scope.clickMe = function () {
        $scope.click = "Yes";
        $scope.nullvalue = '---------------------------------------------------------------------------';
    }
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