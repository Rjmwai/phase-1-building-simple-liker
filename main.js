// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.getElementsByClassName("like");

  for (const button of likeButtons) {
    button.addEventListener("click", function() {
      mimicServerCall()
        .then(() => {
          if (button.textContent == EMPTY_HEART) {
            button.textContent = FULL_HEART;
            button.classList.add("activated-heart");
          } else {
            button.textContent = EMPTY_HEART;
            button.classList.remove("activated-heart");
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    });
  }
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
