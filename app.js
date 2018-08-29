var app = angular.module('website', []);
app.controller('headCtrl', function ($scope) {
    $scope.title = "AngularJs v1.6.9 Sample";
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
        this.orderName = name;
    }
});

var byProperty = function (prop) {
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

function toLower() {
    return function (name) { return name.toLowerCase(); }
}

angular.module('website').filter("orderBy", orderBy);
angular.module("website").filter("toLower", toLower);
