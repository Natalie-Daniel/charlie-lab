$(document).ready(function () {
  // alert("page is ready");
  console.log("Doc's ready");

  let userGreeting = "Well hello, ";

  $( "#wowdog" ).draggable();

  $("button").click(function () {
    userGreeting += $("#fname").val();

    $("#GreetingOutput").text(userGreeting);
  });
});