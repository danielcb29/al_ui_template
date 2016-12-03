/**
 * Popularity Controller provides controller support for popularity progress bar calculation
 *
 * @module tmdb.partials.popularity.PopularityController
 *
 * @requires angular
 *
 * @author Daniel Correa <danielc.web@gmail.com>
 *
 * @returns instance of the PopularityController
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

define( ['angular'],
    function( angular) {
        "use strict";

        var PopularityController = function($scope) {

            $scope.$watch('voteAverage', function(){
                $scope.progress = ($scope.voteAverage*10) + "%";
            });

        };

        PopularityController.$inject = [ '$scope'];

        return PopularityController;
    }
);