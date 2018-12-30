// JavaScript
var motto = "Eat. Code. Sleep. Repeat.";
var mottoLength = 0;
var mottoPrint;

$(document).ready(function() {
  setInterval("cursorAnimation()", 600);
  mottoPrint = $("#motto");
  setInterval("typeNerase()", 175);
  $('a[href*="#"]:not([href="#"])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html, body').animate({
         scrollTop: target.offset().top
       }, 1000);
       return false;
     }
   }
 });
 fillContributors();
});

function fillContributors()
{
  $.ajaxSetup({
    async: false
  });
  $.getJSON('https://api.github.com/repos/kamandprompt/kamandprompt.github.io/stats/contributors',
  function(data) {
      data.sort();
      data.reverse();
      var contributorsDiv = document.getElementById("contributors");
      var rows, iter = 0;
      for(rows = 0; rows<3; ++rows)
      {
        contributorsDiv.innerHTML += "<div class=\"row team-box\">";
        for(i = 0; i<3; ++iter, ++i)
        {
          var login = data[iter].author.login, commits = data[iter].total;
          $.getJSON('https://api.github.com/users/'+login, function(user) {
            name = user.name;
            avatar = user.avatar_url;
            if(name=="null")
            {
              name=login;
            }
            var newChild = "\
            <div class=\"col-lg-3 col-sm-4 text-center member\">\
              <img class=\"img-circle img-responsive img-center team-img\" src=\" " + avatar + "\" alt=\"\">\
              <h3>" + name + "</h3>\
              <h4>Commits: " + commits + "</h3>\
              <div>\
                <a target=\"_blank\" href=\"https://github.com/" + login + " \"><i class=\"fab fa-github social-button\"></i></a>\
              </div>\
            </div>\
            ";
            contributorsDiv.innerHTML += newChild;
          });
        }
        contributorsDiv.innerHTML += "</div>";
      }
  });
}

function cursorAnimation() {
  $("#cursor").animate({
    opacity: 0
  }, "fast", "swing").animate({
    opacity: 1
  }, "fast", "swing");
}

function erase() {
  mottoPrint.html(motto.substr(0, mottoLength--));
  if (mottoLength >= 0) {
    setTimeout("erase()", 20);
  } else {
    mottoLength = 0;
  }
}

function typeNerase() {
  mottoPrint.html(motto.substr(0, mottoLength++));
  if (mottoLength >= motto.length + 1) {
    erase();
  }
}
