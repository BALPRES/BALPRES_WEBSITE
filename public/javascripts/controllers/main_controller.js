var app = angular.module( 'BALPRES_WEBSITE', [ 'ngRoute', 'ngCookies', 'ngMaterial' ])
    .config([ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ) {
        $routeProvider
            .when( '/', {
                templateUrl : '../index.html'
            })
            .otherwise({
                redirectTo : '/'
            });
    }])
    .controller( 'navbar-controller', [ '$scope', '$anchorScroll', '$location', '$rootScope', function( $scope, $anchorScroll, $location, $rootScope ) {

        $rootScope.project_name = "Balneario Las Palmas - Sitio Oficial";

        $scope.inicio = function() {
            $location.hash('inicio');
            $anchorScroll();
        };
        $scope.nosotros = function() {
            $location.hash('nosotros');
            $anchorScroll();
        };
        $scope.servicios = function() {
            $location.hash('servicios');
            $anchorScroll();
        };
        $scope.personal = function() {
            $location.hash('personal');
            $anchorScroll();
        };
        $scope.reservaciones = function() {
            $location.hash('reservaciones');
            $anchorScroll();
        };
        $scope.productos = function() {
            $location.hash('productos');
            $anchorScroll();
        };
        $scope.contacto = function() {
            $location.hash('contacto');
            $anchorScroll();
        };

        $scope.logout = function() {
            AuthRepository.logout().success( function( data ) {
                AuthRepository.viewVerification();
                AuthRepository.setMenu();
            }).error( function( error ) {
                $scope.errors = error;
            });
        };

    }])
    .controller( 'menu-cotroller', [ '$scope', '$rootScope', function( $scope, $rootScope ) {
    }])
    .controller( 'main-controller', [ '$scope', function( $scope ) {
        $scope.title = "Main View";
        $scope.message = "This is a message!";
    }])
    .filter( 'dateTimeFilter', function() {
        return function( date ) {
            var d = new Date( date );
            var month = new Array();
            month[0] = "Enero";
            month[1] = "Febrero";
            month[2] = "Marzo";
            month[3] = "Abril";
            month[4] = "Mayo";
            month[5] = "Junio";
            month[6] = "Julio";
            month[7] = "Agosto";
            month[8] = "Septiembre";
            month[9] = "Octubre";
            month[10] = "Noviembre";
            month[11] = "Diciembre";
            return d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear() + " " + ( d.getHours() < 10 ? ("0"+d.getHours()) : d.getHours() ) + ":" + (d.getMinutes()<10?("0"+d.getMinutes()):d.getMinutes());
        };
    })
    .filter( 'dateFilter', function() {
        return function( date ) {
            var d = new Date( date );
            var month = new Array();
            month[0] = "Enero";
            month[1] = "Febrero";
            month[2] = "Marzo";
            month[3] = "Abril";
            month[4] = "Mayo";
            month[5] = "Junio";
            month[6] = "Julio";
            month[7] = "Agosto";
            month[8] = "Septiembre";
            month[9] = "Octubre";
            month[10] = "Noviembre";
            month[11] = "Diciembre";
            return ( d.getDate() + 1 ) + " " + month[d.getMonth()] + " " + d.getFullYear();
        };
    })
    .directive('stringToNumber', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(value) {
                    return '' + value;
                });
                ngModel.$formatters.push(function(value) {
                    return parseFloat(value);
                });
            }
        };
    });
