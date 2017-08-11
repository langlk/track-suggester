$(document).ready(function() {
  // Sets up variables for tracking score and which question the user is on.
  // Each value of scores equals number of answers that point towards a track:
  // 0: Ruby, 1: PHP, 2: Java, 3: CSS, 4: C#. 
  var scores = [0,0,0,0,0];
  var questionNames = ["question1", "question2", "question3", "question4", "question5"];
  // Tracks which question the user is answering.
  var count = 0;

  // Start button on-click function.
  // Hides Introduction and reveals first question.
  $("#start").click(function() {
    $(".intro").slideToggle();
    $("form:first-of-type").slideToggle();
  });

  // Collects each question's answer, then calculates user's result.
  $(".questions").submit(function(event) {
    event.preventDefault();
    if (count < 4) {
      // First four questions:
      // Get answer, add one to the correct score.
      // Hide this question and reveal the next one.
      var answer = parseInt($("input:radio[name=" + questionNames[count] + "]:checked").val());
      scores[answer] += 1;
      count += 1;
      $(this).slideToggle();
      $(this).next().slideToggle();
    } else {
      // End of questionaire:
      // Get maximum score, hide current section, then show correct result.
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
