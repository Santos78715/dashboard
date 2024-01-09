var myapp = angular.module('helloworld', ['ui.router']);

myapp.config(function ($stateProvider, $urlRouterProvider) {
    var homestate = {
        name: 'home',
        url: '/home',
        component: 'homecomponent'
    }

    var detailState = {
        name: 'home.detail',
        url: '/detail/:productId',  // Use a parameter to pass the selected product id
        component: 'detailcomponent',
        resolve: {
            productId: function($stateParams) {
                return $stateParams.productId;
            }
        }
    }

    var cardstate = {
        name: 'card',
        url: '/card',
        component: 'cardcomponent'
    };

    var formstate = {
        name: 'form',
        url: '/form',
        component: 'formcomponent'
    };

    var typographystate = {
        name: 'typography',
        url: '/typography',
        component: 'typographycomponent'
    };

    $stateProvider.state(homestate);
    $stateProvider.state(detailState);
    $stateProvider.state(cardstate);
    $stateProvider.state(formstate);
    $stateProvider.state(typographystate);
});
