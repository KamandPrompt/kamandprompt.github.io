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
 $("#loader").show();
 fillContributors();
});

function fillContributors()
{
  $.getJSON('https://api.github.com/repos/kamandprompt/kamandprompt.github.io/stats/contributors',
  function(data) {
      try {
        data.sort((a,b) => a.total - b.total);
        data.reverse();
      } catch (e) {
        $.ajaxSetup({
          async: false
        });
        $.getJSON('https://api.github.com/repos/kamandprompt/kamandprompt.github.io/stats/contributors',
        function(dataNew) {
          data = dataNew;
          $.ajaxSetup({
            async: true
          });
          data.sort((a,b) => a.total - b.total);
          data.reverse();
        });
      }
      var contributorsDiv = document.getElementById("contributors");
      var rows, iter = 0;
      for(rows = 0; rows<2; ++rows)
      {
        contributorsDiv.innerHTML += "<div class=\"row team-box\">";
        for(i = 0; i<5; ++iter, ++i)
        {
          var login = data[iter].author.login, commits = data[iter].total;
          var avatar = data[iter].author.avatar_url;
            var newChild = "\
            <div class=\"col-lg-2 col-sm3 text-center member contributor-div\">\
              <img class=\"img-circle img-responsive img-center team-img\" src=\" " + avatar + "\" alt=\"\">\
              <h4><a class=\"github-profile\" target=\"_blank\" href=\"https://github.com/" + login + " \">@" + login + "</a></h3>\
              <h5>Commits: " + commits + "</h5>\
            </div>\
            ";
            contributorsDiv.innerHTML += newChild;
        }
        contributorsDiv.innerHTML += "</div>";
      }
  $("#loader").hide();
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

function addCopyright() {
  var date = new Date();
  var year = date.getFullYear();
  var copyright;
  copyright = document.getElementById("copyright");
  console.log(year);
  copyright.innerText =year;
}
