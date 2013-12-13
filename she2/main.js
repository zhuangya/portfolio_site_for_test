/*jslint devel: true */

angular.module('hsApp', [
    'ngRoute',
    ]).config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/homepage.html',
    controller: 'HomepageCtrl'
  }).when('/img/:imgId', {
    templateUrl: 'views/img.html',
    controller: 'ImgCtrl'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  });

}).value('IMAGES', [{ //TODO: change these images.
        id: 1,
        name: 'Open Studio Night',
        properties: ['001'],
        src: 'my_img/thumbnails/printing/open_studio_night.jpg'
    }, {
        id: 2,
        name: 'Step Back',
        properties: ['001', '005'],
        src: 'my_img/thumbnails/illustration/step_back.jpg'
    }, {
        id: 3,
        name: 'Fish',
        properties: ['007'],
        src: 'my_img/thumbnails/video/fish.jpg'
    }, {
        id: 4,
        name: 'No Exit',
        properties: ['008'],
        src: 'my_img/thumbnails/interactive_work/shexiangtou.jpg'
    }, {
        id: 5,
        name: 'Typo Berlin',
        properties: ['002'],
        src: 'my_img/thumbnails/book/typo_berlin.jpg'
    }, {
        id: 6,
        name: 'Dos & Donts',
        properties: ['006', '007'],
        src: 'my_img/thumbnails/installation/dad.jpg'
    }, {
        id: 7,
        name: 'Frozen Moment',
        properties: ['001', '005'],
        src: 'my_img/thumbnails/printing/frozen_moment.jpg'
    }, {
        id: 8,
        name: 'Drawing Machine 001',
        properties: ['008'],
        src: 'my_img/thumbnails/interactive_work/drawing_machine.jpg'
    }, {
        id: 9,
        name: 'Rear Window - a movie infographics',
        properties: ['003'],
        src: 'my_img/thumbnails/infographics/rear_window.jpg'
    }, {
        id: 10,
        name: 'Let’s Cook',
        properties: ['008'],
        src: 'my_img/thumbnails/interactive_work/minigame.jpg'
    }, {
        id: 11,
        name: 'Panties On Sale',
        properties: ['001'],
        src: 'my_img/thumbnails/printing/on_sale.jpg'
    }, {
        id: 12,
        name: '不眠（No Sleeping）',
        properties: ['001'],
        src: 'my_img/thumbnails/printing/bumian.jpg'
    }, {
        id: 13,
        name: 'Capsule',
        properties: ['008'],
        src: 'my_img/thumbnails/interactive_work/capsule.jpg'
    }, {
        id: 14,
        name: 'Chicago & Manhattan',
        properties: ['002'],
        src: 'my_img/thumbnails/book/Chicago_Manhattan.jpg'
    }, {
        id: 15,
        name: 'Printmedia',
        properties: ['001'],
        src: 'my_img/thumbnails/printing/printmedia.jpg'
    }, {
        id: 16,
        name: 'Logo Design for Shen Zhen city',
        properties: ['004'],
        src: 'my_img/thumbnails/logo/logo.jpg'
    }, {
        id: 17,
        name: '开国大典（The Founding Ceremony of China）',
        properties: ['007'],
        src: 'my_img/thumbnails/video/kaiguodadian.jpg'
    }, {
        id: 18,
        name: 'Tibet Serials',
        properties: ['005'],
        src: 'my_img/thumbnails/illustration/buddha.jpg'
    }]);

angular.module('hsApp').controller('HomepageCtrl', function($scope, IMAGES) {
    $scope.prop = '';
    $scope.currentImage = '';

    $scope.images = IMAGES;

    $scope.updateImgName = function (image) {
        $scope.currentImage = image.name;
    };

    $scope.select = function (property) {
        if (property === 'all') {
            $scope.curProperty = 'all';
        }
        $scope.curProperty = property;
    };

    $scope.spark = function (properties) {
        if ($scope.curProperty === 'all') {
            return '';
        } else if (properties.indexOf($scope.curProperty) === -1) {
            return 'dim';
        }
        return '';
    };

    $scope.properties = [{ //TODO: change these properties.
        name: '001',
        text: 'Printing'
    }, {
        name: '002',
        text: 'Book'
    }, {
        name: '003',
        text: 'Infographics'
    }, {
        name: '004',
        text: 'Logo'
    }, {
        name: '005',
        text: 'Illustration'
    }, {
        name: '006',
        text: 'Installation'
    }, {
        name: '007',
        text: 'Video'
    }, {
        name: '008',
        text: 'Interactive Work'
    }];
});

angular.module('hsApp').controller('ImgCtrl', function($scope, $routeParams, IMAGES) {
});

angular.module('hsApp').controller('AboutCtrl', function() {
});