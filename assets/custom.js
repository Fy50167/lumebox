/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/


(function() {
  // Add custom code below this line
  var scroll = document.getElementById('scroll-to')
  var buttons = document.getElementsByClassName('scroll-button')
  for (button of buttons) {
    button.addEventListener('click', () => {
      scroll.scrollIntoView({ 
        behavior: 'smooth' 
      })
    })
  }

  document.getElementById('routine-button-1').addEventListener('click', () => {
    document.getElementById('scroll-to-routine-1').scrollIntoView({
      behavior: 'smooth'
    })
  })

  document.getElementById('routine-button-2').addEventListener('click', () => {
    document.getElementById('scroll-to-routine-2').scrollIntoView({
      behavior: 'smooth'
    })
  })

  document.getElementById('routine-button-3').addEventListener('click', () => {
    document.getElementById('scroll-to-routine-3').scrollIntoView({
      behavior: 'smooth'
    })
  })

  document.getElementById('routine-button-4').addEventListener('click', () => {
    document.getElementById('scroll-to-routine-4').scrollIntoView({
      behavior: 'smooth'
    })
  })

  var overlay_1 = document.getElementById('video-overlay');

  document.getElementById('video-overlay-mobile').addEventListener("touchend", () => {
    document.getElementById('video-overlay-mobile').classList.add('overlay-hide');
  })

  
  document.getElementById('video-overlay-mobile-2').addEventListener("touchend", () => {
    document.getElementById('video-overlay-mobile-2').classList.add('overlay-hide');
  })

  overlay_1.addEventListener('click', () => {
    overlay_1.classList.add('overlay-hide');
  })


  document.getElementById('video-overlay-2').addEventListener('click', () => {
    document.getElementById('video-overlay-2').classList.add('overlay-hide');
  })

  
  /*$('#add-to-cart-form').on('submit', function(event) {
    event.preventDefault(); // prevent default form submission
    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: $(this).serialize(),
      dataType: 'json',
      success: function() {
        console.log('success');
      },
      error: function() {
        console.log('error');
      }
    });
  
  });*/
  

  // ^^ Keep your scripts inside this IIFE function call to 
  // avoid leaking your variables into the global scope.
})();
