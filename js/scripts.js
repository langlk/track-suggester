$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var scores = [0,0,0,0,0];
    var questionNames = ["question1", "question2", "question3", "question4", "question5"];

    questionNames.forEach(function(question) {
      var answer = parseInt($("input:radio[name=" + question + "]:checked").val());
      scores[answer] += 1;
    });

    var indexOfMax = scores.indexOf(Math.max.apply(null, scores));
    $("form#questions").hide();
    if (indexOfMax === 0) {
      $(".ruby-rails").toggle();
    } else if (indexOfMax === 1) {
      $(".php-drupal").show();
    } else if (indexOfMax === 2) {
      $(".java-android").show();
    } else if (indexOfMax === 3) {
      $(".css-design").show();
    } else {
      $(".csharp-dotnet").show();
    }
    event.preventDefault();
  });
});
