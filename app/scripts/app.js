'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
var states = [
        {
            name: 'base',
            state: {
                abstract: true,
                url: '',
                templateUrl: 'views/base.html',
                data: {
                    text: 'Base',
                    visible: false
                }
            }
        },
        {
            name: 'login',
            state: {
                url: '/login',
                parent: 'base',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                data: {
                    text: 'Login',
                    visible: false
                }
            }
        },
        {
            name: 'dashboard',
            state: {
                url: '/dashboard',
                parent: 'base',
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl',
                data: {
                    text: 'Dashboard',
                    visible: false
                }
            }
        },
        {
            name: 'overview',
            state: {
                url: '/overview',
                parent: 'dashboard',
                templateUrl: 'views/dashboard/overview.html',
                data: {
                    text: 'Overview',
                    visible: true
                }
            }
        },
        {
            name: 'reports',
            state: {
                url: '/reports/:menuId',
                parent: 'dashboard',
                templateUrl: 'views/dashboard/reports.html',
                controller: 'DetailCtrl',
                data: {
                    text: 'Reports',
                    visible: true
                }
            }
        },
        {
            name: 'coins-gen',
            state: {
                url: '/coins_gen',
                parent: 'dashboard',
                templateUrl: 'views/dashboard/coins-gen.html',
                controller: 'CoinsGenCtrl',
                data: {
                    text: 'Coins Gen',
                    visible: true
                }
            }
        },
        {
            name: 'progress',
            state: {
                url: '/progress',
                parent: 'dashboard',
                templateUrl: 'views/dashboard/progress.html',
                controller: 'ProgressCtrl',
                data: {
                    text: 'Progress',
                    visible: true
                }
            }
        },
        {
            name: 'logout',
            state: {
                url: '/login',
                data: {
                    text: 'Logout',
                    visible: true
                }
            }
        }
    ];

angular.module('yapp', [
                'ui.router',
                'snap',
                'ngAnimate'
            ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('/dashboard', '/dashboard/overview');
            $urlRouterProvider.otherwise('/dashboard/overview');

            angular.forEach(states, function (state) {
                $stateProvider.state(state.name, state.state);
            });
        });
