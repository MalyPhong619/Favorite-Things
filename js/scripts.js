$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();
    var answer1 = $("input#inputAnswer1").val();
    var answer2 = $("input#inputAnswer2").val();
var sum = [answer1, answer2];
var sum1 = sum[1];
var sum2 = sum.push("done");


  $("#finalAnswer").append("<li>" + sum + "</li>");

  });
});
