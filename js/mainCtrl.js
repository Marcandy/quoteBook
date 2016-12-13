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
    
  })
