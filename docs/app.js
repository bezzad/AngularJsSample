var app = angular.module('website', ['ui.router']);

app.config(['$locationProvider', function AppConfig($locationProvider) {

    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

}]);

app.controller('mainCtrl', function ($scope, $location, $http, $timeout, $interval, mytime) {

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

    headerChanger($scope, $timeout);

    $scope.time = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.time = mytime.toLocaleTimeString();
    }, 1000);
});

app.service("mytime", function () {
    this.toLocaleTimeString = function () { return new Date().toLocaleTimeString(); }
});

function headerChanger(scope, timeout) {
    timeout(function () {
        if (scope.title == "AngularJs")
            scope.title = "Sample";
        else
            scope.title = "AngularJs";
        headerChanger(scope, timeout);
    }, 500);
}

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
        { id: 18, name: 'Jack', country: 'England', color: "black" },
        { id: 19, name: 'Jack', country: 'England', color: "black" },
        { id: 20, name: 'Jack', country: 'England', color: "black" },
        { id: 21, name: 'Jack', country: 'England', color: "black" },
        { id: 22, name: 'Jack', country: 'England', color: "black" },
        { id: 23, name: 'Jack', country: 'England', color: "black" },
        { id: 24, name: 'Jack', country: 'England', color: "black" },
        { id: 25, name: 'Jack', country: 'England', color: "black" },
        { id: 26, name: 'Jack', country: 'England', color: "black" },
        { id: 27, name: 'Jack', country: 'England', color: "black" },
        { id: 28, name: 'Jack', country: 'England', color: "black" },
        { id: 29, name: 'Jack', country: 'England', color: "black" },
        { id: 30, name: 'Jack', country: 'England', color: "black" },
        { id: 31, name: 'Kai', country: 'Norway', color: "white" }
    ];
    this.orderByMe = function (name) {
        this.myOrderBy = name;
    }
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

function distinct() {
    return function (list) {
        var xList = angular.copy(list);
        for (i = 0; i < xList.length - 1; i++) { // read array
            for (j = i + 1; j < xList.length; j++) { // read next index of array
                var iEj = true;
                for (prop in xList) {  // read object properties
                    if (prop.toLowerCase() != "id") { // if property is not ID then
                        if (xList[i][prop] != xList[j][prop]) {
                            iEj = false;
                            break;
                        }
                    }
                }
                if (iEj) {
                    xList[j--].remove();
                }
            }
        }
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
app.filter("distinct", distinct);
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