angular.module('theApp').controller('ControlRoom',function($scope,serveMe){
  $scope.greeting=serveMe.hello;

  $scope.quotes= serveMe.getQuotes();
  $scope.remove=serveMe.removeQuote;

  $scope.deleteQuote=serveMe.removeQuote;

  $scope.addQuote=function addQuote(newQuote, newAuthor){
    serveMe.addQuote(newQuote, newAuthor);
    $scope.newQuote="";
    $scope.newAuthor="";
  }


})
