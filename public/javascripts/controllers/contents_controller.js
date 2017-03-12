app
    .factory( 'ContentsRepository', [ '$http', function( $http ) {
        return({
            getOurCompanyContents : function(){
                return $http({
                    method : 'GET',
                    url : 'contents/ourcompanycontent/'
                });
            },
            getOurServicesContents : function() {
                return $http({
                    method : 'GET',
                    url : 'contents/ourservicescontent/'
                });
            },
            getRecomendationsContents : function() {
                return $http({
                    method : 'GET',
                    url : 'contents/recomendations/'
                });
            },
            getOurPersonalContents : function() {
                return $http({
                    method : 'GET',
                    url : 'contents/ourpersonalcontent/'
                });
            },
            getOurProductsContents : function() {
                return $http({
                    method : 'GET',
                    url : 'contents/ourproductscontent/'
                });
            },
            getTicketPricesContents : function() {
                return $http({
                    method : 'GET',
                    url : 'contents/ticketprices'
                });
            },
            sendContactForm : function( data ) {
                return $http({
                    url : 'contents/contact',
                    method : 'POST',
                    data : JSON.stringify( data )
                });
            }
        });
    }])
    .controller( 'contents-controller',
                    [   '$scope',
                        '$location',
                        'ContentsRepository',
                        'CabinRepository',
                        'AreaRepository',
                        'PoolRepository',
                        function(   $scope,
                                    $location,
                                    ContentsRepository,
                                    CabinRepository,
                                    AreaRepository,
                                    PoolRepository ) {

        // load contents
        ContentsRepository.getOurCompanyContents().success( function( data ) {
            if( !data.error ) {
                $scope.ourcompanycontents = data.data;
            } else {
                $scope.errors = data.message;
            }
        }).error( function( error ) {
            $scope.errors = error;
        });

        ContentsRepository.getOurServicesContents().success( function( data ) {
            if( !data.error ) {
                $scope.ourservicescontents = data.data;
            } else {
                $scope.errors = data.message;
            }
        }).error( function( error ) {
            $scope.errors = error;
        });

        ContentsRepository.getRecomendationsContents().success( function( data ) {
            if( !data.error ) {
                $scope.recomendationscontents = data.data;
            } else {
                $scope.errors = data.message;
            }
        }).error( function( error ) {
            $scope.errors = error;
        });

        ContentsRepository.getOurPersonalContents().success( function( data ) {
            if( !data.error ) {
                $scope.ourpersonalcontents = data.data;
            } else {
                $scope.errors = data.message;
            }
        }).error( function( error ) {
            $scope.errors = error;
        });

        ContentsRepository.getOurProductsContents().success( function( data ) {
            if( !data.error ) {
                $scope.ourproductscontents = data.data;
            } else {
                $scope.errors = data.message;
            }
        }).error( function( error ) {
            $scope.errors = error;
        });

        ContentsRepository.getTicketPricesContents().success( function( data ) {
            if( !data.error ) {
                $scope.ticketprices = data.data;
            } else {
                $scope.errors = data.message;
            }
        }).error( function( error ) {
            $scope.errors = error;
        });

        CabinRepository.getAll().success( function( data ) {
            if( !data.error ) {
                $scope.cabins = data.data;
            } else {
                $scope.errors = data.message;
            }
        }).error( function( error ) {
            $scope.errors = error;
        });

        AreaRepository.getAll().success( function( data ) {
            if( !data.error ) {
                $scope.areas = data.data;
            } else {
                $scope.errors = data.message;
            }
        }).error( function( error ){
            $scope.errors = error;
        });

        PoolRepository.getAll().success( function( data ) {
            if( !data.error ) {
                $scope.pools = data.data;
            } else {
                $scope.errors = data.message;
            }
        }).error( function( error ){
            $scope.errors = error;
        });

        $scope.contact_form = function() {
            console.log($scope.contact);
            ContentsRepository.sendContactForm( $scope.contact ).success( function( data ) {
                if( !data.error ) {
                    $scope.contact_message = "Su mensaje ha sido envíado exitosamente."
                } else {
                    console.log( data );
                    $scope.errors = data.message;
                }
            }).error( function( error ) {
                $scope.errors = error;
            });
        };

    }]);
