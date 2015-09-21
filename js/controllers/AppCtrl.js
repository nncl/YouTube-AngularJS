angular.module("myApp", [])

  .controller("AppCtrl", function($scope, $sce, youtube) {

    $scope.getVideos = function() {
      youtube.fetchVideos(function(data) {
        $scope.src = '';
        $scope.videos = [];

        var length = data.items.length;

        for( var i = 0; i < length; i++ ) {
          $scope.src = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + data.items[i].id.videoId);
          $scope.videos.push( $scope.src );
        }
      });
    };

    $scope.getVideos();

  });
