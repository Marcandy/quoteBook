angular.module('quoteBook')
  .controller('mainCtrl', function ($scope, dataService) {

    $scope.getQuotes = function () {
      $scope.quotes = dataService.getQuotes();
    }

    $scope.getQuotes();

    $scope.deleteQuote = function(text) {
      dataService.removeData(text);
    }

    $scope.addQuote = function (obj) {
      dataService.addData(obj);
      $scope.qText = '';
      $scope.qAuthor = '';
    }
    //another way to sole this without having to insert the ng-model text and authout directly to the ng-click addQuote as an obj, would be
    //$scope.addQuote = function() {
    // var newQuote = {
    //  text: $scope.qText,
    //  author: $scope.qAuthor
    // }
    // if(dataService.addData(newQuote) //its checking if that is passing true or false in dataService)
    //    {
    //    $scope.qText='';
    //    $scope.qAuthor='';
    //    }
    // }
  })
