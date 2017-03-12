app
    .factory( 'CabinRepository', [ '$http', function( $http ) {
        return({
            getAll : function() {
                return $http({
                    method : 'GET',
                    url : '/cabin/'
                });
            },
            getById : function( id ) {
                return $http({
                    method : 'GET',
                    url : '/cabin/' + id
                });
            }
        });
    }])
    .controller( 'cabin-controller', [ '$scope', 'CabinRepository', function( $scope, CabinRepository ) {

    }]);
