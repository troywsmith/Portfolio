$(function() {
  const $body = $('body');

  function createDuck() {
    const $duck = $('<div></div>').addClass('duck').css(randomPosition());

    $body.append($duck);

    window.setInterval(() => {
      $duck.toggleClass('flap');
    }, 250);

    window.setInterval(() => {
      moveDuck($duck);
    }, 1000);

    $duck.click(function() {
      $duck.toggleClass('shot');

      window.setTimeout(() => {
        $duck.remove();

        // By checking for a win only when a duck is shot,
        // I ensure that we don't keep checking after all
        // the ducks have been removed.
        checkForWinner();
      }, 1000);
    });
  }

  function randomPosition() {
    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;
    return {top: top, left: left};
  }

  function moveDuck(duck) {
    const newPosition = randomPosition();
    const isMovingLeft = (duck.position().left - newPosition.left) > 0
    const movingToward = isMovingLeft ? 'left' : 'right';
    const movingAwayFrom = isMovingLeft ? 'right' : 'left';

    duck.addClass(movingToward);
    duck.removeClass(movingAwayFrom);
    duck.css(newPosition);

    // The above code addresses the bonus concerning the direction of movement
    // for the ducks. You can move the ducks without calcuating their directions
    // simply by doing:
    //
    // `duck.css(randomPosition());`
  }

  function checkForWinner() {
    // Taking advantage of the fact that the body
    // is empty except for duck elements 😁

    if ($body.children().length === 0) {
      alert('YOU WIN!');
    }
  }

  function startGame() {
    for (let i = 1; i <= 5; i++) {
      createDuck();
    }
  }

  startGame();

  // This solution does not address the following bonus problems.

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?
});