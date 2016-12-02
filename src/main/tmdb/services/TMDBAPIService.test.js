define( ['tmdb/services/TMDBAPIService' ], 
  function( TMDBAPIService ) {
    "use strict";
    describe("the tmdbapiservice", function () {
      var tmdbapiservice;
      var movieList;
      beforeEach(function () {
        /**
          * Load the required modules
        */
        module("ngRoute");
        module("app");

        /**
        * Injection
        */
        inject(["TMDBAPIService", function (_tmdbapiservice) {
          tmdbapiservice = _tmdbapiservice;
        }]);

        //movieList = tmdbapiservice.Discover().discover;
        spyOn(tmdbapiservice, "Discover").and.returnValue({dis: 'a'});
        

      });

      it("Should get all movie list when user load page", function(){
          //expect(true).toBe(true);

          expect(tmdbapiservice.Discover()).toEqual({dis: 'a'})
      });
      
    });
  }
);