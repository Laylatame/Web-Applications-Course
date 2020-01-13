$("#number-chooser").submit(function(Event){
    event.preventDefault();
    console.log("success")
    $(".js-results").empty();

    var numb = parseInt($("#number-choice").val());
    
    if(numb < 0){
        $(".js-results").append("<p class='error'>Please enter a positive number</p>");
    }
    else {
        for (var i = 1; i <= numb; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
              $(".js-results").append("<div class='fizz-buzz-item'><span class='fizzbuzz'>FizzBuzz</span></div>");
            } else if (i % 3 === 0) {
              $(".js-results").append("<div class='fizz-buzz-item'><span class='fizz'>Fizz</span></div>");
            } else if (i % 5 === 0) {
              $(".js-results").append("<div class='fizz-buzz-item'><span class='buzz'>Buzz</span></div>");
            }
          }
    }
});