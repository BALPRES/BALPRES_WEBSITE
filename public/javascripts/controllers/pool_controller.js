app
    .factory( 'PoolRepository', [ '$http', function( $http ) {
        return({
            getAll : function() {
                return $http({
                    method : 'GET',
                    url : '/pool/'
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
    .controller( 'pool-controller', [ '$scope', 'PoolRepository', function( $scope, PoolRepository ) {

    }]);
