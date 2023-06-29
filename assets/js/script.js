// function scrollToHome(home) {
//     var home = document.getElementById('home')

//     home.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
   
// }

function scrollToHome(home) {
  $('html, body').animate({
    scrollTop: $('#' + home).offset().top
  }, 1000, function() {
    // Add animate__backInLeft animation to the Home section
    $('#'+home).addClass('animate__animated animate__backInLeft');
    
    // Calculate the top position of the viewport's middle point
    var middle = $(window).scrollTop() + $(window).height() / 2;
    
    // Calculate the top position of the Home section's middle point
    var homeMiddle = $('#'+home).offset().top + $('#'+home).height() / 3;
    
    // Calculate the scroll amount to center the Home section
    var scrollAmount = homeMiddle - middle;
    
    // Scroll to center the Home section
    $('html, body').animate({
      scrollTop: $('html, body').scrollTop() + scrollAmount
    }, 500);
    
    // Remove animate__backInLeft animation after 1 second
    setTimeout(function() {
      $('#'+home).removeClass('animate__animated animate__backInLeft');
    }, 1000);
  });
}


function scrollToSkills(skills) {
  $('html, body').animate({
    scrollTop: $('#' + skills).offset().top
  }, 1000, function() {
    $('.skill-container').addClass('animate__bounce');
    setTimeout(function() {
      $('.skill-container').removeClass('animate__bounce');
      var containerTop = $('.skill-container').offset().top;
      var windowHeight = $(window).height();
      var scrollTo = containerTop - (windowHeight / 3);
      $('html, body').scrollTop(scrollTo);
    }, 1000);
  })
}


function scrollToProjects(projects) {
  var projects = document.getElementById('projects')

  projects.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
 
}

function scrollToContact(contact) {
  $('html, body').animate({
    scrollTop: $('#' + contact).offset().top
  }, 1000, function() {
    // Add animate__backInLeft animation to the Home section
    $('#'+contact).addClass('animate__animated animate__backInRight');
    
    // Calculate the top position of the viewport's middle point
    var middle = $(window).scrollTop() + $(window).height() / 2;
    
    // Calculate the top position of the Home section's middle point
    var contactMiddle = $('#'+contact).offset().top + $('#'+contact).height() / 3;
    
    // Calculate the scroll amount to center the Home section
    var scrollAmount = contactMiddle - middle;
    
    // Scroll to center the Home section
    $('html, body').animate({
      scrollTop: $('html, body').scrollTop() + scrollAmount
    }, 500);
    
    // Remove animate__backInLeft animation after 1 second
    setTimeout(function() {
      $('#'+contact).removeClass('animate__animated animate__backInRight');
    }, 1000);
  });
}


