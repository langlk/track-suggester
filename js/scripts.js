$(document).ready(function() {
  var scores = [0,0,0,0,0];
  var questionNames = ["question1", "question2", "question3", "question4", "question5"];
  var count = 0;

  $("#start").click(function() {
    $(".intro").slideToggle();
    $("form:first-of-type").slideToggle();
  });

  $(".questions").submit(function(event) {
    event.preventDefault();
    if (count < 4) {
      var answer = parseInt($("input:radio[name=" + questionNames[count] + "]:checked").val());
      scores[answer] += 1;
      count += 1;
      $(this).slideToggle();
      $(this).next().slideToggle();
    } else {
      var indexOfMax = scores.indexOf(Math.max.apply(null, scores));
      $(this).slideToggle();
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
    }
  });
});
