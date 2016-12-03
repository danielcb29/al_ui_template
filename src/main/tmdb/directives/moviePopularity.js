/**
 * Provides a search element
 *
 * @module tmdb.directives.moviePopularity
 *
 * @requires angular
 * @requires PopularityController
 *
 * @author Daniel Correa <danielc.web@gmail.com>
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

 define( [ 'angular', 
           'tmdb/partials/popularity/PopularityController' ], 
    function( angular, PopularityController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: PopularityController,
                templateUrl: '/tmdb/partials/popularity/popularity.html',
                restrict: 'E',
                scope: {
                    voteAverage: '=ngModel'
                }
            };
        };
    }
);