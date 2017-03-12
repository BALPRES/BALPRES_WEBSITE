app
    .factory( 'AreaRepository', [ '$http', function( $http ) {
        return ({
            getAll : function() {
                return $http({
                    url : '/area/',
                    method : 'GET'
                });
            },
            getById : function( id ) {
                return $http({
                    url : '/area/' + id,
                    method : 'GET'
                });
            }
        });
    }])
    .controller( 'area-controller', [ '$scope', function( $scope, AreaRepository ) {

    }]);
