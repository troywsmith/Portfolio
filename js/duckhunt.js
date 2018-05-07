$(function () {


  function createDuck() {
    // I'll do some of the work for you, first I will grab the <body></body>
    const $body = $('body');

    // 1. Create a <div> with the class "duck" and add it to the body.
    const $bodyDuck = $body.append('<div></div>');

    $('div').addClass('duck');
    const $duck = $('.duck');

    // $duck.attr('id', Math.floor(Math.random() * 100000));

    // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
    function duckFlap() {
      $duck.toggleClass("flap");
    }
    setInterval(duckFlap, 250);

    // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
    // a function `moveDuck` that takes a duck object as an argument and sets the
    // "top" and "left" CSS properties.
    // HINT: Use Math.random() * window.innerWidth    for "left"
    //       And Math.random() * window.innerHeight   for "top"

    function randomPosition() {
      $duck.css("left", Math.random() * window.innerWidth);
      $duck.css("top", Math.random() * window.innerWidth);
    }

    function moveDuck() {
      randomPosition()
    };
    // 4. Try making the duck move to a different location every second
    setInterval(moveDuck, 1000);
    // 5. Congratulations! Move on to part 2!

    // ---------------------------- PART 2 ---------------------------------
    $duck.click(function () {
      $duck.toggleClass("shot");
      // $body.remove($duck);
    })
    // 6. Things are getting a bit messy. Let's create
    //    a "function" called createDuck() that does everything in 1-4
    //    and "returns" the duck object
    return $duck;
  }
  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
  for (let i = 0; i < 5; i++) {
    createDuck();
  };

  // 8. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second)

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. If not, alert "YOU WIN!"



  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying

  // FIN. You win 1 trillion tokens.  Play the day away!
});
