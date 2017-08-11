$(document).ready(function() {
  $("#start").click(function() {
    $(".intro").slideToggle();
    $("#questions div:first-child").slideToggle();
  });

  $(".next").click(function() {
    $(this).parent().slideToggle();
    $(this).parent().next().slideToggle();
  });

  $("#questions").submit(function(event) {
    var scores = [0,0,0,0,0];
    var questionNames = ["question1", "question2", "question3", "question4", "question5"];

    questionNames.forEach(function(question) {
      var answer = parseInt($("input:radio[name=" + question + "]:checked").val());
      scores[answer] += 1;
    });

    var indexOfMax = scores.indexOf(Math.max.apply(null, scores));
    $("#questions").slideToggle();
    if (indexOfMax === 0) {
      $(".ruby-rails").slideToggle();
    } else if (indexOfMax === 1) {
      $(".php-drupal").slideToggle();
    } else if (indexOfMax === 2) {
      $(".java-android").slideToggle();
    } else if (indexOfMax === 3) {
      $(".css-design").slideToggle();
    } else {
      $(".csharp-dotnet").slideToggle();
    }
    event.preventDefault();
  });
});
